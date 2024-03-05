import styled from "styled-components";
import { flex } from "components/styled";

export const ContentContainer = styled.section`
  width: 100%;
  min-height: 60vh;

  ${flex({ fd: "column", jc: "center" })}

  padding-top: 28px;

  @media ${({ theme }) => theme.media.small} {
    padding-top: 50px;
  }
`;
