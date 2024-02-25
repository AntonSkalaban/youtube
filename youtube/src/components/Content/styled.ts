import styled from "styled-components";

export const ContentContainer = styled.section`
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 28px;
  @media ${({ theme }) => theme.media.small} {
    padding-top: 50px;
  }
`;
