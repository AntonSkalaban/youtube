import styled from "styled-components";

export const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  position: absolute;
`;

export const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 50px;
  height: 25px;
  border-radius: 100px;
  border: 1px solid #ff8a00;
  position: relative;
  transition: background-color 0.2s;
`;

export const SwitchButton = styled.span`
  content: "";
  position: absolute;
  top: -1px;
  left: 0px;
  width: 25px;
  height: 25px;
  border-radius: 45px;
  border: 1px solid #ff8a00;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  ${SwitchLabel}:active & {
    width: 45px;
  }
`;
