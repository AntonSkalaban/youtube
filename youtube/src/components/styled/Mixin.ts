import { css } from "styled-components";

export const flex = ({ ai = "center", jc = "flex-start", fd = "row", g = "normal" }) => `
  display: flex;
  flex-direction: ${fd};
  align-items: ${ai};
  justify-content: ${jc};
  gap: ${g};
`;

export const textOverflow = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
