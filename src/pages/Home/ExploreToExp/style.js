import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
  root: {
    margin: "32px 0",
    "& .MuiContainer-root": {
      padding: "0 24px",
      [theme.breakpoints.up("sm")]: {
        padding: "0 40px",
      },
      [theme.breakpoints.up("xl")]: {
        padding: "0 80px",
      },
    },
  },
  slider: {
    "& .slick-slide": {
      "& >div": {
        marginRight: 15,
      },
    },
  },

  explore__title: {
    fontSize: 22,
    lineHeight: "28px",
    fontWeight: 700,
    letterSpacing: "0.02em",
    paddingBottom: 16,
    [theme.breakpoints.up("md")]: {
      fontSize: 26,
      lineHeight: "30px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 32,
      lineHeight: "36px",
    },
  },
  expore__items__img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "50% 50%",
    borderRadius: 8,
  },
  explore__items__title: {
    fontSize: 18,
    lineHeight: "22px",
    color: "rgb(34,34,34,1)",
    fontWeight: 600,
    paddingTop: 8,
  },
  explore__items__desc: {
    fontSize: 14,
    lineHeight: "18px",
    color: "rgb(113, 113, 113,1)",
    marginTop: 4,
    fontWeight: 400,
  },
}));
