import React, { useEffect } from "react";
import { Table, Input } from "antd";
import { DeleteFilled, EditOutlined } from "@ant-design/icons";
import styled from "styled-components";
import userManagermentAction from "../actions/userManagermentAction";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { ON_SEARCH } from "../constant/userManagermentConstant";
import formAction from "../actions/formAction";
import ActionBtn from "../components/ActionBtn";
import updateUserAction from "../actions/updateAction";
import Delete from "../components/Delete";
const { Search } = Input;

const SearchInput = styled(Search)`
  border: 1px black solid;
  border-radius: 4rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  transition: all 0.5s;
  &:focus,
  &:hover {
    // border-color: black;
    box-shadow: ${({ theme }) => theme.shadows[4]};
  }
  & button,
  & button:hover,
  & button:focus {
    background: ${({ theme }) => theme.palette.primaryBtn.main};
    color: ${({ theme }) => theme.palette.primaryBtn.contrastText}!important;
    border-radius: 50% !important;
    z-index: 1;
  }
  && input,
  && button {
    border: none;
    box-shadow: none;
  }
`;
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Gender",
    width: "5%",
    dataIndex: "gender",
    render: (value) => {
      return value ? "M" : "F";
    },
    filters: [
      { text: "Male", value: true },
      { text: "Female", value: false },
    ],
    onFilter: (value, record) => record.gender === value,
  },
  {
    title: "Birthday",
    dataIndex: "birthday",
    sorter: (a, b) =>
      moment().diff(a.birthday, "days") - moment().diff(b.birthday, "days"),
    render: (value) => {
      value = moment(value).format("DD/MM/YYYY");
      return <>{value}</>;
    },
  },
  {
    width: "30%",
    title: "Action",
    key: "action",
    render: (record) => {
      return (
        <>
          <Delete
            icon={<DeleteFilled />}
            lable={"DELETE"}
            id={record._id}></Delete>
          {/* <ActionBtn icon={<UserOutlined />} lable={"DETAILS"}></ActionBtn> */}
          <ActionBtn
            action={updateUserAction}
            values={record}
            icon={<EditOutlined />}></ActionBtn>
        </>
      );
    },
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}
export default function UserManagerment() {
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.userManagermentReducer);
  console.log(userList);
  useEffect(() => {
    dispatch(userManagermentAction());
  }, []);
  const onSearch = (value) => {
    dispatch({ type: ON_SEARCH, payload: value });
  };
  return (
    <>
      <ActionBtn action={formAction} add lable={"ADD USER"} />
      <SearchInput placeholder="Type name or email" onSearch={onSearch} />
      <Table
        columns={columns}
        dataSource={userList.reverse()}
        rowKey={(record) => record._id}
        onChange={onChange}></Table>
    </>
  );
}
