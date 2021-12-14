import { Modal, Button } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import UserForm from "./UserForm";
import { UserAddOutlined } from "@ant-design/icons";
const ModalButton = styled(Button)`
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
export const ActionButton = styled(Button)`
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.primaryBtn.main};
    border-color: ${({ theme }) => theme.palette.primaryBtn.main};
  }
`;
export default function ActionBtn({ action, add, icon, lable, values }) {
  // const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <>
      {add && (
        <ModalButton
          onClick={showModal}
          icon={<UserAddOutlined style={{ fontSize: "initial" }} />}>
          {lable}
        </ModalButton>
      )}
      {add || (
        <ActionButton onClick={showModal} icon={icon}>
          {lable}
        </ActionButton>
      )}
      <Modal
        visible={visible}
        title="ADD USER"
        footer={null}
        onCancel={handleCancel}>
        <UserForm
          values={values}
          handleOk={handleOk}
          action={action}></UserForm>
      </Modal>
    </>
  );
}
