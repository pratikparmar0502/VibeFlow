// import React from "react";
import {
  Button,
  Container,
  TextField,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { authServices } from "../api/api";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";

const signupSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Password is Required"),
});

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await authServices.register(values);
      console.log("Response: ", res.data);
      toast.success("Welcome! Registration Successful.");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration Failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={6} sx={{ p: 4, mt: 8, borderRadius: 3 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          fontWeight="bold"
          color="primary"
        >
          Create Account
        </Typography>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={signupSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Field
                  as={TextField}
                  name="name"
                  label="Full Name"
                  fullWidth
                  error={touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                />
                <Field
                  as={TextField}
                  name="email"
                  label="Email Address"
                  fullWidth
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
                <Field
                  as={TextField}
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                  sx={{ mt: 2, borderRadius: 2 }}
                >
                  {isSubmitting ? "Signing up..." : "Sign Up"}
                </Button>
                <Typography align="center" variant="body2">
                  Already have an account?{" "}
                  <Link to="/login" underline="hover">
                    Login
                  </Link>
                </Typography>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default Signup;
