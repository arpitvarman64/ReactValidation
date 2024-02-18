import React from "react";
import { Toolbar, AppBar, Typography } from "@material-ui/core";

const Header = () => {
  const headerStyle = {
    display: "flex",
    backgroundColor: "black", // Example background color
    color: "White",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "800",
    
  };

  return (
    <AppBar position="static" style={headerStyle}>
      <Toolbar>
        <Typography variant="h4">Registration Form</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
