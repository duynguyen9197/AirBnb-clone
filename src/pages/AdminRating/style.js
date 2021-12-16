import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  container: {
    maxHeight: 500,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: 600,
    paddingBottom: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    objectFit: "cover",
  },
  pagination: {
    justifyContent: "center",
    display: "flex",
  },
  inputSearch: {
    borderRadius: 30,
    marginBottom: 40,
    marginTop: 20,
    padding: "5px 20px",
    "&:focus-within": {
      border: "1px solid #000",
    },
  },
  btnAdd: {
    display: (props) => props.showContentAdd && "none",
  },
  contentAdd: {
    display: (props) => (props.showContentAdd ? "block" : "none"),
    transition: "display 0.4s ease",
  },
  contentAdd__title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& >p": {
      fontSize: 20,
    },
  },
  user__rating: {
    width: "50%",
  },
  add__rating: {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
}));
