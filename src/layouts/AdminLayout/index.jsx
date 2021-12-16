import { Avatar, Badge, Box, Menu, MenuItem } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Collapse from "@material-ui/core/Collapse";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MuiLink from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ExpandLess, ExpandMore, LocationOn } from "@material-ui/icons";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import EditIcon from "@material-ui/icons/Edit";
import ListIcon from "@material-ui/icons/List";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { TreeView } from "@material-ui/lab";
import clsx from "clsx";
import queryString from "query-string";
import React, { useState } from "react";
import { SiAirbnb } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import {
  Link,
  NavLink,
  Redirect,
  Route,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import airbnbIcon from "../../assets/img/airbnblogo.png";
import ContentTreeItem from "../../components/TreeItem";
import { USERID } from "../../constants/config";
import { createAction } from "../../store/action/createAction/createAction";
import { LOG_OUT } from "../../store/types/AuthType";
import useStyles from "./style";

const AdminLayout = (props) => {
  const { Component, ...restRoute } = props;
  const classes = useStyles({ restRoute: restRoute.path });
  const [openDrawer, setOpenDrawer] = useState(true);
  const [openMenu, setOpenMenu] = useState(null);
  const [openList, setOpenList] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const params = queryString.parse(location.search);
  const { infoUser } = useSelector((state) => state.AuthReducer);

  const adminPage = useRouteMatch("/admin");
  //  Manage User
  const userList = useRouteMatch("/admin/user");
  const editUser = useRouteMatch("/admin/user/edit/:userId");
  const addUser = useRouteMatch("/admin/user/add");

  // Manage Locations
  const locationList = useRouteMatch("/admin/locations");
  const addLocation = useRouteMatch("/admin/locations/add");
  const editLocation = useRouteMatch("/admin/locations/edit");
  // Manage Room
  const roomList = useRouteMatch("/admin/rooms");
  const addRoom = useRouteMatch("/admin/rooms/add");
  const ratingRoom = useRouteMatch("/admin/rooms/ratings");

  const handleListClick = () => {
    setOpenList((state) => !state);
  };

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  const handleOpenMenu = (event) => {
    setOpenMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenu(null);
  };
  const handleLogoutClick = () => {
    setOpenMenu(false);
    localStorage.removeItem(USERID);
    history.push("/");
    dispatch(createAction(LOG_OUT));
  };

  const [expanded, setExpanded] = React.useState({
    user: [],
    location: [],
    room: [],
    ratedRoom: [],
  });
  const [selected, setSelected] = React.useState([]);
  const handleToggleUser = (event, nodeIds) => {
    setExpanded({ ...expanded, user: nodeIds });
  };
  const handleToggleLocation = (event, nodeIds) => {
    setExpanded({ ...expanded, location: nodeIds });
  };

  const handleToggleRoom = (event, nodeIds) => {
    setExpanded({ ...expanded, room: nodeIds });
  };

  const handleToggleRatedRoom = (event, nodeIds) => {
    setExpanded({ ...expanded, ratedRoom: nodeIds });
  };
  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        if (!localStorage.getItem(USERID)) {
          return <Redirect to="/" />;
        }
        return (
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: openDrawer,
              })}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(
                    classes.menuButton,
                    openDrawer && classes.hide
                  )}
                >
                  <MenuIcon />
                </IconButton>

                <div className={classes.admin__header}>
                  {openDrawer ? (
                    <Breadcrumbs>
                      {/* Manage User */}
                      {adminPage && (
                        <MuiLink
                          component={Link}
                          to="/admin"
                          className={classes.textBreadcrumb}
                        >
                          Admin
                        </MuiLink>
                      )}
                      {userList && (
                        <MuiLink
                          component={Link}
                          to="/admin/user"
                          className={classes.textBreadcrumb}
                        >
                          User
                        </MuiLink>
                      )}
                      {addUser && (
                        <MuiLink
                          component={Link}
                          to="/admin/user/add/"
                          className={classes.textBreadcrumb}
                        >
                          Add
                        </MuiLink>
                      )}
                      {editUser && (
                        <MuiLink
                          component={Link}
                          to={`/admin/user/edit/${editUser.params.userId}`}
                          className={classes.textBreadcrumb}
                        >
                          Edit
                        </MuiLink>
                      )}

                      {/* Manage Location */}
                      {locationList && (
                        <MuiLink
                          component={Link}
                          to="/admin/locations"
                          className={classes.textBreadcrumb}
                        >
                          Location
                        </MuiLink>
                      )}
                      {addLocation && (
                        <MuiLink
                          component={Link}
                          to="/admin/locations/add"
                          className={classes.textBreadcrumb}
                        >
                          Add
                        </MuiLink>
                      )}
                      {editLocation && (
                        <MuiLink
                          component={Link}
                          to={{
                            pathname: "/admin/locations/edit",
                            search: queryString.stringify({
                              locationId: params?.locationId,
                            }),
                          }}
                          className={classes.textBreadcrumb}
                        >
                          Edit
                        </MuiLink>
                      )}
                      {/* Manage Room */}

                      {roomList && (
                        <MuiLink
                          component={Link}
                          to={{
                            pathname: "/admin/rooms",
                            search: queryString.stringify({
                              locationId: params?.locationId,
                            }),
                          }}
                          className={classes.textBreadcrumb}
                        >
                          Room
                        </MuiLink>
                      )}
                      {addRoom && (
                        <MuiLink
                          component={Link}
                          to={{
                            pathname: "/admin/rooms/add",
                            search: queryString.stringify({
                              locationId: params?.locationId,
                            }),
                          }}
                          className={classes.textBreadcrumb}
                        >
                          Add
                        </MuiLink>
                      )}

                      {ratingRoom && (
                        <MuiLink
                          component={Link}
                          to={{
                            pathname: "/admin/rooms/ratings",
                            search: queryString.stringify({
                              locationId: params?.locationId,
                              roomId: params?.roomId,
                            }),
                          }}
                          className={classes.textBreadcrumb}
                        >
                          Rating
                        </MuiLink>
                      )}
                    </Breadcrumbs>
                  ) : (
                    <a href="/">
                      <img
                        className={classes.logo}
                        src={airbnbIcon}
                        alt="logo"
                      />
                    </a>
                  )}
                </div>
                <button
                  className={classes.button__chip}
                  onClick={handleOpenMenu}
                >
                  <MenuOutlinedIcon fontSize="small" />

                  <Badge badgeContent={1} color="secondary">
                    <Avatar
                      alt="user avatar"
                      src={infoUser?.avatar}
                      className={classes.avatar}
                    />
                  </Badge>
                </button>

                <Menu
                  id="simple-menu"
                  anchorEl={openMenu}
                  keepMounted
                  open={Boolean(openMenu)}
                  onClose={handleCloseMenu}
                  getContentAnchorEl={null}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  className={classes.menu}
                >
                  <MenuItem
                    className={`${classes.menu__items} ${classes.menu__itemsBold}`}
                    onClick={() => history.push("/")}
                  >
                    Trang chủ
                  </MenuItem>
                  <MenuItem
                    className={`${classes.menu__items} ${classes.menu__itemsBold}`}
                  >
                    <Badge color="secondary" variant="dot">
                      Thông báo
                    </Badge>
                  </MenuItem>
                  <MenuItem
                    className={`${classes.menu__items} ${classes.menu__itemsBold}`}
                  >
                    Chuyến đi
                  </MenuItem>

                  <MenuItem onClick={() => history.push("/admin")}>
                    Tài khoản
                  </MenuItem>

                  <MenuItem onClick={handleLogoutClick}>Đăng xuất</MenuItem>
                </Menu>
              </Toolbar>
            </AppBar>

            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={openDrawer}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.admin__title}>
                <div
                  className={classes.admin__logo}
                  onClick={() => history.push("/admin")}
                >
                  <SiAirbnb />
                  <Typography variant="span">Airbnb Admin</Typography>
                </div>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              {restRoute.path !== "/admin" && (
                <div className={classes.drawerHeader}>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <Avatar
                        alt="Avatar"
                        src={infoUser.avatar}
                        className={classes.large}
                      />
                      <Typography variant="subtitle2">
                        {infoUser.type}
                      </Typography>
                    </Box>
                    <Box marginLeft={2}>
                      <Typography variant="subtitle2">Welcome,</Typography>
                      <Typography variant="subtitle2">
                        {infoUser.name}
                      </Typography>
                    </Box>
                  </Box>
                </div>
              )}
              <Divider />
              <List>
                <ListItem button onClick={handleListClick}>
                  <ListItemText>
                    <Typography variant="h5" color="primary">
                      DashBoard
                    </Typography>
                  </ListItemText>
                  {openList ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openList} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <TreeView
                      className={classes.rootTreeview}
                      expanded={expanded.user}
                      selected={selected}
                      onNodeToggle={handleToggleUser}
                      onNodeSelect={handleSelect}
                    >
                      <ContentTreeItem
                        nodeId="1"
                        labelText={
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            Quản lý thông tin người dùng
                            <Typography>
                              {expanded?.user?.length > 0 ? (
                                <ExpandMore />
                              ) : (
                                <NavigateNextIcon />
                              )}
                            </Typography>
                          </Box>
                        }
                        labelIcon={PeopleOutlineIcon}
                      >
                        <NavLink to="/admin/user">
                          <ContentTreeItem
                            nodeId="2"
                            labelText="Danh sách người dùng"
                            labelIcon={ListIcon}
                            color={
                              restRoute.path === "/admin/user"
                                ? "#1a73e8"
                                : "#999"
                            }
                          />
                        </NavLink>
                        {restRoute.path === "/admin/user/edit/:userId" && (
                          <ContentTreeItem
                            nodeId="3"
                            labelText="Cập nhật người dùng"
                            labelIcon={EditIcon}
                            color={
                              restRoute.path === "/admin/user/edit/:userId"
                                ? "#1a73e8"
                                : "#fff"
                            }
                          />
                        )}
                        <NavLink to="/admin/user/add">
                          <ContentTreeItem
                            nodeId="4"
                            labelText="Thêm người dùng "
                            labelIcon={PersonAddIcon}
                            color={
                              restRoute.path === "/admin/user/add"
                                ? "#1a73e8"
                                : "#999"
                            }
                          />
                        </NavLink>
                      </ContentTreeItem>
                    </TreeView>
                  </List>
                  <List component="div" disablePadding>
                    <TreeView
                      className={classes.rootTreeview}
                      expanded={expanded.location}
                      selected={selected}
                      onNodeToggle={handleToggleLocation}
                      onNodeSelect={handleSelect}
                    >
                      <ContentTreeItem
                        nodeId="5"
                        labelText={
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            Quản lý vị trí
                            <Typography>
                              {expanded?.location?.length > 0 ? (
                                <ExpandMore />
                              ) : (
                                <ExpandLess />
                              )}
                            </Typography>
                          </Box>
                        }
                        labelIcon={LocationOn}
                      >
                        <NavLink to="/admin/locations">
                          <ContentTreeItem
                            nodeId="6"
                            labelText="Danh sách vị trí"
                            labelIcon={ListIcon}
                            color={
                              restRoute.path === "/admin/locations"
                                ? "#1a73e8"
                                : "#999"
                            }
                          />
                        </NavLink>
                        {restRoute.path === "/admin/locations/edit" && (
                          <ContentTreeItem
                            nodeId="7"
                            labelText="Cập nhật vị trí"
                            labelIcon={EditIcon}
                            color={
                              restRoute.path === "/admin/locations/edit"
                                ? "#1a73e8"
                                : "#999"
                            }
                          />
                        )}

                        <NavLink to="/admin/locations/add">
                          <ContentTreeItem
                            nodeId="8"
                            labelText="Thêm vị trí "
                            labelIcon={AddLocationIcon}
                            color={
                              restRoute.path === "/admin/locations/add"
                                ? "#1a73e8"
                                : "#999"
                            }
                          />
                        </NavLink>
                      </ContentTreeItem>
                    </TreeView>
                  </List>

                  {params?.locationId?.length > 0 ||
                  params?.roomId?.length > 0 ? (
                    <List component="div" disablePadding>
                      <TreeView
                        className={classes.rootTreeview}
                        expanded={expanded.room}
                        selected={selected}
                        onNodeToggle={handleToggleRoom}
                        onNodeSelect={handleSelect}
                      >
                        <ContentTreeItem
                          nodeId="9"
                          labelText={
                            <Box
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                            >
                              Quản lý phòng
                              <Typography>
                                {expanded?.room?.length > 0 ? (
                                  <ExpandMore />
                                ) : (
                                  <ExpandLess />
                                )}
                              </Typography>
                            </Box>
                          }
                          labelIcon={LocationOn}
                        >
                          <NavLink
                            to={{
                              pathname: "/admin/rooms",
                              search: queryString.stringify({
                                locationId: params?.locationId,
                              }),
                            }}
                          >
                            <ContentTreeItem
                              nodeId="10"
                              labelText="Danh sách phòng"
                              labelIcon={ListIcon}
                              color={
                                restRoute.path === "/admin/rooms"
                                  ? "#1a73e8"
                                  : "#999"
                              }
                            />
                          </NavLink>

                          <NavLink
                            to={{
                              pathname: "/admin/rooms/add",
                              search: queryString.stringify({
                                locationId: params?.locationId,
                              }),
                            }}
                          >
                            <ContentTreeItem
                              nodeId="11"
                              labelText="Thêm phòng"
                              labelIcon={AddLocationIcon}
                              color={
                                restRoute.path === "/admin/rooms/add"
                                  ? "#1a73e8"
                                  : "#999"
                              }
                            />
                          </NavLink>
                        </ContentTreeItem>
                      </TreeView>
                    </List>
                  ) : null}

                  {params?.roomId?.length > 0 && (
                    <List component="div" disablePadding>
                      <TreeView
                        className={classes.rootTreeview}
                        expanded={expanded.ratedRoom}
                        selected={selected}
                        onNodeToggle={handleToggleRatedRoom}
                        onNodeSelect={handleSelect}
                      >
                        <ContentTreeItem
                          nodeId="12"
                          labelText={
                            <Box
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                            >
                              Quản lý Đánh giá
                              <Typography>
                                {expanded?.rated?.length > 0 ? (
                                  <ExpandMore />
                                ) : (
                                  <ExpandLess />
                                )}
                              </Typography>
                            </Box>
                          }
                          labelIcon={LocationOn}
                        >
                          <NavLink
                            to={{
                              pathname: `/admin/rooms/ratings`,
                              search: queryString.stringify({
                                ...params,
                                roomId: params?.roomId,
                              }),
                            }}
                          >
                            <ContentTreeItem
                              nodeId="13"
                              labelText="Danh sách đánh giá"
                              labelIcon={ListIcon}
                              color={
                                restRoute.path === "/admin/rooms/ratings"
                                  ? "#1a73e8"
                                  : "#999"
                              }
                            />
                          </NavLink>
                        </ContentTreeItem>
                      </TreeView>
                    </List>
                  )}
                </Collapse>
              </List>
              <Divider />
            </Drawer>
            <main
              className={clsx(classes.content, {
                [classes.contentShift]: openDrawer,
              })}
            >
              <div className={classes.drawerHeader} />
              <Component
                {...propsRoute}
                handleToggleUser={handleToggleUser}
                handleToggleRoom={handleToggleRoom}
                handleToggleLocation={handleToggleLocation}
                handleToggleRatedRoom={handleToggleRatedRoom}
              />
            </main>
          </div>
        );
      }}
    />
  );
};

export default AdminLayout;
