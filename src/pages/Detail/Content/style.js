import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  container: {
    padding: "0 24px",
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
  },
  wrapper: {
    borderTop: "1px solid rgb(221, 221, 221,1) ",
    padding: "24px 0",
    [theme.breakpoints.up("md")]: {
      paddingTop: 48,
    },
    "& .PrivatePickersSlideTransition-root": {
      minHeight: 230,
    },
  },
  info__host: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
    "& >div >p": {
      fontSize: 18,
      lineHeight: "20px",
      fontWeight: 600,
      marginBottom: 8,
    },
  },
  avatar__host: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    position: "relative",
  },
  medal__host: {
    position: "absolute",
    bottom: 0,
    right: -15,
    fontSize: 35,
    color: "#fc8460",
  },

  utilities_content: {
    display: "flex",
    width: "100%",
    padding: "15px 0",
    "& >div>svg": {
      fontSize: 30,
      marginRight: 15,
    },
    "& >div>p": {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: "20px",
    },
    "& >div>span": {
      fontSize: 13,
      lineHeight: 1.5,
      color: "rgb(113, 113, 113)",
    },
  },

  bedroom__title: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: "20px",
    paddingBottom: 24,
  },
  bedroom__content: {
    border: "1px solid rgb(221, 221, 221)",
    borderRadius: 12,
    padding: "10px 16px",
    marginRight: 10,
    "& >div>svg": {
      fontSize: 40,
      color: "#6e6c6c",
    },
  },
  bedroom__detail: {
    padding: "15px 0",
    "&>p": {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: "20px",
    },
    "&>span": {
      fontSize: 13,
      color: "#6e6c6c",
    },
  },

  reviews__title: {
    fontWeight: 600,
    fontSize: 20,
    lineHeight: "20px",
    paddingBottom: 10,
  },
  reviews__content: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,

    "& >svg": {
      fontSize: 30,
      color: "#6e6c6c",
      marginRight: 15,
    },
  },
  reviews__name: {
    fontSize: 15,
  },
  room_reviews__name__linethrough: {
    textDecoration: "line-through",
  },

  room_datepicker: {
    "& >h1": {
      fontWeight: 600,
      fontSize: 20,
      lineHeight: "20px",
      paddingBottom: 5,
    },
    "& >span": {
      color: "#6e6c6c",
      fontSize: 15,
      marginRight: 10,
    },
  },
  datepicker__btnDelete: {
    textAlign: "left",
    [theme.breakpoints.up("sm")]: {
      textAlign: "right",
      padding: "0 80px",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "0 24px",
    },
    "& >button": {
      textDecoration: "underline",
      textTransform: "initial",
    },
  },
  room__booking: {
    marginTop: 48,
    marginBottom: 80,
    width: "100vw",
    height: "100%",
    marginLeft: "8.3%",
    position: "sticky",
    top: "120px",
  },
}));
