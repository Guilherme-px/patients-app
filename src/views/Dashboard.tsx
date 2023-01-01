import { useEffect } from 'react';
import styles from '../assets/sass/button.module.sass';
import getPatients from '../services/getPatients';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { Box } from '@mui/system';
import { CircularProgress } from '@mui/material';
import PatientsTable from '../components/table/PatientsTable';
import PatientForm from '../components/forms/PatientForm';

const Dashboard = () => {
    const dispatch = useDispatch();

    const storeState = useSelector((state: RootState) => state.patient);

    useEffect(() => {
        getPatients(dispatch);
    }, []);
    return (
        <main className={styles.container}>
            {storeState.loading ? (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '100vh',
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <div className={styles.button_content}>
                        <button className={styles.button_add}>
                            Novo paciente
                        </button>
                    </div>

                    <PatientsTable />
                    <PatientForm />
                </>
            )}
        </main>
    );
};

export default Dashboard;
