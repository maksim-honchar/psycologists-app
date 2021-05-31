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

export const addToFavourite = createAsyncThunk("specialists/addToFavourite", async (id: string) => {
    let response = await db.collection(psycologists).doc(id).get();
    let result = response.data() as PersonData;
    await db.collection(psycologists).doc(id).update({ isFavourite: !result.isFavourite, isDisfavourite: false })
    response = await db.collection(psycologists).doc(id).get();
    result = response.data() as PersonData;

    return { id, result }
})

export const addToDisfavourite = createAsyncThunk("specialists/addToDisfavourite", async (id: string) => {
    let response = await db.collection(psycologists).doc(id).get();
    let result = response.data() as PersonData;
    await db.collection(psycologists).doc(id).update({ isDisfavourite: !result.isDisfavourite, isFavourite: false })
    response = await db.collection(psycologists).doc(id).get();
    result = response.data() as PersonData;

    return { id, result }
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
        builder.addCase(addToFavourite.fulfilled, (state, action) => {
            const { id, result } = action.payload
            const existPerson = state.psycologistsList.find(person => person.personId === id)
            if (existPerson) {
                existPerson.personData = result;
            }
        })
        builder.addCase(addToDisfavourite.fulfilled, (state, action) => {
            const { id, result } = action.payload
            const existPerson = state.psycologistsList.find(person => person.personId === id)
            if (existPerson) {
                existPerson.personData = result;
            }
        })
    }
})

export default specialistsSlice.reducer
