import React from "react";
import styled from "styled-components";

const MessageBox = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-theme);
  color: var(--red-theme);
  font-size: 1.5rem;
`;

const Message = (props) => {
  return <MessageBox>{props.message}</MessageBox>;
};

export default Message;
