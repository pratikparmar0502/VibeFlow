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

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await authServices.login(values);
      localStorage.setItem("token", res.data.token);
      toast.success("Login Successful! Welcome back.");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid Credentials");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={6} sx={{ p: 4, mt: 10, borderRadius: 3 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          fontWeight="bold"
          color="secondary"
        >
          VibeFlow Login
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
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
                  color="secondary"
                  size="large"
                  disabled={isSubmitting}
                  sx={{ borderRadius: 2 }}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
                <Typography align="center" variant="body2">
                  New here?{" "}
                  <Link to="/signup" underline="hover">
                    Create an account
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

export default Login;
