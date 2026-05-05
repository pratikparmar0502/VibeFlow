import { Button, Container } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useEffect } from "react";
import { API } from "../api/api";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const fetchData = async () => {
    try {
      const res = await API.get("/auth/login");
      console.log(res.data);
      // setList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
