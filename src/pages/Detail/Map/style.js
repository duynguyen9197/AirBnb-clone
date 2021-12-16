import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  map__container: {
    height: "250px",
    [theme.breakpoints.up("md")]: {
      height: "450px",
    },
    "& >h5": {
      fontWeight: 600,
      fontSize: 20,
      lineHeight: "20px",
      paddingBottom: 24,
    },
  },

  map__location: {
    width: 30,
    height: 30,
    color: "white",
    backgroundColor: "#d6d6d6",
    borderRadius: "50%",
    padding: 20,
    position: "relative",
    "&>div": {
      backgroundColor: "red",
      width: 40,
      height: 40,
      borderRadius: "50%",
      position: "absolute",
      top: 15,
      left: 15,
      "&>button": {
        padding: 8,
        color: "#fff",
      },
    },
  },
  navigateControl: {
    right: 20,
    top: 15,
    width: 40,
    height: 40,
    "& .mapboxgl-ctrl-group": {
      width: "100%",
      borderRadius: 8,
    },
    "& .mapboxgl-ctrl-group button": {
      width: "100%",
      height: 40,
    },
  },
}));
