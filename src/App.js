import React from "react";
import Header from "./Components/Header";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import Textfield from "./Components/FormsUI/Textfield";
// import SelectWrapper from "./Components/FormsUI/Select";
import DateTimePicker from "./Components/FormsUI/DataTimePicker";
import Checkbox from "./Components/FormsUI/Checkbox";
import RecaptchaField from "./Components/FormsUI/Captcha";
import CheckboxesGroup from "./Components/FormsUI/Mulitplecheckbox";
import PhoneInputComponent from "./Components/FormsUI/Mobile";
import FixedTags from "./Components/FormsUI/mulitpledropdown";
import Button from "./Components/FormsUI/Button";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(4),
    backgroundColor: "#fff",
    marginTop: theme.spacing(1),
    borderRadius: theme.spacing(2),
    border: "1px solid black",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(5),
  },
}));

// const genderOptions = [
//   { value: "male", label: "Male" },
//   { value: "female", label: "Female" },
//   { value: "other", label: "Other" },
// ];

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  dob: "",
  password: "",
  confirmPassword: "",
  mobile: "",
  website: "",
  decimalNumber: "",
  image: null,
  document: null,
  address: "",
  checkbox: false,
  recaptcha: "",
  acceptTerms: false,
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
    .required("Required")
    .matches(
      /^[A-Z][a-z]*(?:(?!(\w)\1\1).)*$/,
      "No three consecutive identical letters allowed"
    ),
  lastName: Yup.string()
    .required("Required")
    .matches(
      /^[A-Z][a-z]*(?:(?!(\w)\1\1).)*$/,
      "No three consecutive identical letters allowed"
    ),

  email: Yup.string().email("Invalid email.").required("Required"),
  // gender: Yup.string().required("Required"),
  dob: Yup.date()
    .required("Required")
    .test("is-age-valid", "Age must be between 18 and 60", function (value) {
      const currentDate = new Date();
      const birthDate = new Date(value);
      const age = currentDate.getFullYear() - birthDate.getFullYear();
      return age >= 18 && age <= 60;
    }),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
  // mobile:Yup.number().required("Required"),
  website: Yup.string().url("Invalid URL").required("Required"),
  // decimalNumber: Yup.number()
  //   .typeError("Please enter a valid number")
  //   .required("Required")
  //   .test("is-one-decimal", "Only one decimal is allowed", function (value) {
  //     return (value + "").match(/^-?\d+(\.\d{1})?$/);
  //   }),
  address: Yup.string().required("Required"),
  recaptcha: Yup.string().required(
    "Please complete the reCAPTCHA verification"
  ),
  acceptTerms: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("The terms and conditions must be accepted."),
});

const App = () => {
  const handleSubmit = (values) => {
    console.log(values);
    alert("Form submitted successfully!");
  };
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md" style={{ overflow: "hidden" }}>
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={handleSubmit}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Your Details</Typography>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Textfield name="firstName" label="First Name" />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Textfield name="lastName" label="Last Name" />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Textfield name="email" label="Email" />
                  </Grid>

                  {/* <Grid item xs={6}>
                    <SelectWrapper
                      name="gender"
                      label="Gender"
                      options={genderOptions}
                    />
                  </Grid> */}

                  <Grid item xs={12} md={6}>
                    <DateTimePicker name="dob" label="Date of Birth" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <PhoneInputComponent
                      style={{ height: "100%", width: "100%" }}
                      name="mobile"
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Textfield
                      type="password"
                      name="password"
                      label="Password"
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Textfield
                      type="password"
                      name="confirmPassword"
                      label="Confirm Password"
                    />
                  </Grid>

                  <Grid item xs={612} md={6}>
                    <Textfield name="website" label="Website URL" />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Textfield
                      type="number"
                      name="decimalNumber"
                      label="Decimal Number"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FixedTags name="favoritemovies" />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="address" label="Address" />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <input type="file" accept="image/*" name="image" />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.xls,.xlsx"
                      name="document"
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <RecaptchaField name="recaptcha" label="reCAPTCHA" />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <CheckboxesGroup name="hobbies" legend="Hobbies" />
                  </Grid>

                  <Grid item xs={12}>
                    <Checkbox
                      name="acceptTerms"
                      label="I accept the terms and conditions"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button>Submit Form</Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default App;
