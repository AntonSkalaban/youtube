import styled from "styled-components";

export const StyledWrapper = styled.div`
  max-width: 1400px;
  height: 100%;
  box-sizing: content-box;
  padding: 0 10px 0 10px;
  margin: 0 auto;

  @media ${({ theme }) => theme.media.large} {
    max-width: 1020px;
  }
  @media ${({ theme }) => theme.media.extasmall} {
    max-width: 480px;
  }
`;
