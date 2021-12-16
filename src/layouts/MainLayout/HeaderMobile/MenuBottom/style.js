import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  rootBottom: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    maxWidth: "100vw",
    width: "100%",
    backgroundColor: "rgb(255, 255, 255)",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    minHeight: "80px",
    height: "80px",
    border: "1px solid rgb(255, 255, 255)",
    transition: "all 0.4s",
    opacity: (props) => (props.isScrolled ? 1 : 0),
    visibility: (props) => (props.isScrolled ? "visible" : "hidden"),
    zIndex: 1,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&> button": {
      fontSize: 20,
    },
    "&:focus-within .MuiButton-text": {
      color: "red",
    },
    "&:focus-within .MuiTypography-root": {
      fontWeight: 600,
    },
  },
}));
