import * as Yup from 'yup';

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);





export const ContactFormStyle03Schema = Yup.object().shape({
  name: Yup.string().required("Field is required."),
  email: Yup.string().email("Invalid email.").required("Field is required."),
  phone: Yup.string()
    .matches(/^[\d+-]+$/, 'Phone number can only include digits, +, and -')
    .required('Field is required.'),
  comment: Yup.string()
    .min(5, 'Message should not have less than 5 characters')
    .required('Field is required.'),
  terms_condition: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required('Field is required.')
});


