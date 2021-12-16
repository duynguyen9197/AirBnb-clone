import {
  Button,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Modal,
  Slide,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { Box } from "@mui/system";
import React, { Fragment, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import { MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { removeAccents } from "../../../constants/config";
import { createAction } from "../../../store/action/createAction/createAction";
import {
  HIDE_MODAL_RATED,
  SHOW_MODAL_RATED,
} from "../../../store/types/ListRoomType";
import CatalogRating from "./CatalogRating";
import ContentUserRating from "./ContentUserRating";
import useStyles from "./style";

const DetailRating = ({ detailRating }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  const isDeskTop = useMediaQuery(theme.breakpoints.up("xl"));
  const [valueInput, setValueInput] = useState(null);
  const dispatch = useDispatch();
  const { modalRated } = useSelector((state) => state.RentRoomsReducer);
  const handleShowModal = () => {
    dispatch(createAction(SHOW_MODAL_RATED));
  };
  const handleHideModal = () => {
    dispatch(createAction(HIDE_MODAL_RATED));
  };
  const arrCatalogRating = [
    {
      name: "Mức độ sạch sẽ",
      value: 5,
    },
    {
      name: "Độ chính xác",
      value: 4.2,
    },
    {
      name: "Liên lạc",
      value: 5,
    },
    {
      name: "Vị trí",
      value: 4.8,
    },
    {
      name: "Nhận phòng",
      value: 4.5,
    },
    {
      name: "Giá trị",
      value: 3,
    },
  ];

  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    swipeToSlide: true,
    className: `${classes.slider}`,
  };
  const arrFilterContent = detailRating?.filter?.((item) =>
    removeAccents(item?.content).includes(valueInput?.toLowerCase())
  );

  return (
    <Fragment>
      {detailRating?.length > 0 ? (
        <Fragment>
          <div className={classes.rating__totalRated}>
            <Typography variant="span">
              <BsFillStarFill />
            </Typography>
            <Typography variant="span">
              5,0 - {detailRating?.length} đánh giá
            </Typography>
          </div>
          {isTablet ? (
            <Grid container>
              {arrCatalogRating.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  xl={modalRated && 12}
                  key={index}
                  className={classes.rating__modal__detailRating}
                >
                  <CatalogRating item={item} />
                </Grid>
              ))}
              <Grid item container style={{ paddingTop: 40 }}>
                {detailRating?.slice(0, 6).map((item, index) => (
                  <Grid item md={12} xl={6} key={index}>
                    <Box py={2} pr={isDeskTop && 10}>
                      <ContentUserRating
                        item={item}
                        handleShowModal={handleShowModal}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ) : (
            <Slider {...settings}>
              {detailRating?.slice(0, 4).map((item, index) => (
                <Box key={index} className={classes.rating__container}>
                  <ContentUserRating
                    item={item}
                    handleShowModal={handleShowModal}
                  />
                </Box>
              ))}
              {detailRating?.length > 4 && (
                <Box className={classes.rating__container}>
                  <Typography
                    variant="body2"
                    className={classes.rating__textShowAll}
                    onClick={handleShowModal}
                  >
                    Hiển thị tất cả {detailRating?.length} đánh giá
                  </Typography>
                </Box>
              )}
            </Slider>
          )}

          <div>
            {detailRating?.length > 6 && (
              <Button
                disableRipple
                className={classes.rating__btnShowAll}
                onClick={handleShowModal}
              >
                Hiển thị tất cả {detailRating?.length} đánh giá
              </Button>
            )}
          </div>
          <Modal
            open={modalRated}
            onClose={handleHideModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className={classes.modal}
            closeAfterTransition
          >
            <Slide direction="up" in={modalRated}>
              <div className={classes.rating__modal}>
                <div className={classes.rating__modal__header}>
                  <IconButton>
                    <AiOutlineClose onClick={handleHideModal} />
                  </IconButton>
                  <div>
                    <div className={classes.rating__totalRated}>
                      <Typography variant="span">
                        <BsFillStarFill />
                      </Typography>
                      <Typography variant="span">
                        5,0 - {detailRating?.length} đánh giá
                      </Typography>
                    </div>

                    <div className={classes.rating__modal__inputSearch}>
                      <Input
                        startAdornment={
                          <InputAdornment position="start">
                            <MdSearch />
                          </InputAdornment>
                        }
                        placeholder="Tìm kiếm đánh giá"
                        value={valueInput}
                        onChange={(e) => setValueInput(e.target.value)}
                      >
                        Tìm kiếm theo đánh giá
                      </Input>
                    </div>
                  </div>
                </div>

                {/* Detail Rating */}

                <Grid container spacing={3} style={{ overflowY: "auto" }}>
                  <Grid item xs={12} xl={4}>
                    <Grid item container>
                      {arrCatalogRating.map((item, index) => (
                        <Grid
                          item
                          xs={12}
                          md={6}
                          xl={12}
                          key={index}
                          className={classes.rating__modal__detailRating}
                        >
                          <CatalogRating item={item} />
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                  <Grid item xs={12} xl={8}>
                    <div className={classes.rating__modal__content__userRated}>
                      {arrFilterContent?.length > 0
                        ? arrFilterContent?.map((item) => (
                            <Box>
                              <ContentUserRating
                                item={item}
                                handleShowModal={handleShowModal}
                                openModal={modalRated}
                              />
                            </Box>
                          ))
                        : detailRating.map((item) => (
                            <Box>
                              <ContentUserRating
                                item={item}
                                handleShowModal={handleShowModal}
                                openModal={modalRated}
                              />
                            </Box>
                          ))}
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Slide>
          </Modal>
        </Fragment>
      ) : (
        <div className={classes.rating__title__notRating}>
          <Typography variant="h5">Chưa có đánh giá</Typography>
          <Typography variant="span">
            Chúng tôi luôn sẵn sàng hỗ trợ để chuyến đi của bạn được suôn sẻ.
            Mọi đặt phòng đều được bảo vệ theo
          </Typography>
          <a href="https://www.airbnb.com/help/article/544">
            Chính sách hoàn tiền cho khách của Airbnb
          </a>
        </div>
      )}
    </Fragment>
  );
};

export default DetailRating;
