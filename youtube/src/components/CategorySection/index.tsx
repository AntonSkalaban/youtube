import { useSelector } from "react-redux";
import { Wrapper } from "components/Wrapper";
import { getSearchParams } from "store/slice";
import { categoryes } from "constants/index";
import { useActions } from "utils/hooks";
import { CategoryButton, CategoryButtonsContainer, CategoryContainer } from "./styled";

export const CategorySection: React.FC = () => {
  const category = useSelector(getSearchParams).category;
  const { changeCategory } = useActions();

  const hanldeClick = (category: string) => () => {
    changeCategory(category === "All" ? "" : category);
  };

  return (
    <CategoryContainer>
      <Wrapper>
        <CategoryButtonsContainer>
          {categoryes.map(({ name, value }) => {
            return (
              <CategoryButton
                data-testid={name}
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
