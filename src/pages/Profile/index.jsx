import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  IconButton,
  Modal,
  Paper,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import { Box } from "@mui/system";
import moment from "moment";
import React, { Fragment, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import manageAuthApi from "../../api/manageAuthApi";
import manageTicketApi from "../../api/manageTicketApi";
import ButtonSubmit from "../../components/ButtonSubmit";
import { USERID } from "../../constants/config";
import { getInfoUserAction } from "../../store/action/Auth";
import useStyles from "./style";
const Profile = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
  const [openModal, setOpenModal] = useState(false);
  const infoUser = useSelector((state) => state.AuthReducer.infoUser);
  const [arrTicket, setArrTicket] = useState([]);

  const dispatch = useDispatch();
  const [fileUpload, setFileUpload] = useState(null);

  const handleChangeFile = (event) => {
    setFileUpload(event.target.files[0]);
  };
  const handleModalOpen = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };

  const idUser = localStorage.getItem(USERID);

  useEffect(() => {
    const handleUpImage = async () => {
      const formData = new FormData();
      formData.append("avatar", fileUpload);
      await manageAuthApi.postAvatarUser(formData);
      dispatch(getInfoUserAction(idUser));
    };

    handleUpImage();
  }, [dispatch, fileUpload, idUser]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await manageTicketApi.getTicketRooms(infoUser._id);
        setArrTicket(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const tableHeader = ["Name", "Image", "Checkin", "Checkout", "Price"];
  const textProfileModal = "Lịch sử đặt vé";
  return (
    <Container maxWidth="lg" className={classes.profile}>
      {isDesktop ? (
        <div>
          <Grid container>
            <Grid item lg={4}>
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
            <Grid item lg={8}>
              <div className={classes.profile__left}>
                <div>
                  <Typography variant="h5" className={classes.profile__title}>
                    Xin chào, tôi là {infoUser.name}
                  </Typography>
                  <Typography className={classes.profile__text__start}>
                    Bắt đầu tham gia vào 2022
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
                <div>
                  <ButtonSubmit
                    handleSubmit={handleModalOpen}
                    text={textProfileModal}
                  />
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
              <div>
                <ButtonSubmit
                  handleSubmit={handleModalOpen}
                  text={textProfileModal}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <Fragment>
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className={classes.modal}
          closeAfterTransition
        >
          <Slide direction="up" in={openModal}>
            <div className={classes.rating__modal}>
              <div>
                <div className={classes.rating__modal__header}>
                  <IconButton className={classes.iconModal}>
                    <AiOutlineClose onClick={handleModalClose} />
                  </IconButton>
                  <Typography className={classes.profile__modal__btn}>
                    Lịch sử đặt vé ({arrTicket.length})
                  </Typography>
                </div>
                {isMobile ? (
                  <div>
                    <TableContainer
                      className={classes.modal__style}
                      component={Paper}
                    >
                      <Table
                        className={classes.table}
                        aria-label="simple table"
                      >
                        <TableHead className={classes.table__position}>
                          <TableRow>
                            {tableHeader.map((item) => (
                              <TableCell align="left" padding="normal">
                                {item}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>

                        <TableBody>
                          {arrTicket?.map((location) => (
                            <TableRow
                              key={location._id}
                              className={classes.tablerow}
                            >
                              <TableCell align="left">
                                <Typography variant="body2">
                                  {location?.roomId.name}
                                </Typography>
                              </TableCell>
                              <TableCell align="left">
                                <img
                                  src={location?.roomId.image}
                                  alt="avatar"
                                  className={classes.avatar}
                                  style={{ width: 50, height: 50 }}
                                />
                              </TableCell>
                              <TableCell align="left">
                                <Typography variant="body2">
                                  {moment(location?.checkIn).format(
                                    "Do MMM YYYY"
                                  )}
                                </Typography>
                              </TableCell>
                              <TableCell align="left">
                                {moment(location.checkOut).format(
                                  "Do MMM YYYY"
                                )}
                              </TableCell>
                              <TableCell align="left">
                                {location?.roomId.price}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                ) : (
                  <div className={classes.profile__box__style}>
                    {arrTicket?.map((location, index) => {
                      return (
                        <Box key={index} className={classes.profile__box}>
                          <Box display="flex">
                            <Box flex="0 0 35%">
                              <img
                                src={location.roomId.image}
                                alt="img"
                                className={classes.profile__box__img}
                              />
                            </Box>
                            <Box flex="0 0 65%">
                              <Typography variant="subtitle2">
                                {location?.roomId.name}
                              </Typography>
                              <Typography variant="subtitle1">
                                Checkin:{" "}
                                {moment(location?.checkIn).format(
                                  "Do MMM YYYY"
                                )}
                              </Typography>
                              <Typography variant="subtitle1">
                                Checkout:{" "}
                                {moment(location?.checkOut).format(
                                  "Do MMM YYYY"
                                )}
                              </Typography>
                              <Typography variant="subtitle1">
                                Price: {location?.roomId.price}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </Slide>
        </Modal>
      </Fragment>
    </Container>
  );
};

export default Profile;
