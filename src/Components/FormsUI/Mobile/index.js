// PhoneInput.js
import React from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
// import 'react-phone-input-2/lib/material.css'

const PhoneInputComponent = ({ name, label, ...otherProps }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <PhoneInput
        inputProps={{
          name
        }}
        {...otherProps}
      />
    </div>
  );
};

export default PhoneInputComponent;
