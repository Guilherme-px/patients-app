import api from './axios';
import getPatients from './getPatients';

const deletePatient = async (id: string, dispatch: Function) => {
    await api
        .delete(`/patients/${id}`)
        .then(() => {
            getPatients(dispatch);
        })
        .catch((err) => {
            return err;
        });
};

export default deletePatient;
