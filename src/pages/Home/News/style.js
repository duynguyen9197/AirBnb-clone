import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
  root: {
    marginBottom: 20,
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
  news: {
    width: "100%",
    height: "auto",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      height: 360,
    },
    [theme.breakpoints.up("xl")]: {
      height: 400,
    },
    [theme.breakpoints.up("xxl")]: {
      height: 440,
    },
  },
  news__overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(72, 72, 72,1)",
    position: "relative",
    borderRadius: 16,
  },
  news__backdrop: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "50% 50%",
    verticalAlign: "bottom",
    borderRadius: 16,
  },
  news__title: {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexFlow: "column",
    color: "#fff",
    padding: "32px 32px  0 32px",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
      width: 360,
      padding: "0 40px",
      textAlign: "left",
    },
    [theme.breakpoints.up("xl")]: {
      justifyContent: "center",
      padding: "0 80px",
      textAlign: "left",
    },

    "& >h2": {
      fontWeight: 600,
      fontSize: 30,
      lineHeight: "36px",
      [theme.breakpoints.up("xl")]: {
        fontSize: 48,
        lineHeight: "52px",
      },
    },
    "& >p": {
      marginTop: 12,
      fontSize: 16,
      lineHeight: "20px",
      [theme.breakpoints.up("xl")]: {
        fontSize: 18,
        lineHeight: "24px",
      },
    },
  },
  news__content__btn: {
    marginTop: 20,
    [theme.breakpoints.up("xl")]: {
      marginTop: 40,
    },
  },
  news__btn: {
    backgroundColor: "#fff !important",
    color: "rgb(72,72,72,1)",
    padding: "9px 16px",
    fontSize: 14,
    borderRadius: 8,
    [theme.breakpoints.up("xl")]: {
      fontSize: 16,
      padding: "14px 24px",
    },
  },
}));
