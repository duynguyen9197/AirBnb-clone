import React from "react";
import styled from "styled-components";
import { Layout, Menu } from "antd";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "antd/dist/antd.css";
import "./../styles/index.css";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import UserManagerment from "../modules/UserManagerment/page/UserManagerment";
import LogoSvg from "../components/LogoSvg";
// const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const AdminHeader = styled(Header)`
  background: ${({ theme }) => theme.palette.background.default};
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: start;
  align-item: center;
`;
const SiderLink = styled(NavLink)`
  &&& {
    // background: red;
  }
`;
const MenuItem = styled(Menu.Item)`
  & span {
    color: ${({ theme }) => theme.palette.text.secondary};
    font-weight: 700;
  }
  &:hover span,
  &:hover svg,
  &&.ant-menu-item-selected,
  &&.ant-menu-item-selected span {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 700;
  }
  &&.ant-menu-item-selected {
    background: ${({ theme }) => theme.palette.action.selected};
  }
  &&::after {
    border-right: 3px solid ${({ theme }) => theme.palette.primaryBtn.main};
  }
`;

export default function AdminLayout() {
  return (
    <>
      <Layout>
        <AdminHeader>
          <LogoSvg
            color="primaryBtn"
            viewBox="0 0 102 35"
            style={{
              height: "auto",
              width: "150px",
            }}
          />
        </AdminHeader>
        <Layout>
          <Sider width={250} className="site-layout-background">
            <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
              <MenuItem icon={<UserOutlined />} key="1">
                <SiderLink to="/admin/user">
                  <Typography variant="button">USER Management</Typography>
                </SiderLink>
              </MenuItem>
              <MenuItem icon={<LocationOnOutlinedIcon />} key="2">
                <SiderLink to="/admin/user">
                  <Typography variant="button">Location</Typography>
                </SiderLink>
              </MenuItem>
              <MenuItem icon={<HomeOutlined />} key="3">
                <SiderLink to="/admin/user">
                  <Typography variant="button">Room Infomation</Typography>
                </SiderLink>
              </MenuItem>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}>
              <UserManagerment />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
