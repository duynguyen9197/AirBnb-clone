import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 25,
    paddingTop: 15,
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
  form__labelFile: {
    marginTop: 20,
  },
  form__avatarFile: {
    opacity: 0,
    position: "absolute",
    display: "none",
  },

  //  upload image
  upload__card: {
    height: 300,
    border: "3px dashed #999",
    width: "70%",
    margin: "0 auto",
    backgroundImage: (props) => `url(${props.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  upload__card__content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    flexDirection: "column",
    "&>input": {
      display: "none",
    },
  },
  upload__card__icons: {
    width: 80,
    height: 80,
    cursor: "pointer",
    color: (props) => (props.image !== null ? "#fff" : "#000"),
  },
  upload__card__label: {
    fontSize: 30,
    cursor: "pointer",
    color: (props) => (props.image !== null ? "#fff" : "#000"),
  },
  upload__card__btnContent: {
    display: "flex",
    justifyContent: "right",
    width: "70%",
    margin: "0 auto",
    "&>div": {
      width: "20%",
      marginRight: 10,
      marginTop: 15,
    },
  },
  upload__card__btnReset: {
    width: "100%",
    margin: "24px 0px 5px 0",
    borderRadius: 8,
    padding: 14,
    backgroundColor: "#c1c1c8",
    fontWeight: 600,
    lineHeight: "20px",
  },
  completed: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    fontSize: 30,
    marginTop: 20,
    color: "green",
  },
  completedAdd: {
    display: "flex",
    justifyContent: "center",
    "&>div": {
      width: "20%",
      marginRight: 10,
    },
  },
}));
