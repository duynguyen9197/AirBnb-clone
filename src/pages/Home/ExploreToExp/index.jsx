import { Container, Typography } from "@material-ui/core";
import React from "react";
import Slider from "react-slick";
import imgExp_1 from "../../../assets/img/experience__1.webp";
import imgExp_2 from "../../../assets/img/experience__2.webp";
import imgExp_3 from "../../../assets/img/experience__3.webp";
import useStyles from "./style";

const ExploreToExp = () => {
  const classes = useStyles();
  const fakeArrExperience = [
    {
      title: "Trải nghiệm",
      img: imgExp_1,
      desc: "Tìm các hoạt động khó quên gần bạn.",
      link: "https://www.airbnb.com.vn/s/experiences",
    },
    {
      title: "Trải nghiệm trực tuyến",
      img: imgExp_2,
      desc: "Các hoạt động tương tác, truyền trực tiếp dưới sự dẫn dắt của Người tổ chức.",
      link: "https://www.airbnb.com.vn/s/experiences/online",
    },
    {
      title: "Bộ sưu tập nổi bật: Phiêu du",
      img: imgExp_3,
      desc: "Du lịch tại nhà với Trải nghiệm trực tuyến.",
      link: "https://www.airbnb.com.vn/s/all?refinement_paths%5B%5D=%2Fplaylists%2F46390&tab_id=all_tab",
    },
  ];
  var settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: `${classes.slider}`,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };
  return (
    <div className={classes.root}>
      <Container maxWidth={false}>
        <Typography variant="h1" className={classes.explore__title}>
          Khám phá những điều nên trải nghiệm
        </Typography>
        <Slider {...settings}>
          {fakeArrExperience.map((item, index) => (
            <a href={item.link} key={index}>
              <div>
                <img
                  src={item.img}
                  alt="poster"
                  className={classes.expore__items__img}
                />
                <Typography
                  variant="h5"
                  className={classes.explore__items__title}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="span"
                  className={classes.explore__items__desc}
                >
                  {item.desc}
                </Typography>
              </div>
            </a>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default ExploreToExp;
