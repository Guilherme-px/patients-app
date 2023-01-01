export interface IPatient {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    birthday: string;
    gender: string;
    address: {
        street: string;
        streetNumber: number;
        city: string;
        state: string;
    };
}

export interface IPatientState {
    loading: boolean;
    patients: IPatient[];
}

export interface IPatientProps {
    patient: IPatient;
}
