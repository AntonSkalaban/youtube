import { useMemo } from "react";
import { videoAPI } from "store/api";
import { getPossibleNames } from "utils/helpers/";
import { useDebounce } from "./index";

export const useElasticSearch = (value: string) => {
  const debouncedValue = useDebounce(value, 500);

  const { data, isFetching } = videoAPI.useGetVideosTitlesQuery(debouncedValue);

  const possibleNames = useMemo(
    () =>
      debouncedValue
        ? Array.from(new Set(getPossibleNames(data, debouncedValue))).splice(0, 10)
        : [],
    [data, debouncedValue]
  );

  return { possibleNames, isFetching };
};
