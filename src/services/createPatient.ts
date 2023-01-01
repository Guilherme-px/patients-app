import { IPatient } from '../types/interfaces/patients';
import api from './axios';
import getPatients from './getPatients';

const createPatient = async (patient: IPatient, dispatch: Function) => {
    await api
        .post('/patients', patient)
        .then((res) => {
            getPatients(dispatch);
        })
        .catch((err) => {
            return err;
        });
};

export default createPatient;
