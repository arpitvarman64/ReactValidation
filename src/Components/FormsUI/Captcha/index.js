// RecaptchaField.js
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useField } from "formik";

const RecaptchaField = ({ name, label, ...otherProps }) => {
  const [, meta, helpers] = useField(name);

  const handleRecaptchaChange = (value) => {
    helpers.setValue(value);
    helpers.setTouched(true);
  };

  return (
    <div>
      <label>{label}</label>
      <ReCAPTCHA
        sitekey="6LefRjMpAAAAAKP47_1zxsYPew1I1jW33u1TCuzX"
        onChange={handleRecaptchaChange}
        {...otherProps}
      />
      {meta.touched && meta.error && (
        <div style={{ color: "red" }}>{meta.error}</div>
      )}
    </div>
  );
};

export default RecaptchaField;
