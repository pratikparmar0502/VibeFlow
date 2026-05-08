import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  Stack,
  Divider,
  Link as MuiLink,
} from "@mui/material";
import {
  Email,
  Lock,
  Person,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { authServices } from "../api/api";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await authServices.register(values);
      toast.success("Account created! Please log in.");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle at top left, rgba(255,255,255,0.18), transparent 30%), linear-gradient(135deg, #0f172a 0%, #1e293b 45%, #312e81 100%)",
        px: 2,
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={10}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 5,
            backgroundColor: "rgba(255, 255, 255, 0.98)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
          }}
        >
          <Box sx={{ mb: 4, textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "#0f172a",
              }}
            >
              Create Account
            </Typography>
            <Typography sx={{ mt: 1, color: "text.secondary" }}>
              Join VibeFlow today
            </Typography>
          </Box>

          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={signupSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <Stack spacing={2.5}>
                  <Field
                    as={TextField}
                    name="name"
                    label="Full name"
                    fullWidth
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person sx={{ color: "text.secondary" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
                  />

                  <Field
                    as={TextField}
                    name="email"
                    label="Email address"
                    fullWidth
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email sx={{ color: "text.secondary" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
                  />

                  <Field
                    as={TextField}
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock sx={{ color: "text.secondary" }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword((v) => !v)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                    sx={{
                      py: 1.5,
                      borderRadius: 3,
                      fontWeight: 700,
                      textTransform: "none",
                      background:
                        "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                      "&.Mui-disabled": {
                        color: "rgba(255, 255, 255, 0.7)", // Light white when disabled
                        background:
                          "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)", // Keep the gradient
                        opacity: 0.8,
                      },
                    }}
                  >
                    {isSubmitting ? "Creating account..." : "Sign Up"}
                  </Button>

                  <Divider>or</Divider>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Already have an account?
                    </Typography>
                    <MuiLink
                      component={Link}
                      to="/login"
                      underline="none"
                      sx={{ fontWeight: 700, color: "#4f46e5" }}
                    >
                      Log in
                    </MuiLink>
                  </Box>
                </Stack>
              </Form>
            )}
          </Formik>
        </Paper>
      </Container>
    </Box>
  );
};

export default Signup;
