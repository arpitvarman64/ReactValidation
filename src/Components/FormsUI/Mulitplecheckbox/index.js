import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginLeft: theme.spacing(0),
  },
}));

const hobbiesList = [
  { id: "cycling", label: "Riding Cycle" },
  { id: "swimming", label: "Swimming" },
  { id: "football", label: "Playing Football" },
  
];

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [hobbies, setHobbies] = useState(
    hobbiesList.reduce((acc, hobby) => ({ ...acc, [hobby.id]: false }), {})
  );

  const handleChange = (name) => (event) => {
    setHobbies({ ...hobbies, [name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <FormGroup row>
        <FormLabel component="legend">Hobbies</FormLabel>
        {hobbiesList.map((hobby) => (
          <FormControlLabel
            key={hobby.id}
            control={
              <Checkbox
                checked={hobbies[hobby.id]}
                onChange={handleChange(hobby.id)}
                name={hobby.id}
              />
            }
            label={hobby.label}
          />
        ))}
      </FormGroup>
    </div>
  );
}
