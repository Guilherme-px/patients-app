import {
    Button,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    MenuItem,
    Radio,
    RadioGroup,
    TextField,
} from '@mui/material';

import states from '../../utils/states';
import { useFormik } from 'formik';
import validations from '../../utils/validations';
import { useDispatch } from 'react-redux';
import '../../assets/sass/patientsForm.sass';
import createPatient from '../../services/createPatient';

const PatientForm = (setOpen: any) => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            birthday: '',
            gender: '',
            street: '',
            streetNumber: '',
            city: '',
            state: '',
        },
        validationSchema: validations,
        onSubmit: async (values) => {
            createPatient(
                {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    birthday: values.birthday,
                    gender: values.gender,
                    address: {
                        street: values.street,
                        streetNumber: Number(values.streetNumber),
                        city: values.city,
                        state: values.state,
                    },
                },
                dispatch
            );
            return setOpen(false);
        },
    });

    const { values, touched, handleChange, errors } = formik;

    return (
        <form className="patient_form" onSubmit={formik.handleSubmit}>
            <TextField
                className="firstName_input"
                name="firstName"
                label="Nome"
                value={values.firstName}
                onChange={handleChange}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
            />

            <TextField
                className="lastName_input"
                name="lastName"
                label="Sobrenome"
                value={values.lastName}
                onChange={handleChange}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
            />

            <TextField
                className="birthday_input"
                name="birthday"
                label="Data de nascimento"
                InputLabelProps={{ shrink: true }}
                type="date"
                value={values.birthday}
                onChange={handleChange}
                error={touched.birthday && Boolean(errors.birthday)}
                helperText={touched.birthday && errors.birthday}
            />

            <FormControl className="gender_input">
                <FormLabel id="gender_label">Gênero</FormLabel>

                <RadioGroup
                    row
                    aria-labelledby="gender_label"
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        value="Masculino"
                        control={<Radio />}
                        label="Masculino"
                    />
                    <FormControlLabel
                        value="Feminino"
                        control={<Radio />}
                        label="Feminino"
                    />
                </RadioGroup>
                {touched.gender && errors.gender && (
                    <FormHelperText
                        error={touched.gender && Boolean(errors.gender)}
                    >
                        {errors.gender}
                    </FormHelperText>
                )}
            </FormControl>

            <TextField
                className="email_input"
                name="email"
                label="E-mail"
                type="email"
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
            />

            <TextField
                className="street_input"
                name="street"
                label="Rua"
                value={values.street}
                onChange={handleChange}
                error={touched.street && Boolean(errors.street)}
                helperText={touched.street && errors.street}
            />

            <TextField
                className="number_input"
                name="streetNumber"
                label="Número"
                type="number"
                value={values.streetNumber}
                onChange={handleChange}
                error={touched.streetNumber && Boolean(errors.streetNumber)}
                helperText={touched.streetNumber && errors.streetNumber}
            />

            <TextField
                className="city_input"
                name="city"
                label="Cidade"
                value={values.city}
                onChange={handleChange}
                error={touched.city && Boolean(errors.city)}
                helperText={touched.city && errors.city}
            />

            <TextField
                className="state_input"
                select
                name="state"
                label="Estado"
                value={values.state}
                onChange={handleChange}
                error={touched.state && Boolean(errors.state)}
                helperText={touched.state && errors.state}
            >
                {states.map(({ acronym, name }) => (
                    <MenuItem key={acronym} value={acronym}>
                        {name}
                    </MenuItem>
                ))}
            </TextField>

            <Button
                className="submit_button"
                variant="contained"
                type="submit"
                size="large"
            >
                salvar
            </Button>
        </form>
    );
};

export default PatientForm;
