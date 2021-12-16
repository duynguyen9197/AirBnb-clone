import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  footer: {
    paddingTop: "20px",
    backgroundColor: "#F7F7F7",
    borderTop: "1px solid #DDDDDD",
    [theme.breakpoints.up("sm")]: {
      padding: "0 40px",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "0 80px",
    },
  },
  footer__style: {
    paddingTop: "32px",
    paddingBottom: "32px",
  },
  footer__title: {
    fontSize: "14px",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#222222",
  },

  footer__content: {
    [theme.breakpoints.down(1025)]: {
      paddingTop: "20px",
      borderTop: "1px solid #DDDDDD",
      width: "100%",
    },
    [theme.breakpoints.down(376)]: {
      borderTop: "1px solid #DDDDDD",
      width: "100%",
    },
  },

  footer__item: {
    // width: "45%",

    "& ul": {
      listStyle: "none",
      padding: 0,
      textDecoration: "none",
      display: "block",
      [theme.breakpoints.down(1025)]: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "left",
      },
      [theme.breakpoints.down(744)]: {
        display: "block",
      },
      "& li": {
        marginTop: "16px",
        paddingLeft: 0,
        paddingRight: 0,
        [theme.breakpoints.down(1025)]: {
          flexBasis: "calc(100%/3) !important",
          flexWrap: "wrap !important",
        },
        "& a": {
          textDecoration: "none",
          color: "#222222",
          fontSize: 12,
          display: "block",
          width: "100%",
          whiteSpace: "nowrap",
          transition: "all .2s",
          lineHeight: "18px",
          [theme.breakpoints.down(769)]: {
            fontSize: "14px !important",
          },
          [theme.breakpoints.down(1025)]: {
            fontSize: 18,
          },
          [theme.breakpoints.down(376)]: {
            fontSize: 14,
          },
          "&:hover": {
            color: "inherit",
            cursor: "pointer",
            textDecoration: "underline",
          },
        },
      },
    },
  },
  footer__bot: {
    display: "flex",
    padding: "24px 0",
    borderTop: "1px solid #DDDDDD",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down(1025)]: {
      display: "block",
    },
    [theme.breakpoints.down(744)]: {
      display: "block",
      paddingBottom: (props) =>
        props.detailpageRoute ? 125 : 24,
    },
  },
  footer__item__bot: {
    display: "flex",
    listStyle: "none",
    paddingRight: 10,
    textDecoration: "none",
    alignItems: "center",
    [theme.breakpoints.down(1025)]: {
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "10px",
    },
    [theme.breakpoints.down(744)]: {
      display: "block",
    },

    "& li": {
      paddingLeft: 0,
      paddingRight: 0,

      "& a": {
        textDecoration: "none",
        color: "#222222",
        fontSize: 15,
        display: "block",
        paddingRight: "10px",
        whiteSpace: "nowrap",
        transition: "all .2s",
        lineHeight: "18px ",
        "&:hover": {
          color: "inherit",
          cursor: "pointer",
          textDecoration: "underline",
        },
      },
      "& span": {
        textDecoration: "none",
        color: "#222222",
        fontSize: 15,
        display: "block",
        paddingRight: "10px",
        whiteSpace: "nowrap",
        transition: "all .2s",
        lineHeight: "18px ",
      },
    },
  },
  footer__item__bot__item: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down(744)]: {
      marginTop: 10,
    },
  },
  footer__bot__content: {
    [theme.breakpoints.down(1025)]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down(744)]: {
      fontSize: "15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  footer__bot__content1: {
    display: "flex",
    marginLeft: "32px",
    [theme.breakpoints.down(744)]: {
      display: "none",
    },
    "& ul": {
      listStyle: "none",
      padding: 0,
      textDecoration: "none",
      display: "flex",
      margin: 0,
      "& li": {
        marginRight: "24px",
        paddingLeft: 0,
        paddingRight: 0,
        "& a": {
          textDecoration: "none",
          color: "#222222",
          fontSize: 15,
          display: "block",

          whiteSpace: "nowrap",
          transition: "all .2s",
          lineHeight: "18px ",
          "&:hover": {
            color: "inherit",
            cursor: "pointer",
            textDecoration: "underline",
          },
        },
      },
    },
  },
}));
