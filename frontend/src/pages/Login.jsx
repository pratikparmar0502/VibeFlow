import { Button, Container } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { authServices } from "../api/api";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const res = await authServices.login(values);
      console.log("Login response: ", res.data);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        console.log("Token successfully stored in localStorage!");
      }
    } catch (error) {
      console.error("Login error: ", error);
    }
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ marginTop: "100px" }}>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          enableReinitialize={true}
        >
          <Form>
            <Field name="email" type="email" placeholder="Email" />
            <Field name="password" type="password" placeholder="Password" />
            <Button type="submit">Login</Button>
          </Form>
        </Formik>
      </Container>
    </>
  );
};

export default Login;
