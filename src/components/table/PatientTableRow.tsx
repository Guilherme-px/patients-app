import { useState } from 'react';
import { Button, TableCell, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IPatientProps } from '../../types/interfaces/patients';
import PatientForm from '../forms/PatientForm';
import Modal from '@mui/material/Modal';
import styles from '../../assets/sass/button.module.sass';

const PatientTableRow = ({ patient }: IPatientProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <TableRow>
                <TableCell>{patient.firstName}</TableCell>
                <TableCell>{patient.lastName}</TableCell>
                <TableCell>{patient.email}</TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>{patient.birthday}</TableCell>
                <TableCell>{patient.address.city}</TableCell>
                <TableCell>{patient.address.state}</TableCell>
                <TableCell>{patient.address.street}</TableCell>
                <TableCell>{patient.address.streetNumber}</TableCell>
                <TableCell>
                    <div style={{ display: 'flex' }}>
                        <Button onClick={() => setIsOpen(true)}>
                            <EditIcon></EditIcon>
                        </Button>

                        <Button>
                            <DeleteIcon style={{ fill: 'red' }}></DeleteIcon>
                        </Button>
                    </div>
                </TableCell>
            </TableRow>

            <Modal
                className={styles.form_modal}
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <>
                    <PatientForm setOpen={setIsOpen} patient={patient} />
                </>
            </Modal>
        </>
    );
};

export default PatientTableRow;
