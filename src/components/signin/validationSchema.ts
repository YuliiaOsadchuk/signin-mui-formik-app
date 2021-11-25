import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email().required("This field is required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  username: Yup.string().required("This field is required"),
  accountType: Yup.number().required("This field is required"),
  country: Yup.string().required("This field is required"),
});

export default validationSchema;
