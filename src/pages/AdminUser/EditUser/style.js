import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
  form__input: {
    width: "100%",
    marginTop: 15,
  },
  form__radio: {
    flexDirection: "row",
    marginTop: 10,
    "& .MuiFormControlLabel-root": {
      marginLeft: 14,
    },
  },

  form__textLogin: {
    color: "#6363e8",
    marginLeft: 10,
    cursor: "pointer",
  },
  form__labelFile: {
    marginTop: 20,
  },
  form__avatarFile: {
    opacity: 0,
    position: "absolute",
    display: "none",
  },
}));
