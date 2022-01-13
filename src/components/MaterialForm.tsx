import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

const ForgotPassword = styled(Typography)`
  && {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #de1515;
  }
`;
const StyledTypography = styled(Typography)`
  && {
    font-family: Playfair Display;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

const StyledTextField = styled(TextField)`
  fieldset {
    border-radius: 8px;
    border: 1px solid #0000001f;
    transition: border 0.3s;
  }
  && {
    background-color: #fff;
    border-radius: 8px;
  }

  input:hover {
    color: #2e8b57;
  }
`;

const StyledButton = styled(Button)`
  && {
    text-transform: none;
    border-radius: 8px;
    box-shadow: none;
  }
`;

const StyledInputLabel = styled(InputLabel)`
  &&& {
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.25px;
    text-align: left;
    color: #000000de;
  }
`;

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const MaterialForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <StyledTypography variant="h3">Welcome back</StyledTypography>
      <Typography variant="caption">
        Log in using your account details
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <StyledInputLabel sx={{ mt: 0.85 }} htmlFor="email">
          Email
        </StyledInputLabel>
        <StyledTextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmailIcon sx={{ color: "#000" }} />
              </InputAdornment>
            ),
          }}
          id="email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ mt: 0.01 }}
        />

        <StyledInputLabel sx={{ mt: 0.85 }} htmlFor="password">
          Password
        </StyledInputLabel>
        <StyledTextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon sx={{ color: "#000" }} />
              </InputAdornment>
            ),
          }}
          id="password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{ mt: 0.01 }}
        />
      <ForgotPassword variant="caption">Forgot password</ForgotPassword>

      <StyledButton
          sx={{ mt: 0.85, p: 0.7 }}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Log in
        </StyledButton>

        <StyledButton
          sx={{ mt: 0.85, p: 0.7 }}
          color="neutral"
          variant="contained"
          fullWidth
          type="submit"
        >
          Create account
        </StyledButton>
      </form>
    </div>
  );
};

export default MaterialForm;
