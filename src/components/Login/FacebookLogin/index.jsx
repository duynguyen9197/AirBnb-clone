import { Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { FaFacebook } from "react-icons/fa";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const LoginWithFacebook = ({ className }) => {
  const componentClicked = (clicked) => {
    console.log(clicked);
  };
  const responseFacebook = (res) => {
    console.log(res);
  };
  return (
    <Fragment>
      <FacebookLogin
        appId="1009617396499131"
        // fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
        render={(renderProps) => (
          <button onClick={renderProps.onClick} className={className}>
            <FaFacebook style={{ color: "#1877f2" }} />
            <Typography variant="body2">Tiếp tục với Facebook</Typography>
            <div></div>
          </button>
        )}
      />
    </Fragment>
  );
};

export default LoginWithFacebook;
