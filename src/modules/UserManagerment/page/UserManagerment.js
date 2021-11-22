import React, { useEffect } from "react";
import { Table, Input, Button } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import styled from "styled-components";
import userManagermentAction from "../actions/userManagermentAction";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
const { Search } = Input;
const AddButton = styled(Button)`
  &,
  &:focus {
    border: 0;
    border-radius: 24px;
    background: ${({ theme }) => theme.palette.primaryBtn.main};
    color: ${({ theme }) => theme.palette.primaryBtn.contrastText};
    font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
    margin-bottom: 1rem;
  }

  &:hover {
    transform: scale(1.1);
    background: ${({ theme }) => theme.palette.primaryBtn.main};
    color: ${({ theme }) => theme.palette.primaryBtn.contrastText};
    border: 0;
  }
`;
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
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Email",
    dataIndex: "email",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Gender",
    dataIndex: "gender",
  },
  {
    title: "Birthday",
    dataIndex: "birthday",
    render: (value) => {
      value = moment(value).format("DD/MM/YYYY");
      return <span>{value}</span>;
    },
  },

  {
    title: "Phone",
    dataIndex: "phone",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}
const onSearch = (value) => console.log(value);
export default function UserManagerment() {
  const dispatch = useDispatch();
  const { userList, isLoading, error } = useSelector(
    (state) => state.userManagermentReducer
  );
  console.log(userList);
  useEffect(() => {
    dispatch(userManagermentAction());
  }, []);
  return (
    <>
      <AddButton icon={<UserAddOutlined style={{ fontSize: "initial" }} />}>
        ADD USER
      </AddButton>
      <SearchInput placeholder="input search text" onSearch={onSearch} />
      <Table
        columns={columns}
        dataSource={userList}
        rowKey={(record) => record._id}
        onChange={onChange}
      />
    </>
  );
}
