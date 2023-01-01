import { useState } from 'react';
import { Button, TableCell, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IPatientProps } from '../../types/interfaces/patients';
import PatientForm from '../forms/PatientForm';
import Modal from '@mui/material/Modal';
import styles from '../../assets/sass/button.module.sass';
import DeletePatientDialog from '../dialogs/DeletePatientDialog';

const PatientTableRow = ({ patient }: IPatientProps) => {
    const [isOpenModal, setOpenModal] = useState(false);
    const [isOpenDialog, setIsOpenDialog] = useState(false);

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
                        <Button onClick={() => setOpenModal(true)}>
                            <EditIcon></EditIcon>
                        </Button>

                        <Button onClick={() => setIsOpenDialog(true)}>
                            <DeleteIcon style={{ fill: 'red' }}></DeleteIcon>
                        </Button>
                    </div>
                </TableCell>
            </TableRow>

            <Modal
                className={styles.form_modal}
                open={isOpenModal}
                onClose={() => setOpenModal(false)}
            >
                <>
                    <PatientForm setOpen={setOpenModal} patient={patient} />
                </>
            </Modal>

            <DeletePatientDialog
                isOpen={isOpenDialog}
                setDialog={setIsOpenDialog}
                id={patient.id!}
            />
        </>
    );
};

export default PatientTableRow;
