import React, { useEffect, useState } from "react";
import { useActions, useClickOutside, useElasticSearch } from "utils/hooks";
import { SearchTipsContainer, SearchTipsLi, SearchTipsText } from "./styled";
import { SkeletonBlock } from "components/styled";

interface SearchTips {
  value: string;
  hanldeSelect: (value: string) => void;
}
export const SearchTips: React.FC<SearchTips> = ({ value, hanldeSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { possibleNames, isFetching } = useElasticSearch(value);
  const { changeTitle } = useActions();

  useEffect(() => {
    setIsOpen(!!value);
  }, [value]);

  const ref = useClickOutside(() => setIsOpen(false));

  const hanldeClick = (value: string) => () => {
    changeTitle(value);
    hanldeSelect(value);
  };

  return (
    <>
      {isOpen && (
        <SearchTipsContainer ref={ref}>
          <ul>
            {possibleNames.map((name) => {
              return (
                <SearchTipsLi key={name}>
                  {isFetching ? (
                    <SkeletonBlock height="16px" />
                  ) : (
                    <SearchTipsText onClick={hanldeClick(name)}>{name}</SearchTipsText>
                  )}
                </SearchTipsLi>
              );
            })}
          </ul>
        </SearchTipsContainer>
      )}
    </>
  );
};
