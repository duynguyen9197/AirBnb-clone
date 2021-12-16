import {
  Button,
  Grid,
  IconButton,
  Modal,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Box } from "@mui/system";
import React, { Fragment, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Gi3DStairs } from "react-icons/gi";
import { GrFormNext } from "react-icons/gr";
import { IoLogoNoSmoking } from "react-icons/io";
import {
  MdAccessTimeFilled,
  MdCoronavirus,
  MdError,
  MdHealthAndSafety,
  MdPets,
} from "react-icons/md";
import useStyles from "./style";
import moment from "moment";

const DetailRules = () => {
  const classes = useStyles();
  const [openModalRule, setOpenModalRule] = useState(false);
  const [openModalHealth, setOpenModalHealth] = useState(false);
  const [openModalRuleCancle, setOpenModalRuleCancle] = useState(false);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  const arrRule = [
    {
      icon: <MdAccessTimeFilled />,
      content: "Nhận phòng: Sau 14:00",
    },
    {
      icon: <MdAccessTimeFilled />,
      content: "Trả phòng: 12:00",
    },
    {
      icon: <IoLogoNoSmoking />,
      content: "Không hút thuốc",
    },
    {
      icon: <MdPets />,
      content: "Không thú cưng",
    },
  ];
  const arrHealth = [
    {
      icon: <MdHealthAndSafety />,
      content: "Đã cam kết thực hiện quy trình vệ sinh tăng cường của Airbnb.",
    },
    {
      icon: <MdCoronavirus />,
      content:
        "Trong thời gian diễn ra đại dịch COVID-19, tất cả chủ nhà và khách phải xem và thực hiện theo hướng dẫn về giãn cách xã hội và các hướng dẫn khác của Airbnb liên quan đến COVID-19.",
    },
    {
      icon: <MdError />,
      content: "Không có máy phát hiện khí CO",
    },
    {
      icon: <MdError />,
      content: "Không có máy báo khói",
    },
    {
      icon: <MdError />,
      content:
        "Camera an ninh/thiết bị ghi — Airbnb cấm lắp camera và thiết bị ghi trong không gian riêng như phòng ngủ hoặc phòng tắm",
    },
  ];

  const arrRuleCancle = [
    {
      date: `${moment(new Date()).format("Do MMM")}`,
      time: "14:00",
      status: "nhận phòng",
      content: "Hoàn tiền đầy đủ, trừ phí dịch vụ và 30 ngày đầu tiên",
    },
    {
      date: "15 thg 11",
      time: "12:00",
      status: "trả phòng",
      content: "Hoàn tiền đầy đủ, trừ phí dịch vụ và 30 ngày sau ngày hủy",
    },
  ];
  return (
    <Fragment>
      {isTablet ? (
        <Grid container className={classes.room__rules}>
          <Grid item md={4}>
            <div>
              <Typography
                variant="h5"
                className={classes.room__rule__modal__title}
              >
                Nội quy nhà
              </Typography>
              {arrRule.map((rule, index) => (
                <div key={index} className={classes.room__rule__modal__content}>
                  {rule.icon}
                  <Typography variant="body2">{rule.content}</Typography>
                </div>
              ))}
            </div>
          </Grid>
          <Grid item md={4}>
            <div>
              <Typography
                variant="h5"
                className={classes.room__rule__modal__title}
              >
                Y tế và an toàn
              </Typography>
              {arrHealth.map((rule, index) => (
                <div key={index} className={classes.room__rule__modal__content}>
                  {rule.icon}
                  <Typography variant="body2">
                    {rule.content.length > 40 ? (
                      <>
                        {rule.content.substr(0, 100)}
                        <Typography
                          variant="span"
                          endIcon={<GrFormNext />}
                          className={classes.room__btnShowAll}
                          onClick={() => setOpenModalHealth(true)}
                        >
                          Hiển thị thêm
                        </Typography>
                      </>
                    ) : (
                      rule.content
                    )}
                  </Typography>
                </div>
              ))}
              <Button
                endIcon={<GrFormNext />}
                className={classes.room__btnShowAll}
                onClick={() => setOpenModalHealth(true)}
              >
                Hiển thị thêm
              </Button>
            </div>
          </Grid>
          <Grid item md={3}>
            <div>
              <Typography
                variant="h5"
                className={classes.room__rule__modal__title}
              >
                Chính sách hủy
              </Typography>
            </div>
            <div>
              Nếu hủy trước 17 thg 10, bạn sẽ được hoàn tiền đầy đủ trừ đi chi
              phí 30 ngày đầu tiên và phí dịch vụ.
            </div>
            <Button
              endIcon={<GrFormNext />}
              className={classes.room__btnShowAll}
              onClick={() => setOpenModalRuleCancle(true)}
            >
              Hiển thị thêm
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Fragment>
          <div className={classes.room__rules}>
            <div
              className={classes.room__rules__content}
              onClick={() => setOpenModalRule(true)}
            >
              <Typography variant="h5">Nội quy nhà</Typography>
              <Typography variant="body1">Nhận phòng: Sau 14:00</Typography>
            </div>
            <GrFormNext />
          </div>
          <div className={classes.room__rules}>
            <div
              className={classes.room__rules__content}
              onClick={() => setOpenModalHealth(true)}
            >
              <Typography variant="h5">Y tế và an toàn</Typography>
              <Typography variant="body1">
                Đã cam kết thực hiện quy trình vệ sinh tăng cường của Airbnb.
              </Typography>
            </div>
            <GrFormNext />
          </div>
          <div className={classes.room__rules}>
            <div
              className={classes.room__rules__content}
              onClick={() => setOpenModalRuleCancle(true)}
            >
              <Typography variant="h5">Chính sách hủy</Typography>
              <Typography variant="body1">
                Nếu hủy trước {moment(new Date()).format("Do MMM")}, bạn sẽ được
                hoàn tiền đầy đủ trừ đi chi phí 30 ngày đầu tiên và phí dịch vụ.
              </Typography>
            </div>
            <GrFormNext />
          </div>
        </Fragment>
      )}
      {/*  Modal rule */}
      <Modal
        open={openModalRule}
        onClose={() => setOpenModalRule(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        <Slide direction="up" in={openModalRule}>
          <div className={classes.room__rule__modal}>
            <div className={classes.room__rule__modal__btnClose}>
              <IconButton>
                <AiOutlineClose onClick={() => setOpenModalRule(false)} />
              </IconButton>
            </div>
            <Box pb={10}>
              <Typography
                variant="h5"
                className={classes.room__rule__modal__title}
              >
                Nội quy nhà
              </Typography>
              {arrRule.map((rule, index) => (
                <div key={index} className={classes.room__rule__modal__content}>
                  {rule.icon}
                  <Typography variant="body2">{rule.content}</Typography>
                </div>
              ))}
            </Box>
          </div>
        </Slide>
      </Modal>

      {/* Modal Healthy and Safe */}
      <Modal
        open={openModalHealth}
        onClose={() => setOpenModalHealth(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        <Slide direction="up" in={openModalHealth}>
          <div className={classes.room__rule__modal}>
            <div className={classes.room__rule__modal__btnClose}>
              <IconButton>
                <AiOutlineClose onClick={() => setOpenModalHealth(false)} />
              </IconButton>
            </div>
            <Box pb={10}>
              <Typography
                variant="h5"
                className={classes.room__rule__modal__title}
              >
                Y tế và an toàn
              </Typography>
              {arrHealth.map((rule, index) => (
                <div key={index} className={classes.room__rule__modal__content}>
                  {rule.icon}
                  <Typography variant="body2">{rule.content}</Typography>
                </div>
              ))}
              <Typography
                variant="h5"
                className={classes.room__rule__modal__title}
              >
                Bạn cũng chấp nhận
              </Typography>
              <div className={classes.room__rule__modal__content}>
                <Gi3DStairs />
                <Typography variant="body2">Phải leo cầu thang</Typography>
              </div>
            </Box>
          </div>
        </Slide>
      </Modal>

      {/* Modal Cancle */}
      <Modal
        open={openModalRuleCancle}
        onClose={() => setOpenModalRuleCancle(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        <Slide direction="up" in={openModalRuleCancle}>
          <div className={classes.room__rule__modal}>
            <div className={classes.room__rule__modal__btnClose}>
              <IconButton>
                <AiOutlineClose onClick={() => setOpenModalRuleCancle(false)} />
              </IconButton>
            </div>
            <Box pb={10}>
              <Typography variant="h5">Chính sách hủy</Typography>
              <Typography
                variant="h5"
                className={classes.room__rule__modal__title}
              >
                Hủy muộn nhất vào ngày
              </Typography>
              {arrRuleCancle.map((rule, index) => (
                <div key={index} className={classes.room__rule__modal__content}>
                  <div className={classes.room__rule__modal__cancle}>
                    <Typography variant="h5">{rule.date}</Typography>
                    <Typography variant="body1">{rule.time}</Typography>
                    <Typography variant="body1">({rule.status})</Typography>
                  </div>
                  <Typography variant="body2">{rule.content}</Typography>
                </div>
              ))}
            </Box>
          </div>
        </Slide>
      </Modal>
    </Fragment>
  );
};

export default DetailRules;
