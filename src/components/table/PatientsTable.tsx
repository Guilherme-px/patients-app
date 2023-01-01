import { useState, useEffect } from 'react';
import {
    Table,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
    Paper,
    TableContainer,
    styled,
    TablePagination,
} from '@mui/material';

import { useSelector } from 'react-redux';
import PatientTableRow from './PatientTableRow';
import { RootState } from '../../store/store';

const Thead = styled(TableRow)`
    background: #009adf;
    & > th {
        color: #fff;
        font-size: 15px;
        font-weight: bold;
    }
`;

const PatientsTable = ({ setIsOpen }: any) => {
    const [page, setPage] = useState(0);
    const rowsPerPage = 5;

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const { patients } = useSelector((state: RootState) => state.patient);

    return (
        <>
            <TableContainer component={Paper} style={{ marginTop: '50px' }}>
                <Table sx={{ minWidth: 700 }}>
                    <TableHead>
                        <Thead>
                            <TableCell>Nome</TableCell>
                            <TableCell>Sobrenome</TableCell>
                            <TableCell>E-mail</TableCell>
                            <TableCell>Gênero</TableCell>
                            <TableCell>Nacimento</TableCell>
                            <TableCell>Cidade</TableCell>
                            <TableCell>Estado</TableCell>
                            <TableCell>Rua</TableCell>
                            <TableCell>Numero</TableCell>
                            <TableCell style={{ textAlign: 'center' }}>
                                Ações
                            </TableCell>
                        </Thead>
                    </TableHead>
                    <TableBody>
                        {patients
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((patient) => (
                                <PatientTableRow
                                    key={patient.id}
                                    patient={patient}
                                />
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[rowsPerPage]}
                component="div"
                count={patients.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
            />
        </>
    );
};

export default PatientsTable;
