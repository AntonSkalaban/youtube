import styled from "styled-components";

export const StyledCardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(260px, 332px));
  column-gap: 20px;
  row-gap: 30px;

  justify-content: center;

  margin: 0 auto;
  padding-bottom: 38px;

  @media ${({ theme }) => theme.media.large} {
    grid-template-columns: repeat(2, minmax(260px, 500px));
  }

  @media ${({ theme }) => theme.media.extasmall} {
    grid-template-columns: repeat(1, 100%);
  }
`;
