import { Button, Container } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useEffect } from "react";
import { authServices } from "../api/api";

const Signup = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
    try {
      const res = authServices.register(values);
      console.log("Signup response: ", res.data);
    } catch (error) {
      console.error("Signup error: ", error);
    }
  };

  const fetchData = async () => {
    try {
      const res = await authServices.getLoginUser();
      console.log("Fetched data: ", res.data);
      // setList(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
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
            <Field name="name" type="name" placeholder="Name" />
            <Field name="email" type="email" placeholder="Email" />
            <Field name="password" type="password" placeholder="Password" />
            <Button type="submit">Login</Button>
          </Form>
        </Formik>
      </Container>
    </>
  );
};

export default Signup;
