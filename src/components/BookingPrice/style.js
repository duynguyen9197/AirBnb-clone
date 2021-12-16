import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  booking__payment: {
    paddingBottom: 15,
    borderBottom: "1px solid #999",
  },
  booking__payment__content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    "& >h4": {
      fontSize: 15,
      padding: "10px 0",
      fontWeight: 600,
    },
  },
  booking__saleFor: {
    color: "rgb(0, 138, 5)",
    fontWeight: 600,
  },

  service__fees: {
    textDecoration: 'underline'
  }
}));
