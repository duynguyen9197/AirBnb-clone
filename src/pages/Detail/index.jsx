import { useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import queryString from "query-string";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import {
  DetailRatingAction,
  DetailRoomAction
} from "../../store/action/RentRoomsAction";
import ContentRoom from "./Content";
import DetailRoomSkeletonDeskTop from "./DetailRoomSkeletonDeskTop";
import DetailRoomSkeletonMobile from "./DetailRoomSkeletonMobile";
import InfoHost from "./InfoHost";
import DetailRoomMap from "./Map";
import DetailRating from "./Rating";
import RoomImage from "./RoomImage";
import DetailRules from "./Rules";

const Detail = () => {
  const useStyle = makeStyles(() => ({
    content: {
      padding: (props) =>
        props.isDeskTop ? "0 80px" : props.isTablet ? " 0 40px" : 0,

      maxWidth: 1120,
      margin: "0 auto",
    },
    wrapper: {
      borderTop: "1px solid rgb(221, 221, 221,1) ",
      padding: "24px",
      [theme.breakpoints.up("md")]: {
        padding: "48px 0",
      },
    },
  }));
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  const isDeskTop = useMediaQuery(theme.breakpoints.up("xl"));
  const classes = useStyle({ isTablet, isDeskTop });
  const params = useParams();
  const roomId = params.roomId;
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _location: params._location,
      _checkIn: params._checkIn,
      _checkOut: params._checkOut,
      _adult: Number.parseInt(params._adult),
      _children: Number.parseInt(params._children),
      _toddler: Number.parseInt(params._toddler),
      _roomLatitude: Number(params._roomLatitude),
      _roomLongitude: Number(params._roomLongitude),
      _locationLatitude: Number(params._locationLatitude),
      _locationLongitude: Number(params._locationLongitude),
    };
  }, [location.search]);
  const dispatch = useDispatch();
  const { detailRoom, detailRating } = useSelector(
    (state) => state.RentRoomsReducer
  );
  useEffect(() => {
    dispatch(DetailRoomAction(roomId, () => setLoading()));
    dispatch(DetailRatingAction(roomId));
    window.scrollTo(0, 0);
  }, [dispatch, roomId]);

  if (loading) {
    return (
      <div className={classes.content}>
        {isTablet ? (
          <DetailRoomSkeletonDeskTop />
        ) : (
          <DetailRoomSkeletonMobile />
        )}
      </div>
    );
  }

  return (
    <div className={classes.content}>
      <RoomImage detailRoom={detailRoom} detailRating={detailRating} />

      <ContentRoom
        detailRoom={detailRoom}
        queryParams={queryParams}
        detailRating={detailRating}
      />

      {/* Map */}
      <div className={classes.wrapper}>
        <DetailRoomMap queryParams={queryParams} />
      </div>

      {/*  Rating */}
      <div className={classes.wrapper} id="rated">
        <DetailRating detailRating={detailRating} />
      </div>

      {/* Info Host Room */}
      <div className={classes.wrapper}>
        <InfoHost />
      </div>

      {/*  Rules */}
      <div className={classes.wrapper}>
        <DetailRules />
      </div>
    </div>
  );
};

export default Detail;
