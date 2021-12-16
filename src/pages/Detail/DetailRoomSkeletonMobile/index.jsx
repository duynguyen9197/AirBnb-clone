import { Box } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React, { Fragment } from "react";
import useStyles from "./style";

const DetailRoomSkeletonMobile = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Skeleton variant="rect" width="100%" height={250} />

      <div className={classes.content}>
        <Box pb={3}>
          <Skeleton variant="text" width="50%" height="30px" />
          <Skeleton variant="text" width="70%" height="30px" />
          <Skeleton variant="text" width="40%" height="30px" />
        </Box>

        <Box pb={3}>
          <Box className={classes.root} pt={3}>
            <Box width="100%" >
              <Skeleton variant="text" width="50%" height="30px" />
              <Skeleton variant="text" width="50%" height="30px" />
            </Box>
            <Skeleton variant="circle" width={60} height={50} />
          </Box>
          <Skeleton variant="text" width="70%" height="30px" />

        </Box>
        <Box pt={3} pb={3} borderTop="1 px solid rgb(221, 221, 221,1)">
          {Array.from(new Array(2)).map((item, index) => {
            return (
              <div>
                <Box key={index} display="flex" alignItems="center">
                  <Skeleton variant="circle" width={50} height={40} />
                  <Box ml={3} width="100%">
                    <Skeleton variant="text" width="80%" height="30px" />
                    <Skeleton variant="text" width="50%" height="30px" />
                  </Box>
                </Box>
              </div>
            );
          })}
        </Box>
        <div className={classes.bookingFooter}>
          <Box p={3} className={classes.root}>
            <Box width="100%">
              <Skeleton variant="text" width="50%" height="30px" />
              <Skeleton variant="text" width="80%" height="30px" />
            </Box>
            <Box mr={4} width="70%">
              <Skeleton variant="rect" width="100%" height={50} />
            </Box>
          </Box>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailRoomSkeletonMobile;
