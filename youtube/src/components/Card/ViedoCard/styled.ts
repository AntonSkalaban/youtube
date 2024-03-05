import styled from "styled-components";
import { Title3, Text } from "components/styled/StyledComponents";
import { textOverflow } from "components/styled";

export const CardContainer = styled.div`
  height: 283px;
  background-color: transparent;
  cursor: pointer;

  @media ${({ theme }) => theme.media.extraLarge} {
    height: auto;
  }
`;

export const CardImgContainer = styled.div`
  width: 100%;
  height: 186px;
  overflow: hidden;
  position: relative;

  @media ${({ theme }) => theme.media.large} {
    height: 294px;
  }

  @media ${({ theme }) => theme.media.medium} {
    height: 230px;
  }

  @media ${({ theme }) => theme.media.small} {
    height: 160px;
  }

  @media ${({ theme }) => theme.media.extasmall} {
    height: 220px;
  }

  @media ${({ theme }) => theme.media.xxs} {
    height: 150px;
  }

  @media (max-width: 300px) {
    height: 129px;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:before {
    content: "";
    background-image: url("https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg");
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const CardDescription = styled.div`
  position: relative;
  padding-top: 25px;
  padding-left: 48px;

  @media ${({ theme }) => theme.media.extraLarge} {
    padding-top: 20px;
  }

  @media ${({ theme }) => theme.media.small} {
    padding-top: 12px;
  }
`;

export const CardAvatarContainer = styled.div`
  width: 36px;
  height: 36px;
  position: absolute;
  top: 12px;
  left: 0;
  border-radius: 50%;
`;

export const CardTitle = styled(Title3)`
  ${textOverflow}
  margin-bottom: 5px;
`;

export const CardText = styled(Text)`
  ${textOverflow}
`;
