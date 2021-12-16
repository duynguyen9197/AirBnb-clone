import { IconButton, Tooltip, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import useStyles from "./style";

const DetailRoomMap = ({ queryParams }) => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: queryParams._locationLatitude,
    longitude: queryParams._locationLongitude,
    zoom: 12,
  });

  const settings = {
    scrollZoom: false,
    touchZoom: false,
    touchRotate: false,
  }


  const classes = useStyles();
  return (
    <div id="map" className={classes.map__container}>
      <Typography variant="h5">Nơi bạn sẽ đến</Typography>
      <ReactMapGL
        {...viewport}
        {...settings}
        mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        <NavigationControl
          className={classes.navigateControl}
          showCompass={false}
        />
        <Marker latitude={queryParams._roomLatitude} longitude={queryParams._roomLongitude}>
          <div className={classes.map__location}>
            <div>
              <Tooltip
                title="Địa điểm chính xác khi bạn đặt phòng"
                placement="top"
              >
                <IconButton>
                  <AiFillHome />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default DetailRoomMap;
