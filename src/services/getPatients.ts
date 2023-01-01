import { setLoading, setPatients } from '../store/patient/patientSlice';
import api from './axios';

const getPatients = async (dispatch: Function) => {
    dispatch(setLoading(true));

    try {
        const { data } = await api.get('/patients');

        dispatch(setPatients(data));
    } catch (err) {
        return err;
    }

    dispatch(setLoading(false));
};

export default getPatients;
