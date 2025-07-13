// import React, { useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, TextField } from "@mui/material";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../Redux/Auth/auth.action";
import { useNavigate } from "react-router-dom";

const initialValues = { email: "", password: "" };
const validationSchema =Yup.object({
  email: Yup.string().email("Invalid email.").required("Email is rquired."),
  password: Yup.string()
    .min(6, "Password must be atleast 6 characters")
    .required("Password is required"),
});

const Login = () => {
  // const [formValue, setFormValue ] = useState();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("handled submit.....", values);
    dispatch(loginUserAction(values));
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="space-y-5 ">
            <div className="space-y-5">
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
                  placeholder="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                />
                <ErrorMessage
                  name="password"
                  component={"div"}
                  className="text-red-500"
                />
              </div>
            </div>

            <Button type="submit" variant="contained" color="success" fullWidth>
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <div className="flex gap-5 items-center justify-center pt-5">
        <p>You don't have an account ?</p>
        <Button onClick={()=>navigate("/register")}>Register</Button>
      </div>
    </>
  );
};

export default Login;