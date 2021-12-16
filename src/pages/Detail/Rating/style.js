import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  slider: {
    "& .slick-slide": {
      "& >div": {
        marginRight: 45,
      },
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
  rating__totalRated: {
    padding: "24px 0",
    [theme.breakpoints.up("md")]: {
      paddingBottom: "48px",
      paddingTop: 0,
    },
    "& >span": {
      fontSize: 20,
      fontWeight: 600,
      "& >svg": {
        marginRight: 5,
        fontSize: 17,
        color: "#ff385c",
      },
    },
  },
  rating__container: {
    border: "1px solid #d0c7c7",
    borderRadius: 12,
    padding: 15,
    marginTop: 10,
    height: 200,
  },
  rating__textShowAll: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    fontSize: 18,
    fontWeight: 600,
    textDecoration: "underline",
    cursor: "pointer",
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
    top: 0,
    width: "100%",
    marginBottom: 15,
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
  rating__btnShowAll: {
    width: "100%",
    border: "2px solid #999",
    borderRadius: 8,
    marginTop: 20,
    padding: 10,
    textTransform: "initial",
    fontWeight: 600,
    fontSize: 16,
    [theme.breakpoints.up("md")]: {
      width: "auto",
      padding: "13px 23px",
    },
  },
  rating__modal__inputSearch: {
    boxShadow: "rgb(176 176 176) 0px 0px 0px 1px inset",
    backgroundColor: "rgb(247, 247, 247)",
    borderRadius: 20,
    padding: "6px 10px",
    "&:focus-within": {
      outline: "1px solid #000",
    },
    "& .MuiInput-underline:after,.MuiInput-underline:before": {
      display: "none",
    },
    "& .MuiInputAdornment-root": {
      fontSize: 22,
      marginLeft: 10,
    },
    "& .MuiInputBase-input": {
      "&::placeholder": {
        color: "rgb(34, 34, 34)",
        fontSize: 14,
        fontWeight: 400,
      },
    },
  },
  rating__modal__detailRating: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 13,
    paddingRight: 20,
    [theme.breakpoints.up("md")]: {
      paddingRight: 80,
    },
    "& >span": {
      width: "100%",
      fontSize: 13,
      [theme.breakpoints.up("md")]: {
        fontSize: 16,
        fontWeight: 600,
      },
    },
  },
  rating__modal__content__userRated: {
    paddingBottom: 120,

    [theme.breakpoints.up("md")]: {
      paddingBottom: 0,
    },
    [theme.breakpoints.up("xl")]: {
      paddingLeft: "10%",
    },
    "& >div": {
      marginBottom: 20,
    },
  },
  rating__title__notRating: {
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    "& >h5": {
      fontWeight: 600,
      fontSize: 20,
      lineHeight: "20px",
      paddingBottom: 12,
    },
    "&> a": {
      color: "#000",
      paddingLeft: 5,
      textDecoration: "underline",
    },
  },
}));
