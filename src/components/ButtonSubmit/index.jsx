import { Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const ButtonSubmit = ({ text, handleSubmit }) => {
  const useStyles = makeStyles((theme) => ({
    btnSubmit: {
      width: "100%",
      backgroundImage:
        "radial-gradient(circle at center center, rgb(255, 56, 92) 0%, rgb(230, 30, 77) 27.5%, rgb(227, 28, 95) 40%, rgb(215, 4, 102) 57.5%, rgb(189, 30, 89) 75%, rgb(189, 30, 89) 100%)",
      marginTop: 25,
      marginBottom: 5,
      borderRadius: 8,
      padding: 14,
      color: "rgb(255, 255, 255)",
      fontWeight: 600,
      lineHeight: "20px",
    },
  }));
  const classes = useStyles();

  return (
    <Button
      disableRipple
      type="submit"
      className={classes.btnSubmit}
      onClick={handleSubmit}
    >
      {text}
    </Button>
  );
};

export default ButtonSubmit;
