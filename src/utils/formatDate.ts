const formatDate = (date: string) => {
    const [year, month, day] = date.split('-');

    return `${day}/${month}/${year}`;
};

const restoreDateFormat = (date: string) => {
    const [day, month, year] = date.split('/');

    return `${year}-${month}-${day}`;
};

export { formatDate, restoreDateFormat };
