// import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import * as Yup from "yup";
import { registerUserAction } from "../../ReduxComponents/Auth/auth.action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  gender: "",
};
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email.").required("Email is rquired."),
  password: Yup.string()
    .min(6, "Password must be atleast 6 characters")
    .required("Password is required"),
});

const Register = () => {
  // const [formValue, setFormValue] = useState();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(registerUserAction(values));
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="space-y-5">
            <div className="space-y-5">
              <div>
                <Field
                  as={TextField}
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                  variant="outlined"
                  fullWidth
                />
                <ErrorMessage
                  name="firstName"
                  component={"div"}
                  className="text-red-500"
                />
              </div>

              <div>
                <Field
                  as={TextField}
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                  variant="outlined"
                  fullWidth
                />
                <ErrorMessage
                  name="lastName"
                  component={"div"}
                  className="text-red-500"
                />
              </div>

              <div>
                <Field
                  as={TextField}
                  name="email"
                  placeholder="E-mail"
                  type="email"
                  variant="outlined"
                  fullWidth
                />
                <ErrorMessage
                  name="email"
                  component={"div"}
                  className="text-red-500"
                />
              </div>

              <div>
                <Field
                  as={TextField}
                  name="password"
                  type="password"
                  placeholder="Password"
                  variant="outlined"
                  fullWidth
                />
                <ErrorMessage
                  name="password"
                  component={"div"}
                  className="text-red-500"
                />
              </div>

              <div>
                <Field name="gender">
                  {({ field }) => (
                    <RadioGroup row {...field}>
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                    </RadioGroup>
                  )}
                </Field>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>

            <Button type="submit" variant="contained" color="success" fullWidth>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      <div className="flex gap-5 items-center justify-center pt-5">
        <p>You are already register ?</p>
        <Button onClick={() => navigate("/login")}>Login</Button>
      </div>
    </>
  );
};

export default Register;
