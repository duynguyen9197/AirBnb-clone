import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  labelRoot: {
    display: "flex",
    alignItems: "center",
    padding: 5,
    justifyContent: "space-between",
    width: "100%",
  },
  labelIcon: {
    marginRight: 10,
    fontSize: 20,
    color: (props) => props.color,
  },
  labelText: {
    fontWeight: "inherit",
    flexGrow: 1,
    color: (props) => props.color,
    backgroundColor: (props) => props.bgColor,
  },
}));
