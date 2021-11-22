import { Container, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LogoSvg from "./../components/LogoSvg";
export default function AuthLayout({ children }) {
  return (
    <>
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ m: "1rem" }}>
          <Box flexDirection="column" display="flex" p="2rem" height="95vh">
            <LogoSvg
              color="primaryBtn"
              viewBox="0 0 102 35"
              style={{ height: "auto", width: "150px", margin: "0 auto" }}
            />
            {children}
          </Box>
        </Paper>
      </Container>
    </>
  );
}
