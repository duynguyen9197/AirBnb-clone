import { Button, Typography } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaAirbnb } from "react-icons/fa";
import { MdOutlineEmail, MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { USERID } from "../../../../constants/config";
import { createAction } from "../../../../store/action/createAction/createAction";
import { SHOW_MODAL_SIGNIN } from "../../../../store/types/AuthType";
import useStyles from "./style";

const MenuBottom = () => {
  const [scrolled, setScrolled] = useState({
    prevScrollpos: window.pageYOffset,
    visible: false,
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const { infoUser } = useSelector((state) => state.AuthReducer);

  useEffect(() => {
    const handleScroll = () => {
      const { prevScrollpos } = scrolled;
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollpos > currentScrollPos;
      setScrolled({
        prevScrollpos: currentScrollPos,
        visible,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);
  const isUserId = localStorage.getItem(USERID);

  const classes = useStyles({ isScrolled: scrolled.visible });
  const handleClickLogin = () => {
    dispatch(createAction(SHOW_MODAL_SIGNIN));
  };

  return (
    <div className={classes.rootBottom}>
      <div
        className={classes.content}
        onClick={() => {
          history.push("/");
        }}
      >
        <Button disableRipple>
          <MdSearch />
        </Button>
        <Typography variant="body2">Khám phá</Typography>
      </div>
      <div className={classes.content}>
        <Button disableRipple className={classes.btn}>
          <AiOutlineHeart />
        </Button>
        <Typography variant="body2">Yêu thích</Typography>
      </div>
      {isUserId ? (
        <Fragment>
          <div className={classes.content}>
            <Button disableRipple>
              <FaAirbnb />
            </Button>
            <Typography variant="body2">Chuyến đi</Typography>
          </div>
          <div className={classes.content}>
            <Button disableRipple>
              <MdOutlineEmail />
            </Button>
            <Typography variant="body2">Hộp thư</Typography>
          </div>

          <div
            className={classes.content}
            onClick={() => history.push(`/profile/${infoUser._id}`)}
          >
            <Button disableRipple>
              <CgProfile />
            </Button>
            <Typography variant="body2">Hồ sơ</Typography>
          </div>
        </Fragment>
      ) : (
        <div className={classes.content} onClick={handleClickLogin}>
          <Button disableRipple>
            <CgProfile />
          </Button>
          <Typography variant="body2">Đăng nhập</Typography>
        </div>
      )}
    </div>
  );
};

export default MenuBottom;
