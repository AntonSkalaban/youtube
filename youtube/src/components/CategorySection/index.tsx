import React from "react";
import { useSelector } from "react-redux";
import { getSearchParams } from "store/slice/ParamsSlice";
import { useActions } from "utils/hooks/useActions";
import { categoryes } from "const/categoryesData";
import { Wrapper } from "components/Wrapper";
import { CategoryContainer, CategoryButtonsContainer, CategoryButton } from "./styled";

export const CategorySection: React.FC = () => {
  const category = useSelector(getSearchParams).category;
  const { changeCategory } = useActions();

  const hanldeClick = (category: string) => () => {
    changeCategory(category === "all" ? "" : category);
  };

  return (
    <CategoryContainer>
      <Wrapper>
        <CategoryButtonsContainer>
          {categoryes.map(({ name, value }) => {
            return (
              <CategoryButton
                $isActive={category === value}
                onClick={hanldeClick(value)}
                key={value}
              >
                {name}
              </CategoryButton>
            );
          })}
        </CategoryButtonsContainer>
      </Wrapper>
    </CategoryContainer>
  );
};
