import { Form, useFormikContext } from "formik";
import { Input } from "shared/UI/Input/Input";
import { FormikInitialValue } from "../RegistrationPage";
import Button from "shared/UI/Button/Button";
import { useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import cls from './Form.module.scss'

interface FormProps {
  className?: string;
}

export const FormComponent = ({ className }: FormProps, props: any) => {
  const { 
    values, 
    errors, 
    handleChange, 
    touched, 
    setFieldTouched} =
    useFormikContext<FormikInitialValue>();

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <Form className={cls.Form}>
      <Input
        type="text"
        placeholder="Enter username"
        label="Username:"
        name="username"
        value={values.username}
        onChange={handleChange}
        onBlur={() => setFieldTouched("username", true)}
      />
      {errors.username && touched.username && (
        <div style={{ color: "red" }}> {errors.username} </div>
      )}
      <Input
        type="text"
        placeholder="Enter password"
        label="Password:"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={() => setFieldTouched("password", true)}
      />
      {errors.password && touched.password && (
        <div style={{ color: "red" }}> {errors.password} </div>
      )}
      <Input
        type="password"
        placeholder="confirm password"
        label="Confirm password"
        name="confirmPassword"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={() => setFieldTouched("confirmPassword", true)}
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <div style={{ color: "red" }}> {errors.confirmPassword} </div>
      )}
      <Input
        type="text"
        placeholder="test@test.com"
        label="Email:"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && touched.email && (
        <div style={{ color: "red" }}> {errors.email} </div>
      )}
      {/* <Input
        type="number"
        placeholder = "Phone number"
        label="Phone number"
        name="phone"
        value={values.phone}
        onChange={handleChange}
      /> */}
      <label>Phone number</label>
      <PhoneInput
        specialLabel={""}
        country={"am"}
        value={values.phone}
        onChange={handleChange}
        inputStyle={{
          borderColor: props.touched && props.error && "red",
        }}
        {...props}
      />
      {/* {(props.touched && props.error) && <p style={{color:'red'}} className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error MuiFormHelperText-filled MuiFormHelperText-marginDense">{props.error}</p> } */}

      <Button htmlType="submit"> Sign up </Button>
    </Form>
  );
};
