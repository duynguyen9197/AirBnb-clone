import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  modal__content: {
    width: "100%",
    maxWidth: 560,
    borderRadius: 12,
    backgroundColor: "#fff",
    zIndex: 999,
    display: "flex",
    flexDirection: "column",
    margin: "30px 0",
  },
  modal__header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 24px",
    minHeight: 65,
    borderBottom: "1px solid rgb(235, 235, 235)",
    "& >p": {
      fontWeight: 800,
      fontSize: "1em",
    },
    "& > button": {
      padding: 6,
    },
  },
  modal__detail: {
    height: "100%",
    overflowY: "auto",
    padding: "24px",
    "& >h3": {
      fontSize: 22,
      lineHeight: "26px",
      color: "rgb(34,34,34)",
      marginBottom: 8,
      fontWeight: 600,
    },
  },
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
}));
