import React, { Fragment } from "react";
import { Route } from "react-router";
import Footer from "./Footer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import HeaderMobile from "./HeaderMobile";
import HeaderVer2 from "./HeaderVer2";

const MainLayout = (props) => {
  const { Component, redirectPath, ...restProps } = props;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            {isDesktop ? (
              <HeaderVer2  {...propsRoute} />
            ) : (
              <HeaderMobile {...propsRoute} />
            )}
            <Component {...propsRoute} />
            <Footer {...propsRoute} />
          </Fragment>
        );
      }}
    ></Route>
  );
};

export default MainLayout;
