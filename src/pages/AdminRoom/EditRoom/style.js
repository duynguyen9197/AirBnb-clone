import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 15,
    "& .MuiFormControlLabel-root": {
      width: "100%",
    },
    "& .MuiBox-root": {
      width: "auto",
    },
  },
  card: {
    border: "1px  solid #eaeff4",
    borderRadius: 8,
    padding: 10,
    overflow: "hidden",
    width: 200,
    minHeight: 240,
    maxHeight: 240,
  },
  card__image: {
    width: "100%",
    height: "100%",
    position: "relative",
    borderRadius: 8,
    backgroundSize: "cover",
    maxHeight: 240,

    "&:hover": {
      "& $card__hover": {
        transform: "scale(1)",
        transition: "0.6s ease",
      },
    },
  },
  card__hover: {
    position: "absolute",
    top: -1,
    left: 0,
    bottom: -1,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 10,
    zIndex: 1,
    transform: "scale(0)",
  },
  card__upload__image: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    "& >input": {
      display: "none",
    },
  },
  name: {
    "&>p": {
      fontWeight: 600,
    },
    "& .MuiInputBase-input": {
      padding: "12px 10px",
      minWidth: 250,
    },
  },
  description: {
    paddingBottom: 10,
    "&>p": {
      fontWeight: 600,
      paddingBottom: 10,
      paddingTop: 10,
    },
    "& .MuiTextField-root": {
      width: "100%",
      padding: 5,
      fontSize: 15,
      lineHeight: "20px",
      fontWeight: 400,
      maxHeight: 120,
    },
  },
  input__numbers__room: {
    paddingTop: 0,
    "& .MuiInputBase-input": {
      width: 120,
    },
  },
  content__actions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #eaeff4",
    padding: "15px 0",
  },
  btnDelete: {
    backgroundColor: "transparent",
    borderRadius: 20,
    padding: "10px 30px",
    color: "red",
  },
  btnUpdate: {
    borderRadius: 20,
    padding: "10px 30px",
  },
}));
