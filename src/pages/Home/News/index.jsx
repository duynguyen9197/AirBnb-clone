import {
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import newsImg1440 from "../../../assets//img/newsImg1440.webp";
import newsImg720 from "../../../assets//img/newsImg720.webp";
import useStyles from "./style";
import { useTheme } from "@material-ui/core/styles";

const News = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className={classes.root}>
      <Container maxWidth={false}>
        <a href="https://www.airbnb.com/host/homes?locale=vi">
          <div className={classes.news}>
            <div className={classes.news__overlay}>
              <img
                src={isTablet ? newsImg1440 : newsImg720}
                alt="imgNews"
                className={classes.news__backdrop}
              />
            </div>
            <div className={classes.news__title}>
              <Typography variant="h2">Thử đón tiếp khách</Typography>
              <Typography variant="body2">
                Kiếm thêm thu nhập và khám phá các cơ hội mới bằng cách chia sẻ
                nơi ở của bạn.
              </Typography>
              <div className={classes.news__content__btn}>
                <Button disableRipple={true} className={classes.news__btn}>
                  Tìm hiểu thêm
                </Button>
              </div>
            </div>
          </div>
        </a>
      </Container>
    </div>
  );
};

export default News;
