import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  room__infoHost: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",

    [theme.breakpoints.up("md")]: {
      justifyContent: "initial",
      marginBottom: 24,
    },
    "& >div >p": {
      fontSize: 20,
      lineHeight: "20px",
      fontWeight: 600,
      marginBottom: 8,
    },
    "& >div >span": {
      fontSize: 15,
      fontWeight: 400,
      color: "#999",
      [theme.breakpoints.up("md")]: {
        fontSize: 16,
      },
    },
  },
  room__host__avatar: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    position: "relative",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      marginRight: 15,
    },
  },
  room__host__medal: {
    position: "absolute",
    bottom: 15,
    right: -5,
    fontSize: 25,
    color: "orange",
    [theme.breakpoints.up("md")]: {
      right: 10,
      bottom: 5,
    },
  },

  room__host__achievenment: {
    width: "100%",
    [theme.breakpoints.up("xl")]: {
      width: "50%",
    },
  },
  room__host__achievenment__rated: {
    marginBottom: 10,
    "&>svg": {
      color: "#ff385c",
    },
    "&>span": {
      marginLeft: 8,
      fontSize: !5,
    },
  },

  room__host__achievenment__content: {
    paddingTop: 10,
    "& >h5": {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: "20px",
      marginBottom: 10,
    },
    "& >h6": {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "24px",
      marginBottom: 12,
      [theme.breakpoints.up("md")]: {
        marginBottom: 16,
      },
    },
    "& >p": {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "24px",
      marginBottom: 8,
    },
  },
  room__host__btnContact: {
    width: "100%",
    border: "2px solid #999",
    borderRadius: 8,
    margin: "20px 0",
    padding: 10,
    textTransform: "initial",
    fontWeight: 600,
    fontSize: 16,
    [theme.breakpoints.up("md")]: {
      width: "auto",
      padding: "13px 23px",
    },
  },
  room__host__recommend: {
    display: "flex",
    alignItems: "center",
    "&>svg": {
      marginRight: 10,
      fontSize: 40,
      color: "#ff385c",
    },
    "& > span": {
      fontSize: 13,
    },
  },
}));
