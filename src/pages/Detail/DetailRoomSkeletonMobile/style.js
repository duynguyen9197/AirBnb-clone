import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
    root:{
        width: "100%",
        borderTop: "1px solid rgb(221, 221, 221,1)",
         display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    },
  content: {
    padding: 24,
  },
 
 
  bookingFooter: {
    position: "fixed",
    bottom: 0,
    right: 0,
    left: 0,
    borderTop: " 1px solid rgb(221, 221, 221)",
    minHeight: 80,
    backgroundColor: "rgb(255, 255, 255)",
    zIndex: 9999,
    width: "100%",
  },
}));
