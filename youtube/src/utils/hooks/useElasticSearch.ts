import { useDebounce } from "./index";
import { videoAPI } from "store/api";
import { useMemo } from "react";
import { getPossibleNames } from "utils/helpers/";

export const useElasticSearch = (value: string) => {
  const debouncedValue = useDebounce(value, 500);

  const { data, isFetching } = videoAPI.useGetVideosTitlesQuery(debouncedValue);

  const possibleNames = useMemo(
    () => Array.from(new Set(getPossibleNames(data, debouncedValue))).splice(0, 10),
    [data, debouncedValue]
  );

  return { possibleNames, isFetching };
};
