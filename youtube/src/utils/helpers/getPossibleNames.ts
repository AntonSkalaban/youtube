import { Video } from "types";
import { isStringStartsWith } from "./isStringStartsWith";

export const getPossibleNames = (viedos: Video[] | undefined, substr: string) => {
  return (
    viedos?.reduce((acc, { snippet: { title, channelTitle } }) => {
      if (isStringStartsWith(title, substr)) acc.push(title);
      if (isStringStartsWith(channelTitle, substr)) acc.push(channelTitle);
      return acc;
    }, [] as string[]) || []
  );
};
