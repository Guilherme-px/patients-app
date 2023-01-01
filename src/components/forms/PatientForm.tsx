import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    MenuItem,
    Radio,
    RadioGroup,
    TextField,
} from '@mui/material';

import states from '../../utils/states';
import '../../assets/sass/patientsForm.sass';

const PatientForm = () => {
    return (
        <form className="patient_form">
            <TextField
                className="firstName_input"
                name="firstName"
                label="Nome"
            />

            <TextField
                className="lastName_input"
                name="lastName"
                label="Sobrenome"
            />

            <TextField
                className="birthday_input"
                name="birthday"
                label="Data de nascimento"
                InputLabelProps={{ shrink: true }}
                type="date"
            />

            <FormControl className="gender_input">
                <FormLabel id="gender_label">Gênero</FormLabel>

                <RadioGroup row aria-labelledby="gender_label" name="gender">
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
            </FormControl>

            <TextField
                className="email_input"
                name="email"
                label="E-mail"
                type="email"
            />

            <TextField className="street_input" name="street" label="Rua" />

            <TextField
                className="number_input"
                name="streetNumber"
                label="Número"
                type="number"
            />

            <TextField className="city_input" name="city" label="Cidade" />

            <TextField
                className="state_input"
                select
                name="state"
                label="Estado"
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
