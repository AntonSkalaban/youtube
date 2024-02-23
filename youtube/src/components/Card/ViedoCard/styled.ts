import { Title2, Text } from "components/UI/styled";
import styled from "styled-components";

export const StyledCard = styled.div`
  height: 283px;
`;

export const StyledCardImgContainer = styled.div`
  width: 100%;
  height: 186px;
`;

export const StyledCardDescription = styled.div`
  position: relative;
  height: 84px;
  padding-top: 25px;
  padding-left: 48px;
`;

export const StyledAvatar = styled.img`
  width: 36px;
  height: 36px;
  position: absolute;
  top: 12px;
  left: 0;
  border-radius: 50%;
`;

export const CardTitle = styled(Title2)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const CardText = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
