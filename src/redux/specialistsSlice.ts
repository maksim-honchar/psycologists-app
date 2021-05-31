import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { psycologists } from '../utils/constants';
import db from '../utils/db';
import { InitialState, PersonData, PersonItem } from '../utils/types';

let allSpecialists: PersonItem[] = [];

// fetch persons from firestore
export const fetchSpecialists = createAsyncThunk("specialists/fetchSpecialists", async () => {
    const response = await db.collection(psycologists).get();
    response.forEach((doc) => allSpecialists.push({ personId: doc.id, personData: doc.data() as PersonData }));
    return allSpecialists;
})

//  Add peson to favourite
export const addToFavourite = createAsyncThunk("specialists/addToFavourite", async (id: string) => {
    let response = await db.collection(psycologists).doc(id).get();
    let result = response.data() as PersonData;
    await db.collection(psycologists).doc(id).update({ isFavourite: !result.isFavourite, isDisfavourite: false })
    response = await db.collection(psycologists).doc(id).get();
    result = response.data() as PersonData;
    return { id, result }
})

//  Add peson to disfavourite
export const addToDisfavourite = createAsyncThunk("specialists/addToDisfavourite", async (id: string) => {
    let response = await db.collection(psycologists).doc(id).get();
    let result = response.data() as PersonData;
    await db.collection(psycologists).doc(id).update({ isDisfavourite: !result.isDisfavourite, isFavourite: false })
    response = await db.collection(psycologists).doc(id).get();
    result = response.data() as PersonData;
    return { id, result }
})

interface AddNewSpecialist {
    idName: string,
    formSubmit: PersonData
}
export const addNewSpecialist = createAsyncThunk("specialists/addNewSpecialist", async (formData: AddNewSpecialist) => {
    await db.collection(psycologists).doc(formData.idName).set(formData.formSubmit);
    const response = await db.collection(psycologists).doc(formData.idName).get();
    const result = response.data() as PersonData;
    return { personId: formData.idName, personData: result };
})

const initialState: InitialState = {
    psycologistsList: [],
    status: "idle",
    error: null
}

const specialistsSlice = createSlice({
    name: "specialists",
    initialState,
    reducers: {},
    extraReducers: builder => {
        // Reducer for fetchSpecialists сases
        builder.addCase(fetchSpecialists.pending, (state) => {
            state.status = "pending"
        })
        builder.addCase(fetchSpecialists.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.psycologistsList = state.psycologistsList.concat(action.payload)
        })
        builder.addCase(fetchSpecialists.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        })

        // Reducer for addToFavourite сases
        builder.addCase(addToFavourite.pending, (state) => {
            state.status = "pending"
        })
        builder.addCase(addToFavourite.fulfilled, (state, action) => {
            state.status = "succeeded"
            const { id, result } = action.payload
            const existPerson = state.psycologistsList.find(person => person.personId === id)
            if (existPerson) {
                existPerson.personData = result;
            }
        })
        builder.addCase(addToFavourite.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        })

        // Reducer for addToDisfavourite сases
        builder.addCase(addToDisfavourite.pending, (state) => {
            state.status = "pending"
        })
        builder.addCase(addToDisfavourite.fulfilled, (state, action) => {
            const { id, result } = action.payload
            const existPerson = state.psycologistsList.find(person => person.personId === id)
            if (existPerson) {
                existPerson.personData = result;
            }
        })
        builder.addCase(addToDisfavourite.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        })

        // Reducer for addNewSpecialist сases
        builder.addCase(addNewSpecialist.pending, (state) => {
            state.status = "pending"
        })
        builder.addCase(addNewSpecialist.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.psycologistsList.push(action.payload)
        })
        builder.addCase(addNewSpecialist.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        })
    }
})

export default specialistsSlice.reducer
