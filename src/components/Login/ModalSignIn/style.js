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
  modal__line: {
    textAlign: "center",
    width: "100%",
    margin: "16px 0",
    fontSize: 12,
    lineHeight: "16px",
    overflow: "hidden",
    "& >span": {
      position: "relative",
      padding: 10,
      "&::before , &::after": {
        content: "''",
        position: "absolute",
        width: "1000px",
        top: "50%",
        right: "100%",
        borderBottom: "1px solid rgb(228,228,228)",
        borderBottomWidth: "1px solid #e4e4e4",
        borderBottomColor: "1px solid #e4e4e4",
      },
      "&::after": {
        left: "100%",
        right: 0,
      },
    },
  },
  form__continue__login: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  form__continue__login__with: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    border: "2px solid #cecece",
    borderRadius: 8,
    cursor: "pointer",
    backgroundColor: "#fff",
    "&:hover": {
      border: "2px solid #222222",
    },
  },
  linkToSignUp: {
    textAlign: "center",
    margin: "15px 0",
    "& >p> span": {
      color: "#6363e8",
      cursor: "pointer",
      marginLeft: 5,
    },
  },
}));
