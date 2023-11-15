import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup  
        .string()
        .trim()
        .required("Username is required")
        .min(2, "name must be at least 2 characters"),
    protein: yup
        .string()
        .oneOf(['chicken', 'lean ground beef', 'salmon'], 'Please select a protein'),
    carb: yup
        .string()
        .oneOf(['white rice', 'brown rice', 'potatoes', 'sweet potatoes'], 'Please select a carb'),   
    veggie: yup
        .string()
        .oneOf(['bell peppers'], 'Please select a veggie'),
    sauce: yup
        .string()
        .oneOf(['bbq', 'ranch', 'ketchup', 'mayo', 'mustard'], 'Please select a sauce'),     
})

export default formSchema;