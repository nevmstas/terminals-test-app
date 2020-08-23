import * as Yup from 'yup'

export const SignupSchema = Yup.object().shape({
    login: Yup.string()
      .required('Required'),
    password: Yup.string()
      .min(8, 'Too Short! Must Contain 8 Characters')
      .required('Required')
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,
      "Must have one number and one letter!")
  });