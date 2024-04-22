import * as Yup from 'yup';

export const bookSessionValidationSchema = Yup.object().shape({
  date: Yup.string().required('Choose a date for your session'),
  time: Yup.string().required('Choose a time for your session'),
  hours: Yup.string().required('How long should the session last?'),
});
