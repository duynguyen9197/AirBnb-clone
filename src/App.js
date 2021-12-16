import { ThemeProvider } from "@material-ui/styles";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import ModalSignIn from "./components/Login/ModalSignIn";
//Components
import ModalSignUp from "./components/Login/ModalSignUp";
import { theme, USERID } from "./constants/config";
//Components
import AdminLayout from "./layouts/AdminLayout";
// Layout
import MainLayout from "./layouts/MainLayout";
import AdminLocation from "./pages/AdminLocation";
import AddLocation from "./pages/AdminLocation/AddLocation";
//Location
import EditLocation from "./pages/AdminLocation/EditLocation";
import AdminProfile from "./pages/AdminProfile";
import AdminRating from "./pages/AdminRating";
import AdminRoom from "./pages/AdminRoom";
import AddRoom from "./pages/AdminRoom/AddRoom";
import AdminUser from "./pages/AdminUser";
import AddUser from "./pages/AdminUser/AddUser";
// PageAdmin
//User
import EditUser from "./pages/AdminUser/EditUser";
import Detail from "./pages/Detail";
// Page Home
import Home from "./pages/Home";
import ListRoomVer3 from "./pages/ListRoomVer3";
import Pay from "./pages/Pay";
import Profile from "./pages/Profile";
import { getInfoUserAction } from "./store/action/Auth";




const App = () => {
  const idUser = localStorage.getItem(USERID);
  const dispatch = useDispatch();
  useEffect(() => {
    if (idUser) {
      dispatch(getInfoUserAction(idUser));
    }
  }, [dispatch, idUser]);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ModalSignUp />
        <ModalSignIn />
        <Switch>
          <MainLayout path="/" exact Component={Home} />
          <MainLayout path="/profile/:personId" exact Component={Profile} />
          <MainLayout path="/list/:locationId" exact Component={ListRoomVer3} />
          <MainLayout path="/detail/:roomId" exact Component={Detail} />
          <MainLayout path="/pay/:roomId" exact Component={Pay} />

          {/* Admin User*/}

          <AdminLayout path="/admin/user" exact Component={AdminUser} />
          <AdminLayout
            path="/admin/user/edit/:userId"
            exact
            Component={EditUser}
          />
          <AdminLayout path="/admin/user/add" exact Component={AddUser} />

          <AdminLayout
            path="/admin/locations"
            exact
            Component={AdminLocation}
          />
          <AdminLayout
            path="/admin/locations/edit"
            exact
            Component={EditLocation}
          />
          <AdminLayout
            path="/admin/locations/add"
            exact
            Component={AddLocation}
          />

          <AdminLayout path="/admin/rooms" exact Component={AdminRoom} />
          <AdminLayout path="/admin/rooms/add" exact Component={AddRoom} />
          <AdminLayout
            path="/admin/rooms/ratings"
            exact
            Component={AdminRating}
          />
          <AdminLayout
            path="/admin/rooms/ratings/add"
            exact
            Component={AddRoom}
          />
          <AdminLayout path="/admin" Component={AdminProfile} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
