import React, { useState } from "react";
import {
  MenuItem,
  Select,
  Box,
  InputLabel,
  Checkbox,
  FormControlLabel,
  TextField,
  CssBaseline,
  Button,
  Avatar,
  Typography,
  Container,
  FormControl,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../copyright/Copyright";
import countriesList from "../../data/countriesList.json";

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
  accountType: number | undefined;
  country: string | undefined;
}

export default function SignIn() {
  const [date, setDate] = useState();

  const initialValues: FormValues = {
    email: "",
    password: "",
    username: "",
    accountType: undefined,
    country: undefined,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required("This field is required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    username: Yup.string().required("This field is required"),
    accountType: Yup.number().defined("This field is required"),
    country: Yup.string().defined("This field is required"),
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {(props) => (
              <Box
                component="form"
                onSubmit={props.handleSubmit}
                noValidate
                sx={{ mt: 1, width: "100%" }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                />

                {props.errors.email && props.touched.email ? (
                  <InputLabel error>{props.errors.email}</InputLabel>
                ) : null}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.password}
                />
                {props.errors.password && props.touched.password ? (
                  <InputLabel error>{props.errors.password}</InputLabel>
                ) : null}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "50%",
                    }}
                  >
                    <TextField
                      margin="normal"
                      required
                      name="username"
                      label="Username"
                      type="text"
                      id="username"
                      autoComplete="username"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.username}
                    />
                    {props.errors.username && props.touched.username ? (
                      <InputLabel error>{props.errors.username}</InputLabel>
                    ) : null}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "50%",
                    }}
                  >
                    <FormControl margin="normal" sx={{ marginLeft: 1 }}>
                      <InputLabel id="account-type-select-label">
                        Account type
                      </InputLabel>
                      <Select
                        labelId="account-type-select-label"
                        id="account-type-select"
                        label="Acount Type"
                        name="accountType"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.accountType}
                      >
                        <MenuItem value={ACCOUNT_TYPE.ADMIN}>Admin</MenuItem>
                        <MenuItem value={ACCOUNT_TYPE.VIEWER}>Viewer</MenuItem>
                        <MenuItem value={ACCOUNT_TYPE.WRITER}>Writer</MenuItem>
                      </Select>
                    </FormControl>
                    {props.errors.accountType && props.touched.accountType ? (
                      <InputLabel error>{props.errors.accountType}</InputLabel>
                    ) : null}
                  </Box>
                </Box>
                <Button
                  sx={{ marginTop: 2 }}
                  variant="contained"
                  component="label"
                >
                  Upload File
                  <input type="file" hidden />
                </Button>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "50%",
                  }}
                >
                  <FormControl margin="normal" fullWidth>
                    <InputLabel id="country-select-label">
                      Choose your country
                    </InputLabel>
                    <Select
                      labelId="countries-list-select-label"
                      id="countries-list-select"
                      label="Choose your country"
                      name="country"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.country}
                    >
                      {countriesList.map((country) => (
                        <MenuItem key={country.name} value={country.name}>
                          {country.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {props.errors.country && props.touched.country ? (
                    <InputLabel error>{props.errors.country}</InputLabel>
                  ) : null}
                </Box>
                <Box sx={{ width: "100%", marginTop: 2 }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="License Subscription Start"
                      value={date}
                      onChange={(newValue: any) => {
                        setDate(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
              </Box>
            )}
          </Formik>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
