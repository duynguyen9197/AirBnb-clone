import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import useStyles from "./style";

const CatalogRating = ({ item }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography variant="span">{item?.name}</Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="75%"
      >
        <div className={classes.rating__modal__detailRating_percent}>
          <Typography
            variant="span"
            style={{ width: `${(item?.value * 100) / 5}% ` }}
          ></Typography>
        </div>
        <Typography
          variant="body2"
          className={classes.rating__modal__detailRating__value}
        >
          {item?.value}
        </Typography>
      </Box>
    </Fragment>
  );
};

export default CatalogRating;
