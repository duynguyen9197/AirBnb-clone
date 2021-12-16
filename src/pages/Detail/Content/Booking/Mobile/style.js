import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  booking__container: {
    position: "fixed",
    bottom: 0,
    zIndex: 9999,
    left: 0,
    right: 0,
    width: "100%",
    backgroundColor: "rgb(255, 255, 255)",
    borderTop: "1px solid rgb(221, 221, 221)",
    minHeight: 80,
  },
  booking__content: {
    padding: "15px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  booking__content__price: {
    fontSize: 16,
    fontWeight: 700,
    "&>span": {
      fontSize: 14,
      fontWeight: 400,
    },
  },
  booking__content__btn__save: {
    width: "40%",
    backgroundColor: "rgb(34, 34, 34)",
    color: "#fff",
    pointerEvents: "initial",
    "&:hover": {
      backgroundColor: "rgb(34, 34, 34,0.8)",
    },
  },
  booking__content__btn__save__isBooking: {
    width: "70%",
    backgroundColor: "rgb(221, 221, 221)",
    color: "#999",
    cursor: "not-allowed",
  },
  booking__dateTime: {
    textDecoration: "underline",
    fontSize: 18,
    cursor: "pointer",
  },

  booking__modal: {
    height: "100%",
    backgroundColor: "#fff",
    zIndex: 999,
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden",
    padding: "0px 24px",
    margin: "10px 0",
    borderRadius: 12,
    "& .css-4l7j15": {
      overflow: "initial",
    },
  },
  booking__modal__header: {
    backgroundColor: "#fff",
    position: "sticky",
    top: 0,
    width: "100%",
    marginBottom: 15,
    zIndex: 99,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& >svg": {
      cursor: "pointer",
      fontSize: 20,
    },
    "& >span": {
      textDecoration: "underline",
      fontWeight: 600,
      cursor: "pointer",
    },
  },
  booking__datepicker: {
    padding: "24px 0",
    "& .css-1xhj18k": {
      display: "block",
      "& .css-1tape97": {
        border: "none",
      },
    },
  },
}));
