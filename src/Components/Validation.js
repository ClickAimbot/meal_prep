import * as yup from 'yup';

const formSchema = yup.object().shape({
    protein: yup
        .string()
        .oneOf(['chicken', 'lean ground beef', 'salmon'], 'Please select a protein'),
    carb: yup
        .string()
        .oneOf(['white rice', 'brown rice', 'potatoes', 'sweet potatoes'], 'Please select a carb'),   
    veggie: yup
        .string()
        .oneOf(['broccoli', 'onions & bell peppers'], 'Please select a veggie'),
    sauce: yup
        .string()
        .oneOf(['bbq'], 'Please select a sauce'),     
})

export default formSchema;