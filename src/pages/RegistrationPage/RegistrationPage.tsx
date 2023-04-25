import { Formik } from "formik";
import { useCallback } from "react";

import * as yup from 'yup'
import { FormComponent } from "./Form/Form";

import cls from './RegistrationPage.module.scss'

export interface FormikInitialValue {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  phone: number;
}

const initialValues: FormikInitialValue = {
  username: "",
  password: "",
  confirmPassword: "",
  email: "",
  phone: 0,
};

const validationSchema = yup.object({
    username: yup.string()
      .min(5, 'Your username should be more than 5 letters')
      .max(10, 'Your username should be less than 11 letters')
      .required('This field is required'),
    password: yup.string()
      .min(8,'password must contain 8 or more characters ')
      .matches(/[a-zA-Z]/,'Password can only contain Latin letters.')
      // .minLowercase(1, 'password must contain at least 1 lower case letter')
      // .minUppercase(1, 'password must contain at least 1 upper case letter')
      // .minNumbers(1, 'password must contain at least 1 number')
      // .minSymbols(1, 'password must contain at least 1 special character')
      .required('This field is required'),
    confirmPassword: yup.string()
      .oneOf([yup.ref("password"), ''], "Passwords must match")
      .required("Required"),
    email: yup.string()
      .email('Not a proper email'),
    phone: yup.number(),
})

const RegistrationPage = () => {
  const handleSubmit = useCallback((values: FormikInitialValue) => {
    console.log(values);
  }, []);

  return (
    <div className={cls.RegistrationPage}>
      <Formik 
        initialValues={initialValues} 
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnMount
      >
        <FormComponent/>

      </Formik>
    </div>
  );
};

export default RegistrationPage;
