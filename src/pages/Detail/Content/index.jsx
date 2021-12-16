import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import KingBedOutlinedIcon from "@material-ui/icons/KingBedOutlined";
import SingleBedOutlinedIcon from "@material-ui/icons/SingleBedOutlined";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import TextField from "@mui/material/TextField";
import clsx from "clsx";
import { vi } from "date-fns/locale";
import moment from "moment";
import "moment/locale/vi";
import React, { Fragment, useState } from "react";
import { AiOutlineHome, AiOutlineKey, AiOutlineWifi } from "react-icons/ai";
import { BsBookmarkStar } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { GiFireBowl, GiTrophyCup } from "react-icons/gi";
import {
  MdCable,
  MdDryCleaning,
  MdElevator,
  MdFireplace,
  MdHotTub,
  MdKitchen,
  MdPool,
  MdWifi,
} from "react-icons/md";
import { FAKE_AVATAR } from "../../../constants/config";
import BookingMobile from "./Booking/Mobile";
import BookingTabLet from "./Booking/Tablet";
import useStyles from "./style";

const ContentRoom = ({ detailRoom, queryParams, detailRating }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));
  const classes = useStyles({ isMobile });
  const arrUtilitiesRoom = [
    {
      name: "Toàn bộ nhà ",
      icon: <AiOutlineHome />,
      desc: "Bạn sẽ có biệt thự cho riêng mình.",
    },
    {
      name: "Vệ sinh tăng cường",
      icon: <BsBookmarkStar />,
      desc: "Chủ nhà này đã cam kết thực hiện quy trình vệ sinh tăng cường 5 bước của Airbnb.",
    },
    {
      name: "Trải nghiệm nhận phòng tuyệt vời",
      icon: <AiOutlineKey />,
      desc: "100% khách gần đây đã xếp hạng 5 sao cho quy trình nhận phòng.",
    },
    {
      name: "Tiện nghi cho cuộc sống hàng ngày ",
      icon: <AiOutlineWifi />,
      desc: "Chủ nhà đã trang bị chỗ ở này để cho thuê dài hạn – có sẵn nhà bếp, Wi-fi, máy giặt và chỗ đỗ xe miễn phí.",
    },
  ];
  const arrBedroom = [
    {
      icon: <SingleBedOutlinedIcon />,
      name: "Phòng ngủ 1",
      desc: "1 giường queen",
    },
    {
      icon: [<KingBedOutlinedIcon />, <SingleBedOutlinedIcon />],
      name: "Phòng ngủ 2",
      desc: "1 giường queen,1 giường đôi",
    },
  ];
  const arrReviewsRoom = [
    {
      name: "Thang máy",
      status: detailRoom?.elevator,
      icon: <MdElevator />,
    },
    {
      name: "Bồn nước nóng",
      status: detailRoom?.hotTub,
      icon: <MdHotTub />,
    },
    {
      name: "Hồ bơi",
      status: detailRoom?.pool,
      icon: <MdPool />,
    },
    {
      name: "Bình chữa cháy",
      status: detailRoom?.indoorFireplace,
      icon: <MdFireplace />,
    },
    {
      name: "Máy sấy tóc",
      status: detailRoom?.dryer,
      icon: <MdDryCleaning />,
    },
    {
      name: "Phòng Gym",
      status: detailRoom?.gym,
      icon: <CgGym />,
    },
    {
      name: "Nhà bếp",
      status: detailRoom?.kitchen,
      icon: <MdKitchen />,
    },
    {
      name: "Wifi",
      status: detailRoom?.wifi,
      icon: <MdWifi />,
    },
    {
      name: "Lò sửi ấm",
      status: detailRoom?.heating,
      icon: <GiFireBowl />,
    },
    {
      name: "Truyền hình cáp",
      status: detailRoom?.cableTV,
      icon: <MdCable />,
    },
  ];
  const [bookingTime, setBookingTime] = useState([
    queryParams._checkIn !== "Invalid date"
      ? new Date(queryParams._checkIn)
      : null,
    queryParams._checkOut !== "Invalid date"
      ? new Date(queryParams._checkOut)
      : null,
  ]);

  const totalDateTime = bookingTime[1] - bookingTime[0];
  const totalDate = totalDateTime / (1000 * 3600 * 24);
  const isBooking = bookingTime.some((item) => item === null);
  //  {day.charAt(0).toUpperCase() : phần này thư viện đang xét cứng chỉ lấy đc 1 chữ cái đầu
  // nên không thể lấy T2 T3 T4 như mẫu được , tạm thời lấy 2 3 4 5 ... C
  // const days = ["CN","T2", "T3", "T4", "T5", "T6", "T7" ];
  const days = ["C", "2", "3", "4", "5", "6", "7"];
  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  const locale = {
    ...vi,
    localize: {
      day: (n) => days[n],
      month: (n) => months[n],
    },
  };

  return (
    <div className={classes.container}>
      <Grid container wrap="nowrap">
        <Grid item xs={12} md={7}>
          <div className={classes.wrapper}>
            {/* Info Host */}
            <div className={classes.info__host}>
              <div>
                <Typography variant="body2">Toàn bộ biệt thự</Typography>
                <Typography variant="body2">Chủ nhà Quang Huy</Typography>
              </div>
              <Box position="relative">
                <img
                  src={FAKE_AVATAR}
                  alt="avatar"
                  className={classes.avatar__host}
                />
                <GiTrophyCup className={classes.medal__host} />
              </Box>
            </div>

            <div>
              <Typography variant="span">
                {detailRoom?.guests} khách . {detailRoom?.bedRoom} phòng ngủ .
                {detailRoom?.bath} phòng tắm
              </Typography>
            </div>
          </div>

          {/*  Utilities Room */}
          <div className={classes.wrapper}>
            {arrUtilitiesRoom.map((item) => (
              <Box className={classes.utilities_content}>
                <div>{item.icon}</div>
                <div>
                  <Typography variant="body2">{item.name}</Typography>
                  <Typography variant="span">{item.desc}</Typography>
                </div>
              </Box>
            ))}
          </div>

          {/* Description */}
          <div className={classes.wrapper}>
            <Typography variant="span">{detailRoom?.description}</Typography>
          </div>

          {/* Bedroom */}
          <div className={classes.wrapper}>
            <Typography variant="h5" className={classes.bedroom__title}>
              Nơi bạn sẽ ngủ nghỉ
            </Typography>
            <Grid container wrap="nowrap">
              {arrBedroom.slice(0, `${detailRoom?.bedRoom}`).map((item) => (
                <Grid item xs={6} className={classes.bedroom__content}>
                  <div>{item.icon}</div>
                  <div className={classes.bedroom__detail}>
                    <Typography variant="body2">{item.name}</Typography>
                    <Typography variant="span">{item.desc}</Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>

          {/* Review */}

          <div className={classes.wrapper} id="review">
            <Typography variant="h1" className={classes.reviews__title}>
              Nơi này có những gì cho bạn
            </Typography>
            <Grid container>
              {arrReviewsRoom.map((item, index) => (
                <Grid item key={index} xs={12} xl={6}>
                  <di className={classes.reviews__content}>
                    {item.icon}
                    <Typography
                      variant="body1"
                      className={clsx(
                        classes.reviews__name,
                        item.status
                          ? null
                          : classes.room_reviews__name__linethrough
                      )}
                    >
                      {item.name}
                    </Typography>
                  </di>
                </Grid>
              ))}
            </Grid>
          </div>

          {/* Date pickter */}

          <div className={classes.wrapper}>
            {isBooking ? (
              <div className={classes.room_datepicker}>
                <Typography variant="h1">Chọn ngày nhận phòng</Typography>
                <Typography variant="span">
                  Thêm ngày đi để biết giá chính xác
                </Typography>
              </div>
            ) : (
              <div className={classes.room_datepicker}>
                <Typography variant="h1">
                  {totalDate} đêm tại thành phố vũng tàu
                </Typography>
                <Typography variant="span">
                  {moment(bookingTime[0]).format("Do MMM  YYYY")} -
                  <Typography variant="span">
                    {moment(bookingTime[1]).format("Do MMM  YYYY")}
                  </Typography>
                </Typography>
              </div>
            )}

            <LocalizationProvider dateAdapter={AdapterDateFns} locale={locale}>
              <StaticDateRangePicker
                disablePast
                displayStaticWrapperAs="desktop"
                value={bookingTime}
                calendars={isDesktop ? 2 : 1}
                onChange={(newValue) => {
                  setBookingTime(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <Fragment>
                    <TextField {...startProps} />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField {...endProps} />
                  </Fragment>
                )}
              />
            </LocalizationProvider>
            <div className={classes.rooom__datepicker__btnDelete}>
              <Button
                onClick={() => {
                  setBookingTime([null, null]);
                }}
              >
                Xóa ngày
              </Button>
            </div>
          </div>
        </Grid>

        {/*  Booking */}
        {isTablet ? (
          <Grid item md={5} className={classes.room__booking}>
            <BookingTabLet
              bookingTime={bookingTime}
              setBookingTime={setBookingTime}
              locale={locale}
              totalDate={totalDate}
              isBooking={isBooking}
              queryParams={queryParams}
              detailRating={detailRating}
              detailRoom={detailRoom}
            />
          </Grid>
        ) : (
          <BookingMobile
            bookingTime={bookingTime}
            setBookingTime={setBookingTime}
            locale={locale}
            totalDate={totalDate}
            isBooking={isBooking}
            detailRoom={detailRoom}
            queryParams={queryParams}
          />
        )}
      </Grid>
    </div>
  );
};

export default ContentRoom;
