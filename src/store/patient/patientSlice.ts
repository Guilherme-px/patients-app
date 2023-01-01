import { IPatient, IPatientState } from './../../types/interfaces/patients';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IPatientState = {
    loading: true,
    patients: [],
};

export const patientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers: {
        setPatients: (state, action: PayloadAction<IPatient[]>) => {
            state.patients = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});

export const { setLoading, setPatients } = patientSlice.actions;

export default patientSlice.reducer;
