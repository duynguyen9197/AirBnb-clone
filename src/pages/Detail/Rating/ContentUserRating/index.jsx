import { Button, Typography } from "@material-ui/core";
import moment from "moment";
import React, { Fragment } from "react";
import { MdNavigateNext } from "react-icons/md";
import useStyles from "./style";
import NO_AVATAR from "../../../../assets/img/NO_AVATAR.png";
const ContentUserRating = ({ item, handleShowModal, openModal }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.rating__infoUser}>
        <img
          src={item?.userId?.avatar || NO_AVATAR}
          alt="avatar"
          className={classes.rating_avatar}
        />
        <div className={classes.rating__createAt}>
          <Typography variant="body2">{item?.userId?.name}</Typography>
          <Typography variant="span">
            {moment(`${item?.created_at}`).format("Do MMM YYYY hh:mm")}
          </Typography>
        </div>
      </div>
      <Typography variant="span" className={classes.rating__content}>
        {item?.content?.length > 160 && !openModal ? (
          <Fragment>
            {item?.content?.substr(0, 140)}...
            <Button onClick={handleShowModal}>
              Hiển thị thêm <MdNavigateNext />
            </Button>
          </Fragment>
        ) : (
          item?.content
        )}
      </Typography>
    </Fragment>
  );
};

export default ContentUserRating;
