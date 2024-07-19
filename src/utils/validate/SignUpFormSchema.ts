import * as yup from "yup";

const signUpFormSchema = yup
  .object()
  .shape({
    FullName: yup
      .string()
      .required("Full name is required")
      .min(2, "Full name must be at least 2 characters")
      .max(50, "Full name must be less than 50 characters"),
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
    Term: yup
      .boolean()
      .required()
      .oneOf([true], "You must accept the terms and conditions"),
  })
  .required();

export default signUpFormSchema;
