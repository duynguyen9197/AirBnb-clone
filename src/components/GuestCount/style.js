import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 25,
    "& >div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      gap: "10px",
    },
  },
  filter__name: {
    fontSize: 12,
    fontWeight: 600,
    [theme.breakpoints.up("xl")]: {
      fontSize: 15,
    },
    "& >p": {
      fontSize: 10,
    },
  },
  filter__btn: {
    minWidth: 20,
    height: 20,
    borderRadius: "50%",
    border: "1px solid #999",
    backgroundColor: "transparent",
    cursor: "pointer",
    fontSize: 13,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      border: "1px solid #000",
    },
    [theme.breakpoints.up("xl")]: {
      width: 30,
      height: 30,
      fontSize: 20,
    },
  },
  filter__btn__disabled: {
    cursor: "not-allowed",
    borderColor: "rgb(235, 235, 235)",
    backgroundColor: "rgb(255, 255, 255)",
    color: "rgb(235, 235, 235)",
  },
}));
