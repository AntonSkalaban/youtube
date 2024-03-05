import React, { useEffect, useState } from "react";
import { useActions, useClickOutside, useElasticSearch } from "utils/hooks";
import { SearchSuggestionsContainer, SearchSuggestionsLi, SearchSuggestionsText } from "./styled";
import { SkeletonBlock } from "components/styled";

interface SearchSuggestionsProps {
  value: string;
  hanldeSelect: (value: string) => void;
}
export const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({ value, hanldeSelect }) => {
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
        <SearchSuggestionsContainer ref={ref} data-testid="search-Suggestions">
          <ul>
            {possibleNames.map((name) => {
              return (
                <SearchSuggestionsLi key={name}>
                  {isFetching ? (
                    <SkeletonBlock height="16px" />
                  ) : (
                    <SearchSuggestionsText onClick={hanldeClick(name)}>
                      {name}
                    </SearchSuggestionsText>
                  )}
                </SearchSuggestionsLi>
              );
            })}
          </ul>
        </SearchSuggestionsContainer>
      )}
    </>
  );
};
