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
}));
