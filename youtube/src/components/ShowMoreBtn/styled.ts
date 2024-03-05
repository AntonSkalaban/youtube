import { Button } from "components/styled/StyledComponents";
import { styled } from "styled-components";

export const StyledButton = styled(Button)`
  width: 193px;
  height: 53px;
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 15px;
  margin-bottom: 54px;

  font-size: 22px;
  font-weight: 700;
  color: white;
  line-height: 25.78px;

  @media ${({ theme }) => theme.media.extasmall} {
    width: 100%;
    height: 33px;
    font-size: 16px;
    line-height: 18px;
  }
`;
