import {
  Button,
  IconButton,
  Modal,
  Slide,
  TextField,
  Typography,
  Box,
} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import React, { Fragment, useEffect, useState } from "react";
import { FcPrevious } from "react-icons/fc";
import { MdMyLocation, MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import { createAction } from "../../../store/action/createAction/createAction";
import {
  HIDE_MODAL_SEARCH,
  SHOW_MODAL_SEARCH,
} from "../../../store/types/ModalType";
import MenuBottom from "./MenuBottom";
import useStyles from "./style";
import moment from "moment";
import queryString from "query-string";
import { GrFormPrevious } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { IoMdFunnel } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import GuestCount from "../../../components/GuestCount";
import ButtonSubmit from "../../../components/ButtonSubmit";
import clsx from "clsx";
import { LocalizationProvider, StaticDateRangePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { removeAccents } from "../../../constants/config";

const HeaderMobile = () => {
  const [scrolled, setScrolled] = useState(false);
  const [valueSearch, setValueSearch] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const matchUrl = useRouteMatch();
  const homepageRoute = matchUrl.path === "/";
  const listpageRoute = matchUrl.path === "/list/:locationId";
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const params = queryString.parse(location.search);
  const { modalSearch } = useSelector((state) => state.ModalReducer);
  const { locations } = useSelector((state) => state.LocationReducer);
  const classes = useStyles({ isScrolled: scrolled, showSearch });
  const [modalGuestCount, setModalGuestCount] = useState(false);
  const [modalDatePicker, setModalDatePicker] = useState(false);
  const [numbersFilter, setNumbersFilter] = useState({
    _adult: Number(params._adult) || 0,
    _children: Number(params._children) || 0,
    _toddler: Number(params._toddler) || 0,
  });
  const [bookingTime, setBookingTime] = useState([
    params?._checkIn ? new Date(params?._checkIn) : null,
    params?._checkOut ? new Date(params?._checkOut) : null,
  ]);
  const isBooking = bookingTime.some((date) => date === null);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
      if (window.scrollY >= 0) {
        setShowSearch(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);
  const handleShowModalSearch = () => {
    dispatch(createAction(SHOW_MODAL_SEARCH));
  };

  const handleHideModalSearch = () => {
    dispatch(createAction(HIDE_MODAL_SEARCH));
  };
  const arrListSearch = locations?.filter(
    (item) =>
      (removeAccents(item?.name).includes(valueSearch?.toLowerCase()) &&
        valueSearch !== "") ||
      (removeAccents(item?.province).includes(valueSearch?.toLowerCase()) &&
        valueSearch !== "")
  );

  const handleCityClick = (locationId, location) => {
    const checkInDate = moment(new Date()).format("YYYY-MM-DD");
    const checkOutDate = moment(new Date()).add(1, "days").format("YYYY-MM-DD");
    const queryParams = {
      _location: location.province,
      _checkIn: checkInDate,
      _checkOut: checkOutDate,
      _adult: 1,
      _children: 0,
      _toddler: 0,
    };

    history.push({
      pathname: `/list/${locationId}`,
      search: queryString.stringify(queryParams),
    });
  };
  const handleClickDatePicker = () => {
    const queryParams = {
      ...params,
      _checkIn: bookingTime[0]
        ? moment(bookingTime[0]).format("YYYY-MM-DD")
        : moment(new Date()).format("YYYY-MM-DD"),
      _checkOut: bookingTime[0]
        ? moment(bookingTime[1]).format("YYYY-MM-DD")
        : moment(new Date()).add(1, "days").format("YYYY-MM-DD"),
    };
    history.push({
      search: queryString.stringify(queryParams),
    });
    setModalDatePicker(false);
  };
  const handleClickGuestCount = () => {
    const queryParams = {
      ...params,
      _adult: numbersFilter._adult,
      _children: numbersFilter._children,
      _toddler: numbersFilter._toddler,
    };
    history.push({
      search: queryString.stringify(queryParams),
    });
    setModalGuestCount(false);
  };

  return (
    <Fragment>
      {homepageRoute && (
        <div className={classes.content}>
          <div className={classes.btnSearch}>
            <Button
              disableRipple
              startIcon={<MdSearch />}
              onClick={handleShowModalSearch}
            >
              Bạn sắp đi đâu?
            </Button>
          </div>
        </div>
      )}
      {listpageRoute && (
        <div className={classes.content}>
          <div className={classes.province}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <IconButton className={classes.iconPrev}>
                {showSearch ? (
                  <AiOutlineClose onClick={() => setShowSearch(false)} />
                ) : (
                  <GrFormPrevious onClick={() => history.goBack()} />
                )}
              </IconButton>
              {!showSearch && (
                <button
                  className={classes.content__booking}
                  onClick={() => {
                    setShowSearch(true);
                    setScrolled(true);
                  }}
                >
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="h4">{params._location}</Typography>
                    <Typography variant="body2">
                      {!isBooking ? (
                        <>
                          {moment(bookingTime[0]).format("Do MMM")} -
                          <Typography variant="span">
                            {moment(bookingTime[1]).format("Do MMM")}
                          </Typography>
                        </>
                      ) : (
                        "Thêm ngày"
                      )}
                    </Typography>
                  </Box>
                </button>
              )}
              <div>
                <IoMdFunnel className={classes.content__booking__iconFilter} />
              </div>
            </Box>

            {/* Searchbar */}
            {showSearch && (
              <div className={classes.wrapper__searchBar}>
                <div className={classes.content__searchBar}>
                  <Button
                    disableRipple
                    startIcon={<FiSearch />}
                    className={classes.content__searchBar__btnLocation}
                    onClick={handleShowModalSearch}
                  >
                    {params._location} Province ,Viet Nam
                  </Button>
                  <Box display="flex" borderTop="1px solid rgb(221, 221, 221)">
                    <Button
                      disableRipple
                      startIcon={<MdDateRange />}
                      className={classes.content__searchBar__btnAddDate}
                      onClick={() => setModalDatePicker(true)}
                    >
                      <Typography variant="span">
                        {!isBooking ? (
                          <>
                            {moment(bookingTime[0]).format("Do MMM")} -
                            <Typography variant="span">
                              {moment(bookingTime[1]).format("Do MMM")}
                            </Typography>
                          </>
                        ) : (
                          "Thêm ngày"
                        )}
                      </Typography>
                    </Button>
                    <Button
                      disableRipple
                      startIcon={<FaUserFriends />}
                      className={classes.content__searchBar__btnAddGuest}
                      onClick={() => setModalGuestCount(true)}
                    >
                      <Typography variant="span">
                        {numbersFilter._adult === 0 ? (
                          "Thêm khách"
                        ) : (
                          <>
                            {numbersFilter._adult + numbersFilter._children}{" "}
                            khách
                            {numbersFilter._toddler !== 0
                              ? `, ${numbersFilter._toddler} em bé`
                              : null}
                          </>
                        )}
                      </Typography>
                    </Button>
                  </Box>

                  <Modal
                    open={modalDatePicker}
                    onClose={() => setModalDatePicker(false)}
                    className={classes.modal}
                    closeAfterTransition
                  >
                    <Slide direction="up" in={modalDatePicker}>
                      <div className={classes.modal__content}>
                        <div className={classes.modal__header}>
                          <IconButton>
                            <FcPrevious
                              onClick={() => setModalDatePicker(false)}
                            />
                          </IconButton>
                        </div>

                        <div className={classes.modal__content__datepicker}>
                          <Typography
                            variant="h5"
                            className={classes.modal__title}
                          >
                            Khi nào bạn sẽ có mặt ở đó?
                          </Typography>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <StaticDateRangePicker
                              className={classes.modal__datepicker}
                              displayStaticWrapperAs="desktop"
                              value={bookingTime}
                              onChange={(newValue) => {
                                setBookingTime(newValue);
                              }}
                            />
                          </LocalizationProvider>
                        </div>
                        <div className={classes.modal__actions__bottom}>
                          <Button
                            disableRipple
                            className={
                              isBooking
                                ? clsx(
                                    classes.modal__actions__btnDelete__disabled,
                                    classes.modal__actions__btnDelete
                                  )
                                : classes.modal__actions__btnDelete
                            }
                            onClick={() => setBookingTime([null, null])}
                          >
                            Xóa
                          </Button>
                          <Box width="50%">
                            <ButtonSubmit
                              text="Đồng ý"
                              handleSubmit={handleClickDatePicker}
                            />
                          </Box>
                        </div>
                      </div>
                    </Slide>
                  </Modal>

                  <Modal
                    open={modalGuestCount}
                    onClose={() => setModalGuestCount(false)}
                    className={classes.modal}
                    closeAfterTransition
                  >
                    <Slide direction="up" in={modalGuestCount}>
                      <div className={classes.modal__content}>
                        <div className={classes.modal__header}>
                          <IconButton>
                            <FcPrevious
                              onClick={() => setModalGuestCount(false)}
                            />
                          </IconButton>
                        </div>

                        <div className={classes.modal__content__guest}>
                          <Typography
                            variant="h5"
                            className={classes.modal__title}
                          >
                            Ai sắp tới ?
                          </Typography>
                          <GuestCount
                            numbersFilter={numbersFilter}
                            setNumbersFilter={setNumbersFilter}
                          />
                        </div>
                        <div className={classes.modal__actions__bottom}>
                          <Button
                            disableRipple
                            className={
                              numbersFilter._adult === 0 &&
                              numbersFilter._children === 0 &&
                              numbersFilter._toddler === 0
                                ? clsx(
                                    classes.modal__actions__btnDelete__disabled,
                                    classes.modal__actions__btnDelete
                                  )
                                : classes.modal__actions__btnDelete
                            }
                            onClick={() =>
                              setNumbersFilter({
                                _adult: 0,
                                _children: 0,
                                _toddler: 0,
                              })
                            }
                          >
                            Xóa
                          </Button>
                          <Box width="50%">
                            <ButtonSubmit
                              text="Đồng ý"
                              handleSubmit={handleClickGuestCount}
                            />
                          </Box>
                        </div>
                      </div>
                    </Slide>
                  </Modal>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <Modal
        open={modalSearch}
        onClose={handleHideModalSearch}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 100,
        }}
      >
        <Slide direction="up" in={modalSearch}>
          <div className={classes.modal__content}>
            <div className={classes.modal__header}>
              <IconButton>
                <FcPrevious onClick={handleHideModalSearch} />
              </IconButton>
              <TextField
                placeholder="Bạn sẽ đi đâu?"
                type="search"
                fullWidth
                value={valueSearch}
                onChange={(e) => setValueSearch(e.target.value)}
              />
            </div>
            {arrListSearch.length > 0 ? (
              <Fragment>
                {arrListSearch.map((item) => (
                  <div
                    key={item._id}
                    className={classes.modal__locations_searched}
                  >
                    <div className={classes.modal__locations__searched__icons}>
                      <MdMyLocation />
                    </div>
                    <div>
                      <Typography
                        variant="body1"
                        className={classes.modal__locations__searched__name}
                        onClick={() => {
                          // history.push(`/list/${item._id}`);
                          handleCityClick(item?._id, item);
                          handleHideModalSearch();
                        }}
                      >
                        {item?.name} - {item?.province}
                      </Typography>
                    </div>
                  </div>
                ))}
              </Fragment>
            ) : (
              <div>
                <Typography
                  variant="body2"
                  className={classes.modal__text__search}
                >
                  TÌM KIẾM GẦN ĐÂY
                </Typography>
                {locations?.map((item) => (
                  <div
                    key={item._id}
                    className={classes.modal__locations_searched}
                  >
                    <div className={classes.modal__locations__searched__icons}>
                      <MdMyLocation />
                    </div>
                    <div>
                      <Typography
                        variant="body1"
                        className={classes.modal__locations__searched__name}
                        onClick={() => {
                          handleCityClick(item?._id, item);
                          handleHideModalSearch();
                        }}
                      >
                        {item?.name} - {item?.province}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Slide>
      </Modal>
      {/* Menu Bottom */}

      <MenuBottom />
    </Fragment>
  );
};

export default HeaderMobile;
