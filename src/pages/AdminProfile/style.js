import { makeStyles } from "@material-ui/core/styles";
import { underLine } from "../Profile/underline";

export default makeStyles((theme) => ({
  profile: {
    margin: "0 auto",
    [theme.breakpoints.down("lg")]: {
      paddingTop: 0,
    },
  },
  root: {
    maxWidth: 308,
    padding: 5,
    borderRadius: 12,
    marginRight: "25px",
    marginLeft: 0,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 8,
    fontSize: 18,
    lineHeight: "28px",
    fontWeight: 800,
  },
  large: {
    width: 125,
    height: 125,
    textAlign: "center",
  },
  profile__top: {
    paddingBottom: 10,
  },
  profile__text: {
    color: "#222222",
    textDecoration: "underline",
    borderRadius: "4px",
    fontWeight: 600,
    outline: "none",
    fontSize: 13,
  },
  profile__text__accuracy: {
    fontSize: 16,
    lineHeight: "20px",
    marginBottom: 16,
  },
  profile__button: {
    border: "1px solid #DDDDDD",
    padding: "10px 18px",
  },
  profile__left: {
    marginLeft: 25,
    [theme.breakpoints.down("lg")]: {
      paddingTop: 20,
      marginLeft: 0,
    },
    maxWidth: 632,
  },
  profile__title: {
    fontSize: 32,
    lineHeight: "36px",
    fontWeight: 600,
    marginBottom: 8,
  },
  profile__text__start: {
    fontSize: 14,
    lineHeight: "18px",
    color: "#717171",
    marginBottom: 8,
  },
  profile__left__item: {
    display: "flex",
    position: "relative",
    paddingBottom: "25px",
    "& > svg": {
      marginRight: 8,
    },
    ...underLine,
  },
  profile__left__item2: {
    display: "flex",
    position: "relative",
    padding: "25px 0",
    ...underLine,
  },
  profile__left__item__text: {
    fontSize: 22,
    lineHeight: "28px",
    fontWeight: 600,
  },
  //Mobile
  large2: {
    width: 85,
    height: 85,
    textAlign: "center",
  },
  profile__mobile: {
    maxWidth: 632,
    margin: "auto",

    [theme.breakpoints.down("sm")]: {
      margin: "0 25px",
    },
  },
  profile__mobile__title: {
    fontSize: 32,
    lineHeight: "36px",
    fontWeight: 600,
    marginBottom: 8,
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
  },
  profile__mobile__item: {
    display: "block",
    paddingTop: 20,
    "& > h6": {
      marginBottom: 12,
    },
    ...underLine,
  },
  uploadInput: {
    display: "none",
    marginTop: 8,
  },
  uploadButton: {
    fontSize: "13px",
    color: "#222222",
    textDecoration: "underline",
    textAlign: "center",
    fontWeight: 500,
    cursor: "pointer",
    marginTop: 5,
  },
  icon__style: {
    marginTop: 32,
    marginBottom: 16,
  },
  profile__name: {
    display: "block",
    paddingTop: 20,
    "& > h6": {
      marginBottom: 12,
    },
  },
  profile__name__icon: {
    marginRight: 5,
  },
  profile__name__text: {
    marginBottom: 20,
  },
  propfile__info: {
    marginBottom: 48,
  },
  profile__info__text: {
    color: "#222222",
    textDecoration: "underline",
    borderRadius: "4px",
    fontWeight: 600,
    outline: "none",
    fontSize: 20,
    paddingBottom: 20,
  },
  profile__info__item: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #DDDDDD",
    marginBottom: 10,
    paddingBottom: 5,
  },
}));
