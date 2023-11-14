import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup  
        .string()
        .trim()
        .required("Username is required")
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string(),
    topping1: yup
        .string(),
    topping2: yup
        .string(),
    topping3: yup
        .string(),
    topping4: yup
        .string(),
    topping5: yup
        .string(),
    special: yup
        .string()
})

export default formSchema;