import {
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from "@material-ui/core";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import { GiTrophyCup } from "react-icons/gi";
import { FAKE_AVATAR } from "../../../constants/config";
import useStyles from "./style";
import { BsFillStarFill } from "react-icons/bs";
import { SiAdguard, SiAirbnb } from "react-icons/si";
import { FaMedal } from "react-icons/fa";

const InfoHost = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Fragment>
      {isTablet ? (
        <div className={classes.room__infoHost}>
          <Box position="relative">
            <img
              src={FAKE_AVATAR}
              alt="avatar"
              className={classes.room__host__avatar}
            />
            <GiTrophyCup className={classes.room__host__medal} />
          </Box>
          <div>
            <Typography variant="body2">Chủ nhà Quang Huy</Typography>
            <Typography variant="span">
              Đã tham gia vào tháng 10 năm 2021
            </Typography>
          </div>
        </div>
      ) : (
        <div className={classes.room__infoHost}>
          <div>
            <Typography variant="body2">Chủ nhà Quang Huy</Typography>
            <Typography variant="span">
              Đã tham gia vào tháng 10 năm 2021
            </Typography>
          </div>
          <Box position="relative">
            <img
              src={FAKE_AVATAR}
              alt="avatar"
              className={classes.room__host__avatar}
            />
            <GiTrophyCup className={classes.room__host__medal} />
          </Box>
        </div>
      )}

      {/* Achievement */}
      <Grid container className={classes.room__host__achievenment}>
        <Grid item xs={12} md={4} xl={6}>
          <div className={classes.room__host__achievenment__rated}>
            <BsFillStarFill />
            <Typography variant="span">58 đánh giá</Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4} xl={6}>
          <div className={classes.room__host__achievenment__rated}>
            <SiAdguard />
            <Typography variant="span">Đã xác minh danh tính</Typography>
          </div>
        </Grid>

        <Grid item xs={12} md={4} xl={6}>
          <div className={classes.room__host__achievenment__rated}>
            <FaMedal />

            <Typography variant="span">Chủ nhà siêu cấp</Typography>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.room__host__achievenment__content}>
            <Typography variant="h5">
              Quang Huy là một Chủ nhà siêu cấp
            </Typography>
            <Typography variant="subtitle1">
              Chủ nhà siêu cấp là những người có kinh nghiệm, được đánh giá cao
              và cam kết mang lại kỳ nghỉ tuyệt vời cho khách.
            </Typography>
            <Typography variant="body1">Ngôn ngữ: English</Typography>
            <Typography variant="body1">Tỉ lệ phản hồi: 83%</Typography>
            <Typography variant="body1">
              Thời gian phản hồi: trong vòng vài giờ
            </Typography>
          </div>
          <div>
            <Button disableRipple className={classes.room__host__btnContact}>
              Liên hệ với chủ nhà
            </Button>
          </div>

          <div className={classes.room__host__recommend}>
            <SiAirbnb />
            <Typography variant="span">
              Để bảo vệ khoản thanh toán của bạn, tuyệt đối không chuyển tiền
              hoặc liên lạc bên ngoài trang web hoặc ứng dụng Airbnb.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default InfoHost;
