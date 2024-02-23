import styled from "styled-components";
import { Title3, Text } from "components/styled/StyledComponents";

export const CardContainer = styled.div`
  height: 283px;
`;

export const CardImgContainer = styled.div`
  width: 100%;
  height: 186px;
`;

export const CardDescription = styled.div`
  position: relative;
  height: 84px;
  padding-top: 25px;
  padding-left: 48px;
`;

export const CardAvatarContainer = styled.div`
  width: 36px;
  height: 36px;
  position: absolute;
  top: 12px;
  left: 0;
  border-radius: 50%;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardTitle = styled(Title3)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
`;

export const CardText = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
