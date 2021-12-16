import { Container, Typography } from "@material-ui/core";
import useStyles from "./style";
import React from "react";
import Slider from "react-slick";

const Stay = () => {
  const classes = useStyles();
  const fakeCities = [
    {
      name: "Nơi nghỉ dưỡng ngoài trời",
      img: "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480",
    },
    {
      name: "Chỗ ở độc đáo",
      img: "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480",
    },
    {
      name: "Toàn bộ nhà",
      img: "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480",
    },
    {
      name: "Cho phép mang theo thú cưng",
      img: "https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=480",
    },
  ];
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <Container maxWidth={false} className={classes.root}>
      <Typography variant="h4" className={classes.stay__title}>
        Ở bất cứ đâu
      </Typography>
      <Slider {...settings}>
        {fakeCities.map((item, index) => {
          return (
            <div key={index}>
              <div className={classes.stay__item}>
                <img
                  className={classes.stay__img}
                  src={item.img}
                  alt="stayhome1"
                />
                <p className={classes.stay__content}>{item.name}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </Container>
  );
};

export default Stay;
