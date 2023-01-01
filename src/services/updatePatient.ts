import api from './axios';
import getPatients from './getPatients';
import { IPatient } from '../types/interfaces/patients';

const updatePatient = async (
    patient: IPatient,
    dispatch: Function,
    id: string
) => {
    await api
        .put(`/patients/${id}`, patient)
        .then(() => {
            getPatients(dispatch);
        })
        .catch((err) => {
            return err;
        });
};

export default updatePatient;
