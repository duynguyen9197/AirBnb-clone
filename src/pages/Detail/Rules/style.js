import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  room__rules: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      alignItems: "initial",
    },
    "& > svg": {
      fontSize: 30,
      cursor: "pointer",
    },
  },
  room__rules__content: {
    width: "100%",
    "& >h5 ": {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: "22px",
      marginBottom: 5,
    },
    "&>p": {
      fontSize: 15,
      color: "#999",
    },
  },
  modal: {
    [theme.breakpoints.up("md")]: {
      padding: 40,
    },
    [theme.breakpoints.up("xl")]: {
      padding: "40px 120px",
    },
  },
  room__rule__modal: {
    height: "100%",
    backgroundColor: "#fff",
    zIndex: 999,
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden",
    padding: "0px 24px",
    margin: "10px 0",
    borderRadius: 12,
    [theme.breakpoints.up("md")]: {
      padding: "0 48px",
    },
  },
  room__rule__modal__btnClose: {
    backgroundColor: "#fff",
    position: "sticky",
    top: 0,
    width: "100%",
    marginBottom: 15,
    zIndex: 99,
    "& >svg": {
      cursor: "pointer",
      fontSize: 20,
      width: "100%",
    },
  },
  room__rule__modal__content: {
    display: "flex",
    paddingBottom: 14,

    [theme.breakpoints.up("md")]: {
      justifyContent: "space-between",
      paddingBottom: 5,
    },
    "& >p": {
      fontSize: 16,
      fontWeight: 400,
      width: "100%",
    },
    "& >svg": {
      marginRight: 8,
      fontSize: 25,
    },
  },
  room__rule__modal__title: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: "22px",
    padding: "10px 0",
    [theme.breakpoints.up("md")]: {
      padding: "24px 0",
      fontWeight: 400,
    },
  },
  room__rule__modal__cancle: {
    width: "50%",
    "&>h5": {
      fontSize: 16,
      fontWeight: 600,
    },
    "& >p": {
      fontSize: 12,
    },
  },
  room__btnShowAll: {
    textTransform: "initial",
    textDecoration: "underline",
    fontSize: 16,
    paddingLeft: 5,
    cursor: "pointer",
  },
}));
