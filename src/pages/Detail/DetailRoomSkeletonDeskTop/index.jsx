import { Grid, Box } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import React, { Fragment } from "react";
import useStyles from "./style";

const DetailRoomSkeletonDeskTop = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Box pt={3} pb={3}>
        <Skeleton width="50%" variant="text" />
        <Skeleton width="30%" variant="text" />
        <Skeleton width="30%" variant="text" />
      </Box>
      <div className={classes.room__image__content}>
        <Grid container spacing={1} height="100%">
          <Grid item xs={6}>
            <div className={classes.image}>
              <Skeleton
                animation="wave"
                variant="rect"
                width="100%"
                height="100%"
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={1}>
              {Array.from(new Array(4)).map((item, index) => (
                <Grid item xs={6} key={index}>
                  <div className={classes.image}>
                    <Skeleton
                      animation="wave"
                      variant="rect"
                      width="100%"
                      height={200}
                    />
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div className={classes.root}>
        <Box className={classes.root} width="100%" mr={3}>
          <Skeleton width="50%" height="30px" variant="text" />

          <Skeleton variant="circle" width={40} height={40} />
        </Box>

        <Skeleton width="100%" height="80px" variant="text" />
      </div>
    </Fragment>
  );
};

export default DetailRoomSkeletonDeskTop;
