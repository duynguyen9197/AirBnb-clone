import React from "react";
import { useDispatch } from "react-redux";
// import { ActionButton } from "./ActionBtn/ActionButton";
import styled from "styled-components";
import deleteAction from "../actions/deleteAction";
import { ActionButton } from "./ActionBtn";
const DeleteBtn = styled(ActionButton)``;
export default function Delete({ icon, lable, id }) {
  const dispatch = useDispatch();
  // const { isLoading } = useSelector((state) => state.userManagermentReducer);
  const handleDelete = () => {
    console.log(id);
    dispatch(deleteAction(id));
  };
  console.log("render");
  return (
    <>
      {/* {isLoading && <p>Loading</p>} */}
      <DeleteBtn onClick={handleDelete} icon={icon}>
        {lable}
      </DeleteBtn>
    </>
  );
}
