import { useEffect, useState } from 'react';
import styles from '../assets/sass/button.module.sass';
import getPatients from '../services/getPatients';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { Box } from '@mui/system';
import { CircularProgress } from '@mui/material';
import PatientsTable from '../components/table/PatientsTable';
import PatientForm from '../components/forms/PatientForm';
import Modal from '@mui/material/Modal';

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
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
                        <button
                            className={styles.button_add}
                            onClick={() => setIsOpen(true)}
                        >
                            Novo paciente
                        </button>
                    </div>

                    <PatientsTable />

                    <Modal
                        className={styles.form_modal}
                        open={isOpen}
                        onClose={() => setIsOpen(false)}
                    >
                        <>
                            <PatientForm setOpen={setIsOpen} />
                        </>
                    </Modal>
                </>
            )}
        </main>
    );
};

export default Dashboard;
