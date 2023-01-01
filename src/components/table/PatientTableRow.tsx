import { Button, TableCell, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IPatientProps } from '../../types/interfaces/patients';

const PatientTableRow = ({ patient }: IPatientProps) => {
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
                        <Button>
                            <EditIcon></EditIcon>
                        </Button>

                        <Button>
                            <DeleteIcon style={{ fill: 'red' }}></DeleteIcon>
                        </Button>
                    </div>
                </TableCell>
            </TableRow>
        </>
    );
};

export default PatientTableRow;
