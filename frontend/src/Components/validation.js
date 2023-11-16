import * as yup from 'yup';

const schema = yup.object().shape({
    protein: yup
        .string()
        .required('Please select a protein'),
    carb: yup
        .string()
        .required('Please select a carb'),
    veggie: yup
        .string()
        .required('Please select a veggie'),
    sauce: yup
        .string()
        .required('Please select a sauce')
})

export default schema;