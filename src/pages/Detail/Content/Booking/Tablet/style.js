import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  room__booking__content: {
    height: "100%",
    overflowY: "auto",
    boxShadow: "rgb(0 0 0 / 12%) 0px 6px 16px",
    padding: 16,
    border: "1px solid rgb(221, 221, 221)",
    borderRadius: 12,
    [theme.breakpoints.up("xl")]: {
      padding: 24,
    },

    "& .MuiAccordionDetails-root": {
      borderTop: "1px solid #999",
      padding: "20px 14px",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      "& >span": {
        fontSize: 14,
      },
    },
    "& .MuiAccordionSummary-root": {
      padding: "0 8px",
      [theme.breakpoints.up("xl")]: {
        padding: "0 16px",
      },
    },
  },
  room__booking__price: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: "20px",
    "& >span": {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: "18px",
    },
  },
  room__booking__rating: {
    fontSize: 13,
    "& >button>span": {
      fontSize: 13,
      textDecoration: "underline",
      textTransform: "lowercase",
    },
    "& >svg": {
      marginRight: 5,
      color: "#ff385c",
    },
  },
  room__booking__datepicker: {
    borderRadius: 12,
    border: "1px solid #999",
    marginTop: 20,
    overflow: "hidden",
    "& .MuiInput-underline:before": {
      display: "none",
    },
    "& .MuiInput-underline:after": {
      display: "none",
    },
  },

  room__booking__datepicker__content: {
    display: "flex",
    borderBottom: "1px solid #999",
    "& >div:first-child": {
      padding: "6px 10px",
      borderRight: "1px solid #999",
      cursor: "pointer",
    },
    "& >div:last-child": {
      padding: "6px 10px",
      cursor: "pointer",
    },
  },
  rook__booking__label: {
    fontSize: "8px",
    lineHeight: "16px",
    fontWeight: 600,
    width: "100%",
    textOverflow: "ellipsis",
    [theme.breakpoints.up("xl")]: {
      fontSize: 12,
    },
  },
  room__booking__input: {
    fontSize: "14px",
    lineHeight: "18px",
    width: "100%",
    fontWeight: 500,
    outline: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    textOverflow: "ellipsis",
  },
  room__booking__filter: {
    cursor: "pointer",
    padding: "15px 10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& >p": {
      fontSize: 10,
      fontWeight: 600,
    },
    "&>span": {
      fontSize: 13,
    },
  },
  room__booking__filter__menu: {
    "& .MuiPaper-root": {
      borderRadius: "12px",
      backgroundColor: "#fff",
      boxShadow: "0px 6px 20px rgb(0 0 0 / 20%)",
      overflowX: "hidden",
      overflowY: "auto",
      padding: 34,
      width: 200,
      [theme.breakpoints.up("xl")]: {
        width: 300,
      },
    },
    "& .MuiList-root ": {
      width: "100%",
    },
  },

  room__booking__payment_note: {
    textAlign: "center",
    fontSize: 12,
    padding: "10px 0",
  },
  room__booking__payment: {
    paddingBottom: 15,
    borderBottom: "1px solid #999",
  },
  room__booking__payment__content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    "& >h4": {
      fontSize: 15,
      padding: "10px 0",
      fontWeight: 600,
    },
  },
  room__booking__saleFor: {
    color: "rgb(0, 138, 5)",
    fontWeight: 600,
  },
}));
