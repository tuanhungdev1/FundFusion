import * as yup from "yup";

const signInFormSchema = yup
  .object()
  .shape({
    Email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
    Password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[!@#$%^&*]/,
        "Password must contain at least one special character"
      ),
  })
  .required();

export default signInFormSchema;
