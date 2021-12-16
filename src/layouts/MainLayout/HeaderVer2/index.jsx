import {
  AppBar,
  Avatar,
  Badge,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  useMediaQuery
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LanguageIcon from "@material-ui/icons/Language";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import SearchIcon from "@material-ui/icons/Search";
import clsx from "clsx";
import queryString from "query-string";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useHistory,
  useLocation, useParams, useRouteMatch
} from "react-router";
import airbnbIcon from "../../../assets/img/airbnblogo.png";
import airbnbRedIcon from "../../../assets/img/airbnbRedIcon.png";
import { USERID } from "../../../constants/config";
import { createAction } from "../../../store/action/createAction/createAction";
import { getLocation } from "../../../store/action/LocationAction";
import {
  LOG_OUT,
  SHOW_MODAL_SIGNIN,
  SHOW_MODAL_SIGNUP
} from "../../../store/types/AuthType";
import SearchBarVer2 from "./SearchBarVer2";
import useStyles from "./style";

const HeaderVer2 = () => {
  const isUserId = localStorage.getItem(USERID);
  const { infoUser } = useSelector((state) => state.AuthReducer);
  const locationDetail = useSelector((state) => state.LocationReducer.location);

  const locationParam = useParams();
  const locationId = locationParam.locationId;

  const fetchLocation = (locationId) => {
    dispatch(getLocation(locationId));
  };

  useEffect(() => {
    fetchLocation(locationId);
  }, [locationId]);

  // query params
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _location: params._location,
      _checkIn: params._checkIn,
      _checkOut: params._checkOut,
      _adult: Number.parseInt(params._adult),
      _children: Number.parseInt(params._children),
      _toddler: Number.parseInt(params._toddler),
    };
  }, [location.search]);

  // Path
  const pathName = useRouteMatch();
  const homePagePath = pathName.path === "/";
  const listPagePath = pathName.path === "/list/:locationId";
  const detailPagePath = pathName.path === "/detail/:roomId";
  const payPagePath = pathName.path === "/pay/:roomId";
  const profilePagePath = pathName.path === "/profile/:personId";

  const dispatch = useDispatch();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));
  const history = useHistory();

  // Menu function
  const [openMenu, setOpenMenu] = useState(false);
  const anchorRef = React.useRef(null);
  const handleToggleMenu = () => {
    setOpenMenu((state) => !state);
  };
  const handleCloseMenu = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenMenu(false);
  };

  // Authentication
  const ShowModalSignUp = () => {
    setOpenMenu(false);
    dispatch(createAction(SHOW_MODAL_SIGNUP));
  };
  const ShowModalSignIn = () => {
    setOpenMenu(false);
    dispatch(createAction(SHOW_MODAL_SIGNIN));
  };

  // Scroll Effect
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  // Display SearchBar
  const [displaySearchBar, setDisplaySearchBar] = useState(true);
  useEffect(() => {
    if (homePagePath) {
      if (scroll) {
        setDisplaySearchBar(false);
      } else {
        setDisplaySearchBar(true);
      }
    }

    if (listPagePath || detailPagePath) {
      setDisplaySearchBar(false);
    }

  }, [scroll, homePagePath, listPagePath, detailPagePath]);

  // ClickAwayListener
  const handleClickAwayListener = () => {
    if (homePagePath) {
      if (!scroll) return;
      setDisplaySearchBar(false);
    }
    if (listPagePath || detailPagePath) {
      setDisplaySearchBar(false);
    }
  };

  // Change page route
  const handleProfile = (userId) => {
    history.push(`/profile/${userId}`);
    setOpenMenu(false);
  };

  const handleLogout = () => {
    setOpenMenu(false);
    localStorage.removeItem(USERID);
    history.push("/");
    dispatch(createAction(LOG_OUT));
  };

  const classes = useStyles({
    homePagePath,
    scroll,
    displaySearchBar,
    listPagePath,
  });
  return (
    <div className={classes.root}>
      <ClickAwayListener onClickAway={handleClickAwayListener}>
        <AppBar
          elevation={0}
          className={clsx(
            classes.appBar,
            { [classes.appBarFixed]: homePagePath },
            { [classes.appBarFixedList]: listPagePath },
            { [classes.appBarStaticDetail]: detailPagePath },
            { [classes.appBarStaticPay]: payPagePath || profilePagePath }
          )}
        >
          <div className={classes.wrapper}>
            {/* Icons Image */}
            <div className={classes.imageIcon}>
              <a href="/">
                <img
                  src={isDesktop ? airbnbIcon : airbnbRedIcon}
                  alt="icon"
                  className={classes.imageIcon__img}
                />
              </a>
            </div>

            {/* List navigation */}
            <div className={classes.navigation}>
              {homePagePath && (
                <Fragment>
                  {scroll && !displaySearchBar ? (
                    <div
                      className={classes.navigation__search}
                      onClick={() =>
                        setDisplaySearchBar((prevState) => !prevState)
                      }
                    >
                      <button className={classes.navigation__search__btn}>
                        <h3 className={classes.navigation__search__btn__title}>
                          Bắt đầu tìm kiếm
                        </h3>
                        <div className={classes.navigation__search__btn__wrap}>
                          <SearchIcon
                            className={classes.navigation__search__btn__icon}
                          />
                        </div>
                      </button>
                    </div>
                  ) : (
                    <ul className={classes.navigation__list}>
                      <li className={classes.navigation__list__item}>
                        <a href="/">
                          <span>Nơi ở</span>
                        </a>
                      </li>
                      <li className={classes.navigation__list__item}>
                        <a href="/">
                          <span>Trải nghiệm</span>
                        </a>
                      </li>
                      <li className={classes.navigation__list__item}>
                        <a href="/">
                          <span>Trải nghiệm trực tuyến</span>
                        </a>
                      </li>
                    </ul>
                  )}
                </Fragment>
              )}

              {listPagePath && (
                <>
                  {displaySearchBar ? (
                    <ul className={classes.list__navigation__list}>
                      <li className={classes.list__navigation__list__item}>
                        <a href="/">
                          <span>Nơi ở</span>
                        </a>
                      </li>
                      <li className={classes.list__navigation__list__item}>
                        <a href="/">
                          <span>Trải nghiệm</span>
                        </a>
                      </li>
                    </ul>
                  ) : (
                    <div
                      className={clsx(classes.navigation__search, {
                        [classes.list__navigation__search]: listPagePath,
                      })}
                      onClick={() =>
                        setDisplaySearchBar((prevState) => !prevState)
                      }
                    >
                      <div className={classes.list__navbar__search__wrapper}>
                        <button className={classes.list__navbar__button}>
                          {/* <span>{queryParams._location}</span> */}
                          <span>{locationDetail?.province}</span>
                        </button>
                        <span className={classes.list__navbar__dash}></span>
                        <button className={classes.list__navbar__button}>
                          {queryParams._checkIn &&
                            queryParams._checkOut &&
                            queryParams._checkIn !== "Invalid date" &&
                            queryParams._checkOut !== "Invalid date" ? (
                            <span>
                              {queryParams._checkIn} - {queryParams._checkOut}
                            </span>
                          ) : (
                            <span>Thêm ngày</span>
                          )}
                        </button>
                        <span className={classes.list__navbar__dash}></span>
                        <button className={classes.list__navbar__button}>
                          {queryParams._adult > 0 ? (
                            <span>{queryParams._adult} Khách</span>
                          ) : (
                            <span>Thêm khách</span>
                          )}
                          <div
                            className={classes.navigation__search__btn__wrap}
                          >
                            <SearchIcon
                              className={classes.navigation__search__btn__icon}
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}

              {detailPagePath && (
                <>
                  {displaySearchBar ? (
                    <ul className={classes.detail__navigation__list}>
                      <li className={classes.detail__navigation__list__item}>
                        <a href="/">
                          <span>Nơi ở</span>
                        </a>
                      </li>
                      <li className={classes.detail__navigation__list__item}>
                        <a href="/">
                          <span>Trải nghiệm</span>
                        </a>
                      </li>
                    </ul>
                  ) : (
                    <div
                      className={classes.detail__navigation__search}
                      onClick={() =>
                        setDisplaySearchBar((prevState) => !prevState)
                      }
                    >
                      <button className={classes.navigation__search__btn}>
                        <h3 className={classes.navigation__search__btn__title}>
                          Bắt đầu tìm kiếm
                        </h3>
                        <div className={classes.navigation__search__btn__wrap}>
                          <SearchIcon
                            className={classes.navigation__search__btn__icon}
                          />
                        </div>
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Profile section */}
            <div className={classes.profile}>
              <button
                className={clsx(
                  { [classes.profile__btn]: homePagePath },
                  {
                    [classes.list__profile__btn]:
                      listPagePath || detailPagePath || profilePagePath,
                  },
                  { [classes.pay__profile__btn]: payPagePath }
                )}
              >
                Trở thành chủ nhà
              </button>

              <button
                className={clsx(
                  { [classes.profile__language]: homePagePath },
                  {
                    [classes.list__profile__language]:
                      listPagePath || detailPagePath || profilePagePath,
                  },
                  { [classes.pay__profile__language]: payPagePath }
                )}
              >
                <LanguageIcon fontSize="small" />
              </button>

              <button
                className={clsx(classes.profile__menuToggle, {
                  [classes.pay__profile__menuToggle]: payPagePath,
                })}
                ref={anchorRef}
                onClick={handleToggleMenu}
              >
                <MenuOutlinedIcon fontSize="small" />
                {isUserId ? (
                  <Badge badgeContent={1} color="secondary">
                    <Avatar
                      alt="user avatar"
                      src={infoUser.avatar}
                      className={classes.profile__avatar}
                    />
                  </Badge>
                ) : (
                  <AccountCircleIcon
                    fontSize="medium"
                    className={classes.profile__menuToggle__account}
                  />
                )}
              </button>
            </div>
          </div>

          {/* Menu */}
          <Popper
            open={openMenu}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
            className={classes.popper}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper className={classes.menu}>
                  <ClickAwayListener onClickAway={handleCloseMenu}>
                    <MenuList
                      autoFocusItem={openMenu}
                      id="menu-list-grow"
                      className={classes.menuList}
                    >
                      {isUserId ? (
                        <>
                          <MenuItem className={classes.menuItemBold}>
                            Tin nhắn
                          </MenuItem>
                          <MenuItem className={classes.menuItemBold}>
                            <Badge color="secondary" variant="dot">
                              Thông báo
                            </Badge>
                          </MenuItem>
                          <MenuItem className={classes.menuItemBold}>
                            Chuyến đi
                          </MenuItem>
                          <MenuItem className={classes.menuItemBold}>
                            Danh sách yêu thích
                          </MenuItem>
                          <MenuItem
                            className={classes.menuItem__dash}
                          ></MenuItem>
                          {infoUser.type === "ADMIN" && (
                            <MenuItem
                              className={classes.menuItemBold}
                              onClick={() => history.push("/admin")}
                            >
                              Quản trị
                            </MenuItem>
                          )}
                          <MenuItem className={classes.menuItem}>
                            Cho thuê nhà
                          </MenuItem>
                          <MenuItem className={classes.menuItem}>
                            Tổ chức trải nghiệm
                          </MenuItem>
                          <MenuItem
                            onClick={() => handleProfile(isUserId)}
                            className={classes.menuItem}
                          >
                            Tài khoản
                          </MenuItem>
                          <MenuItem
                            className={classes.menuItem__dash}
                          ></MenuItem>
                          <MenuItem className={classes.menuItem}>
                            Trải nghiệm
                          </MenuItem>
                          <MenuItem className={classes.menuItem}>
                            Trợ giúp
                          </MenuItem>
                          <MenuItem
                            className={classes.menuItem}
                            onClick={handleLogout}
                          >
                            Đăng xuất
                          </MenuItem>
                        </>
                      ) : (
                        <>
                          <MenuItem
                            className={classes.menuItem__signUp}
                            onClick={ShowModalSignUp}
                          >
                            Đăng Ký
                          </MenuItem>
                          <MenuItem
                            className={classes.menuItem}
                            onClick={ShowModalSignIn}
                          >
                            Đăng nhập
                          </MenuItem>
                          <MenuItem
                            className={classes.menuItem__dash}
                          ></MenuItem>
                          <MenuItem className={classes.menuItem}>
                            Cho thuê nhà
                          </MenuItem>
                          <MenuItem className={classes.menuItem}>
                            Tổ chức trải nghiệm
                          </MenuItem>
                          <MenuItem className={classes.menuItem}>
                            Trải nghiệm
                          </MenuItem>
                        </>
                      )}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>

          <div
            className={clsx(
              { [classes.searchBar]: homePagePath },
              { [classes.list__searchBar]: listPagePath || detailPagePath },
              { [classes.pay__searchBar]: payPagePath || profilePagePath },
              {
                [classes.hideSearchBar]: !displaySearchBar,
              }
            )}
          >
            <SearchBarVer2
              setDisplaySearchBar={setDisplaySearchBar}
              queryParams={queryParams}
              payPagePath={payPagePath}
            />
          </div>
        </AppBar>
      </ClickAwayListener>
    </div>
  );
};

export default HeaderVer2;
