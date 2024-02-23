import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "store/slice/ParamsSlice";
import React from "react";
import { StyledButton, StyledSection, TabsContainer } from "./styled";
import { Wrapper } from "components/Wrapper";
import { RootState } from "store/index";

const categoryes = [
  { name: "all", value: "" },
  { name: "video games", value: "video games" },
  { name: "documentary", value: "documentary" },
  { name: "music", value: "music" },
  { name: "sport", value: "sport" },
];

export const TabsSection: React.FC = () => {
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.params.category);

  const hanldeClick = (category: string) => () => {
    dispatch(changeCategory(category === "all" ? "" : category));
  };

  return (
    <StyledSection>
      <Wrapper>
        <TabsContainer>
          {categoryes.map(({ name, value }) => {
            return (
              <StyledButton $isActive={category === value} onClick={hanldeClick(value)} key={value}>
                {name}
              </StyledButton>
            );
          })}
        </TabsContainer>
      </Wrapper>
    </StyledSection>
  );
};
