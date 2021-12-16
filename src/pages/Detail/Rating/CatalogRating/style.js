import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  rating__modal__detailRating_percent: {
    position: "relative",
    height: 4,
    width: "80%",
    marginRight: 5,
    backgroundColor: "rgb(221, 221, 221)",
    borderRadius: 3,
    "&> span": {
      position: "absolute",
      inset: 0,
      backgroundColor: "#222222",
    },
  },
  rating__modal__detailRating__value: {
    fontSize: 12,
    lineHeight: "16px",
    fontWeight: 600,
    marginLeft: 6,
  },
}));
