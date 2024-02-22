import { Button } from "components/UI/styled";
import { styled } from "styled-components";

export const StyledButton = styled(Button)`
  width: 193px;
  height: 53px;
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 15px;
  margin-bottom: 50px;

  font-size: 22px;
  font-weight: 700;
  color: white;
  line-height: 25.78px;
`;
