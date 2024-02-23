import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleThem } from "store/slice/ThemeSlice";
import { RootState } from "store/index";
import { ThemeEnum } from "components/styled/Theme";
import { SwitchInput, SwitchLabel, SwitchButton, ToggleContainer } from "./styled";

export const ThemeToggle: React.FC = () => {
  const dispath = useDispatch();
  const themeType = useSelector((state: RootState) => state.theme.theme.type);
  return (
    <ToggleContainer>
      <SwitchInput
        id={"theme-toggle"}
        type="checkbox"
        checked={themeType === ThemeEnum.light}
        onChange={() => dispath(toggleThem())}
      />
      <SwitchLabel className="switch-label" htmlFor={"theme-toggle"}>
        <SwitchButton className="switch-button" />
      </SwitchLabel>
    </ToggleContainer>
  );
};
