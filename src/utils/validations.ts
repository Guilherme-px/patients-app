import * as yup from 'yup';

const validations = yup.object({
    firstName: yup
        .string()
        .min(3, 'O nome deve ter no minimo 3 letras!')
        .required('Informe o nome!'),
    lastName: yup
        .string()
        .min(3, 'O sobrenome deve ter no minimo 3 letras!')
        .required('Informe o sobrenome!'),
    email: yup
        .string()
        .email('Este email não é valido!')
        .required('Informe o email!'),
    birthday: yup.date().required('Informe a data de nascimento!'),
    gender: yup.string().required('Selecione um gênero!'),
    street: yup.string().required('Informe o nome da rua!'),
    streetNumber: yup
        .number()
        .positive()
        .integer()
        .required('Informe o numero da casa!'),
    city: yup.string().required('Informe o nome da cidade!'),
    state: yup.string().required('Selecione um estado!'),
});

export default validations;
