import { IPatient } from '../types/interfaces/patients';
import api from './axios';
import getPatients from './getPatients';

const createPatient = async (patient: IPatient, dispatch: Function) => {
    console.log(patient);
    await api
        .post('/patients', patient)
        .then(() => {
            getPatients(dispatch);
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
};

export default createPatient;
