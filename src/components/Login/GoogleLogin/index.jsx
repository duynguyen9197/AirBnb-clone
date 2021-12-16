import { Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import GoogleLogin from "react-google-login";
import { FcGoogle } from "react-icons/fc";

const LoginWithGoogle = ({ className }) => {
  const responseGoogle = (clicked) => {
    console.log(clicked);
  };
  const errorGoogle = (error) => {
    console.log(error);
  };
  return (
    <Fragment>
      <GoogleLogin
        clientId="576308418117-iqu19cd9bjcm5ucn3snkl3ah9nfjmc22.apps.googleusercontent.com"
        icon={false}
        onSuccess={responseGoogle}
        onFailure={errorGoogle}
        cookiePolicy={"single_host_origin"}
        render={(renderProps) => (
          <button onClick={renderProps.onClick} className={className}>
            <FcGoogle />
            <Typography variant="body2">Tiếp tục với Google</Typography>
            <div></div>
          </button>
        )}
      />
    </Fragment>
  );
};

export default LoginWithGoogle;
