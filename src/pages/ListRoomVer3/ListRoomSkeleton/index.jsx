import { Skeleton } from "@material-ui/lab";
import React from "react";
import useStyles from "./style";

const ListRoomSkeleton = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* List room  */}
      <div className={classes.listRoom}>
        {Array.from(new Array(4)).map((skes, index) => (
          <div className={classes.ske} key={index}>
            <div className={classes.ske__rect}>
              <Skeleton
                animation="wave"
                variant="rect"
                width="100%"
                height={200}
              />
            </div>
            <div className={classes.ske__text}>
              <Skeleton />
              <Skeleton width="60%" />
              <Skeleton width="60%" />
            </div>
          </div>
        ))}
      </div>

      {/* Map */}

      <div className={classes.map}>
        <Skeleton animation="wave" variant="rect" width="100%" height="100%" />
      </div>
    </div>
  );
};

export default ListRoomSkeleton;
