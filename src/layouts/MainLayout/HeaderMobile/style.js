import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  //  Home css
  content: {
    position: "fixed",
    zIndex: 999,
    backgroundColor: (props) => (props.isScrolled ? "#fff" : "transparent"),
    padding: "16px 24px",
    top: 0,
    right: 0,
    left: 0,
    transition: "all 0.3s ease-in",
  },
  btnSearch: {
    "& > button": {
      width: "100%",
      padding: "10px 30px",
      borderRadius: 24,
      textTransform: "initial",
      border: "1px solid rgb(247, 247, 247)",
      backgroundColor: "rgb(247, 247, 247)",
      fontWeight: 600,
    },
    "& .MuiButton-startIcon": {
      color: "#FF385C",
    },
    "& .MuiButton-root:hover": {
      backgroundColor: "#fff",
    },
  },

  // List css
  province: {
    backgroundColor: (props) => (props.isScrolled ? "transparent" : "#fff"),
    borderRadius: 24,
    padding: (props) => (props.isScrolled ? "10px 0" : "10px 15px"),
    transition: "padding 0.1s ease-in",
  },
  iconPrev: {
    fontSize: 24,
    padding: 5,
  },
  content__booking: {
    width: "100%",
    border: "none",
    outline: "none",
    background: "transparent",
    padding: "7px 10px",
    cursor: "pointer",
    "&>div>h4": {
      fontWeight: 600,
      fontSize: 14,
    },
    "&>div>p": {
      fontWeight: 600,
      fontSize: 14,
      color: "#999",
      borderRight: "1px solid #999",
      paddingRight: 10,
    },
  },
  content__booking__iconFilter: {
    fontSize: 24,
    cursor: "pointer",
  },

  // Searchbar list
  wrapper__searchBar: {
    maxHeight: 500,
    paddingTop: 20,
    paddingBottom: 15,
  },
  content__searchBar: {
    border: "1px solid rgb(221, 221, 221) ",
    borderRadius: 12,
    backgroundColor: " rgb(255, 255, 255)",
    boxShadow: "rgb(0 0 0 / 12%) 0px 6px 16px",
    color: " rgb(34, 34, 34)",
    transition: "box-shadow 0.2s cubic-bezier(0.35, 0, 0.65, 1) 0s",
    "&:hover": {
      boxShadow: "rgb(0 0 0 / 18%) 0px 2px 4px ",
    },
  },

  content__searchBar__btnLocation: {
    padding: 15,
    width: "100%",
    justifyContent: "left",
    "&> .MuiButton-label": {
      fontWeight: 600,
      textTransform: "initial",
    },
  },
  content__searchBar__btnAddDate: {
    width: "100%",
    padding: "15px 10px",
    borderRight: "1px solid rgb(221, 221, 221)",
    justifyContent: "left",
    "&> .MuiButton-label": {
      fontWeight: 400,
      textTransform: "initial",
      color: "#999",
      "& .MuiButton-startIcon": {
        color: "#000",
      },
    },
  },
  content__searchBar__btnAddGuest: {
    width: "100%",
    padding: "15px 10px",
    justifyContent: "left",

    "&> .MuiButton-label": {
      fontWeight: 400,
      textTransform: "initial",
      color: "#999",
      "& .MuiButton-startIcon": {
        color: "#000",
      },
    },
  },

  // Modal
  modal: {
    paddingTop: "48px",
    "& >div:first-child": {
      backgroundImage:
        "linear-gradient(to right,#BD1E59 0%,#92174D 50%,#861453 100%)",
      zIndex: -1,
    },
  },
  modal__content: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    zIndex: 999,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflowY: "auto",
  },

  modal__header: {
    padding: "16px 24px 0 24px",
    background: "rgb(255, 255, 255)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    display: "flex",
    alignItems: "center",
    "& >button": {
      cursor: "pointer",
      fontSize: 20,
      marginRight: 15,
    },
    "& .MuiInput-underline:after, .MuiInput-underline:before": {
      display: "none",
    },
  },

  modal__datepicker: {
    paddingTop: 24,
    paddingBottom: 60,
    "& .css-1xhj18k": {
      display: "block",
      "& .css-1tape97": {
        border: "none",
      },
    },
  },
  modal__content__datepicker: {
    padding: "10px 24px",
  },
  modal__content__guest: {
    padding: "10px 24px",
    "&>h5": {
      fontWeight: 600,
      paddingBottom: 24,
    },
    "& >div": {
      "&>h5": {
        fontSize: 18,
        "&> p": {
          fontSize: 14,
        },
      },
      "& .MuiBox-root": {
        "&>button": {
          width: 30,
          height: 30,
        },
      },
    },
  },
  modal__actions__bottom: {
    position: "fixed",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgb(255, 255, 255)",
    zIndex: 99,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    borderTop: "1px solid rgb(235, 235, 235)",
  },
  modal__actions__btnDelete: {
    textDecoration: "underline",
    marginTop: 30,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  modal__actions__btnDelete__disabled: {
    color: " rgb(235, 235, 235)",
    cursor: "not-allowed",
    borderColor: " rgb(235, 235, 235)",
    backgroundColor: "rgb(255, 255, 255)",
  },

  modal__text__search: {
    padding: "12px 24px 0 24px",
    fontWeight: 600,
  },
  modal__locations_searched: {
    display: "flex",
    alignItems: "center",
    padding: "0 24px",
    paddingTop: 12,
  },
  modal__locations__searched__icons: {
    marginRight: 12,
    backgroundColor: "rgb(241, 241, 241)",
    padding: 12,
    borderRadius: 8,
    "& >svg": {
      fontSize: 20,
    },
  },
  modal__locations__searched__name: {
    fontSize: 16,
    cursor: "pointer",
  },
}));
