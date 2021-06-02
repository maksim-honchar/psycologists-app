export interface PersonData {
    photo: string | null,
    type: string,
    email: string,
    isFavourite: boolean,
    isDisfavourite: boolean
}

export interface PersonItem {
    personData: PersonData;
    personId: string;
}

export interface InitialState {
    psycologistsList: PersonItem[];
    status: string;
    error: string | undefined | null;
}
