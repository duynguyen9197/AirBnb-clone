import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  room__image__content: {
    position: "relative",
    borderRadius: "12px",
    overflow: "hidden",
  },
  image: {
    height: "100%",
    cursor: "pointer",
    position: "relative",
  },
}));
