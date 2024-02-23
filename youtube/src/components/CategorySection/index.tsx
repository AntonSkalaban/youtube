import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "store/slice/ParamsSlice";
import { RootState } from "store/index";
import { CategoryContainer, CategoryButtonsContainer, CategoryButton } from "./styled";
import { Wrapper } from "components/Wrapper";
import { categoryes } from "const/categoryesData";

export const CategorySection: React.FC = () => {
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.params.category);

  const hanldeClick = (category: string) => () => {
    dispatch(changeCategory(category === "all" ? "" : category));
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
