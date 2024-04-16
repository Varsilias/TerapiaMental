import * as Yup from 'yup';

export const signupValidationSchema = Yup.object().shape({
  firstname: Yup.string().required('Firstname is required'),
  lastname: Yup.string().required('Lastname is required'),
  email: Yup.string()
    .email('Email must be valid')
    .required('Email is required'),
  phone_number: Yup.string().required('Phone number is required'),
  password: Yup.string()
    .matches(/^(?=.*[A-Z])/, 'Must contain at least one captial letter')
    .matches(/^(?=.*[a-z])/, 'Must contain at least one small letter')
    .matches(/^(?=.*\d)/, 'Must contain at least one number')
    .matches(/^(?=.*[@$!%*?&])/, 'Must contain at least one special character')
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email must be valid')
    .required('Email is required'),
  password: Yup.string()
    .matches(/^(?=.*[A-Z])/, 'Must contain at least one captial letter')
    .matches(/^(?=.*[a-z])/, 'Must contain at least one small letter')
    .matches(/^(?=.*\d)/, 'Must contain at least one number')
    .matches(/^(?=.*[@$!%*?&])/, 'Must contain at least one special character')
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
});
