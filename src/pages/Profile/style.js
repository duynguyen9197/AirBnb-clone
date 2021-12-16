import { makeStyles } from "@material-ui/core/styles";
import { underLine } from "./underline";
export default makeStyles((theme) => ({
  profile: {
    paddingTop: 0,
    margin: "48px auto",
    [theme.breakpoints.down("lg")]: {
      paddingTop: 0,
    },
  },
  root: {
    maxWidth: 308,
    padding: 14,
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
    paddingBottom: 30,
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

  //Mobile

  profile__mobile: {
    maxWidth: 632,
    margin: "auto",
    [theme.breakpoints.down("lg")]: {
      minHeight: "85vh",
      marginTop: "20%",
    },
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

  modal: {
    [theme.breakpoints.up("md")]: {
      padding: 40,
    },
    [theme.breakpoints.up("xl")]: {
      padding: "40px 120px",
    },
  },
  rating__modal: {
    height: "100%",
    backgroundColor: "#fff",
    zIndex: 999,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    padding: "0px 24px",
    margin: "10px 0",
    borderRadius: 12,
  },
  rating__modal__header: {
    backgroundColor: "#fff",
    position: "sticky",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    width: "100%",
    margin: "15px 0",

    zIndex: 99,
    "& >svg": {
      cursor: "pointer",
      fontSize: 20,
    },

    [theme.breakpoints.up("xl")]: {
      "& >div": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
      "& $rating__modal__inputSearch": {
        width: "57%",
      },
    },
  },
  modal__style: {

    height: "495px",

    overflowY: "auto",
    [theme.breakpoints.down("lg")]: {
      height: "1200px",
    },
    [theme.breakpoints.down("md")]: {
      height: "850px",
    },

  },
  profile__modal__btn: {
    color: "#222222",
    textDecoration: "underline",
    borderRadius: "4px",
    fontWeight: 600,
    outline: "none",
    fontSize: 20,

    cursor: "pointer"
  },
  iconModal: {
    position: "absolute",
    left: "0%",
  },
  table__position: {
    position: "sticky",
    top: 0,
    zIndex: 999,
    backgroundColor: "#fff",
  },
  profile__box: {
    border: "1px solid #222222",
    borderRadius: 10,
    padding: 5,
    marginBottom: 10
  },
  profile__box__img: {
    width: 90,
    height: 100
  },
  profile__box__style: {
    overflowY: "auto", height: 700, padding: 20
  }

}));
