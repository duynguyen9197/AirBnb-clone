import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  rating__infoUser: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
  },
  rating__createAt: {
    marginLeft: 10,
    "& >p": {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "20px",
    },
    "& >span": {
      fontSize: 14,
      color: "#999",
    },
  },
  rating_avatar: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    objectFit: "cover",
  },
  rating__content: {
    "& >p": {
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      marginTop: 5,
    },
  },
}));
