import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
} from '@mui/material';
import { useDispatch } from 'react-redux';

import { IDeleteDialogProps } from '../../types/interfaces/patients';
import deletePatient from '../../services/deletePatient';

const DeletePatientDialog = ({ isOpen, setDialog, id }: IDeleteDialogProps) => {
    const dispatch = useDispatch();

    return (
        <Dialog open={isOpen} onClose={() => setDialog(false)}>
            <DialogContent>
                <DialogContentText>
                    Deseja deletar este paciente ?
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={() => setDialog(false)}>Cancelar</Button>

                <Button
                    onClick={() => {
                        deletePatient(id, dispatch);
                        setDialog(false);
                    }}
                >
                    Excluir
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeletePatientDialog;
