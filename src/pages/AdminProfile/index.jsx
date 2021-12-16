import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import { Box } from "@mui/system";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import manageAuthApi from "../../api/manageAuthApi";
import { USERID } from "../../constants/config";
import { getInfoUserAction } from "../../store/action/Auth";
import useStyles from "./style";
const AdminProfile = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));
  const infoUser = useSelector((state) => state.AuthReducer.infoUser);

  const dispatch = useDispatch();
  const [fileUpload, setFileUpload] = useState(null);

  const handleChangeFile = (event) => {
    setFileUpload(event.target.files[0]);
  };

  const idUser = localStorage.getItem(USERID);

  useEffect(() => {
    if (fileUpload === null) return;
    const handleUpImage = async () => {
      const formData = new FormData();
      formData.append("avatar", fileUpload);
      const res = await manageAuthApi.postAvatarUser(formData);
      dispatch(getInfoUserAction(idUser));
    };

    handleUpImage();
  }, [dispatch, fileUpload, idUser]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.profile}>
      {isDesktop ? (
        <div>
          <Grid container>
            <Grid item lg={3}>
              <Card className={classes.root} variant="outlined">
                <CardContent className={classes.profile__top}>
                  <Box display="flex" justifyContent="center">
                    <Avatar
                      alt="Avatar"
                      src={infoUser.avatar}
                      className={classes.large}
                    />
                  </Box>

                  <input
                    accept="image/*"
                    className={classes.uploadInput}
                    id="icon-button-file"
                    type="file"
                    onChange={handleChangeFile}
                  />
                  <label htmlFor="icon-button-file">
                    <Typography className={classes.uploadButton}>
                      Cập nhật ảnh
                    </Typography>
                  </label>
                  <div className={classes.icon__style}>
                    <VerifiedUserOutlinedIcon />
                  </div>
                  <Typography className={classes.pos}>
                    Xác minh danh tính
                  </Typography>
                  <Typography className={classes.profile__text__accuracy}>
                    Xác thực danh tính của bạn với huy hiệu xác minh danh tính.
                  </Typography>
                  <Button className={classes.profile__button} size="small">
                    Nhận huy hiệu
                  </Button>
                </CardContent>
                <CardActions className={classes.profile__name}>
                  <Typography variant="h6">
                    {infoUser.name} đã xác nhận
                  </Typography>
                  <Box display="flex">
                    <DoneOutlinedIcon className={classes.profile__name__icon} />
                    <Typography className={classes.profile__name__text}>
                      Địa chỉ email
                    </Typography>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item lg={9}>
              <div className={classes.profile__left}>
                <div>
                  <Typography variant="h5" className={classes.profile__title}>
                    Xin chào, tôi là {infoUser.name}
                  </Typography>
                  <Typography className={classes.profile__text__start}>
                    Bắt đầu tham gia vào 2021
                  </Typography>
                </div>
                <div className={classes.propfile__info}>
                  <Typography className={classes.profile__info__text}>
                    Thông tin cá nhân
                  </Typography>
                  <div className={classes.profile__info__item}>
                    <div>
                      <Typography variant="subtitle2">Name</Typography>
                    </div>
                    <div>
                      <Typography variant="subtitle1">
                        {infoUser.name}
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.profile__info__item}>
                    <div>
                      <Typography variant="subtitle2">Birthday</Typography>
                    </div>
                    <div>
                      <Typography variant="subtitle1">
                        {moment(infoUser.birthday).format("DD-MM-YYYY")}
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.profile__info__item}>
                    <div>
                      <Typography variant="subtitle2">Address</Typography>
                    </div>
                    <div>
                      <Typography variant="subtitle1">
                        {infoUser.address}
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.profile__info__item}>
                    <div>
                      <Typography variant="subtitle2">Email</Typography>
                    </div>
                    <div>
                      <Typography variant="subtitle1">
                        {infoUser.email}
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.profile__info__item}>
                    <div>
                      <Typography variant="subtitle2">Phone</Typography>
                    </div>
                    <div>
                      <Typography variant="subtitle1">
                        {infoUser.phone}
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.profile__info__item}>
                    <div>
                      <Typography variant="subtitle2">Gender</Typography>
                    </div>
                    <div>
                      <Typography variant="subtitle1">
                        {infoUser.gender ? "Nam" : "Nữ"}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div className={classes.profile__mobile}>
          <Box display="flex" justifyContent="space-between">
            <div>
              <Typography
                variant="h5"
                className={classes.profile__mobile__title}
              >
                Xin chào, tôi là {infoUser.name}
              </Typography>
              <Typography className={classes.profile__text__start}>
                Bắt đầu tham gia vào 2021
              </Typography>
              <div className={classes.icon__style}>
                <VerifiedUserOutlinedIcon />
              </div>
              <div className={classes.profile__top}>
                <Typography className={classes.pos}>
                  Xác minh danh tính
                </Typography>
                <Typography className={classes.profile__text__accuracy}>
                  Xác thực danh tính của bạn với huy hiệu xác minh danh tính.
                </Typography>
                <Button className={classes.profile__button} size="small">
                  Nhận huy hiệu
                </Button>
              </div>
            </div>
            <div>
              <Avatar
                alt="Avatar"
                src={infoUser.avatar}
                className={classes.large}
              />
              <input
                accept="image/*"
                className={classes.uploadInput}
                id="icon-button-file"
                type="file"
                onChange={handleChangeFile}
              />
              <label htmlFor="icon-button-file">
                <Typography className={classes.uploadButton}>
                  Cập nhật ảnh
                </Typography>
              </label>
            </div>
          </Box>

          <div className={classes.profile__mobile__item}>
            <Typography variant="h6">{infoUser.name} đã xác nhận</Typography>
            <Box display="flex">
              <DoneOutlinedIcon className={classes.profile__name__icon} />
              <Typography className={classes.profile__name__text}>
                Địa chỉ email
              </Typography>
            </Box>
          </div>
          <div className={classes.profile__left}>
            <div className={classes.propfile__info}>
              <Typography className={classes.profile__info__text}>
                Thông tin cá nhân
              </Typography>
              <div className={classes.profile__info__item}>
                <div>
                  <Typography variant="subtitle2">Name</Typography>
                </div>
                <div>
                  <Typography variant="subtitle1">{infoUser.name}</Typography>
                </div>
              </div>
              <div className={classes.profile__info__item}>
                <div>
                  <Typography variant="subtitle2">Birthday</Typography>
                </div>
                <div>
                  <Typography variant="subtitle1">
                    {moment(infoUser.birthday).format("Do MMM YYYY")}
                  </Typography>
                </div>
              </div>
              <div className={classes.profile__info__item}>
                <div>
                  <Typography variant="subtitle2">Address</Typography>
                </div>
                <div>
                  <Typography variant="subtitle1">
                    {infoUser.address}
                  </Typography>
                </div>
              </div>
              <div className={classes.profile__info__item}>
                <div>
                  <Typography variant="subtitle2">Email</Typography>
                </div>
                <div>
                  <Typography variant="subtitle1">{infoUser.email}</Typography>
                </div>
              </div>
              <div className={classes.profile__info__item}>
                <div>
                  <Typography variant="subtitle2">Phone</Typography>
                </div>
                <div>
                  <Typography variant="subtitle1">{infoUser.phone}</Typography>
                </div>
              </div>
              <div className={classes.profile__info__item}>
                <div>
                  <Typography variant="subtitle2">Gender</Typography>
                </div>
                <div>
                  <Typography variant="subtitle1">
                    {infoUser.gender ? "Nam" : "Nữ"}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
