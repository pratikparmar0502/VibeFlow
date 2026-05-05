// import Container from "@mui/material/Container";
import { Formik, Form, Field } from "formik";
// import { useState } from "react";

const Login = () => {
  // const [list, setList] = useState([]);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        enableReinitialize={true}
      >
        <Form>
          <Field name="name" type="name" placeholder="Name" />
          <Field name="email" type="email" placeholder="Email" />
          <Field name="password" type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
