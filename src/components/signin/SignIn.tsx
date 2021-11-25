import React, { useMemo } from "react";
import {
  MenuItem,
  Box,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Avatar,
  Typography,
  Container,
  FormControl,
} from "@mui/material";
import { TextField, Select } from "formik-mui";
import { DatePicker } from "formik-mui-lab";
import { Formik, FormikHelpers, Field } from "formik";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../copyright/Copyright";
import countryList from "react-select-country-list";
import validationSchema from "./validationSchema";
import {
  FlexColumn,
  FlexRow,
  FlexBoxShort,
  FlexCenter,
  SignInButton,
  SignInFormControl,
} from "./SignIn.styles";

const theme = createTheme();

enum ACCOUNT_TYPE {
  ADMIN,
  VIEWER,
  WRITER,
}

interface FormValues {
  email: string;
  password: string;
  username: string;
  accountType: string | undefined;
  country: string | undefined;
  date: Date;
}

export default function SignIn() {
  const optionsCountryList = useMemo(() => countryList().getData(), []);

  const initialValues: FormValues = {
    email: "",
    password: "",
    username: "",
    accountType: undefined,
    country: undefined,
    date: new Date(),
  };

  const handleSubmitForm = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <FlexCenter>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmitForm}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              submitForm,
              values,
            }) => (
              <FlexColumn>
                <Box
                  onSubmit={handleSubmit}
                  component="form"
                  noValidate
                  marginTop="1"
                >
                  <Field
                    component={TextField}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <Field
                    component={TextField}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <FlexRow>
                    <FlexBoxShort>
                      <Field
                        component={TextField}
                        margin="normal"
                        required
                        name="username"
                        label="Username"
                        type="text"
                        id="username"
                        autoComplete="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                      />
                    </FlexBoxShort>
                    <FlexBoxShort>
                      <SignInFormControl margin="normal" fullWidth>
                        <Field
                          component={Select}
                          labelId="account-type-select-label"
                          id="account-type-select"
                          label="Acount Type"
                          name="accountType"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.accountType}
                        >
                          <MenuItem value={ACCOUNT_TYPE.ADMIN}>Admin</MenuItem>
                          <MenuItem value={ACCOUNT_TYPE.VIEWER}>
                            Viewer
                          </MenuItem>
                          <MenuItem value={ACCOUNT_TYPE.WRITER}>
                            Writer
                          </MenuItem>
                        </Field>
                      </SignInFormControl>
                    </FlexBoxShort>
                  </FlexRow>
                  <SignInButton variant="contained">
                    Upload File
                    <input type="file" hidden />
                  </SignInButton>
                  <FlexColumn>
                    <FormControl margin="normal" fullWidth>
                      <InputLabel id="country-select-label">
                        Choose your country
                      </InputLabel>
                      <Field
                        component={Select}
                        labelId="countries-list-select-label"
                        id="countries-list-select"
                        label="Choose your country"
                        name="country"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.country}
                      >
                        {optionsCountryList.map((country) => (
                          <MenuItem key={country.label} value={country.label}>
                            {country.label}
                          </MenuItem>
                        ))}
                      </Field>
                    </FormControl>
                  </FlexColumn>
                  <FlexColumn>
                    <Field
                      component={DatePicker}
                      name="date"
                      label="Date Time"
                    />
                  </FlexColumn>
                  <SignInButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={submitForm}
                  >
                    Sign In
                  </SignInButton>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                </Box>
              </FlexColumn>
            )}
          </Formik>
        </FlexCenter>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
