import React from "react";
import { useSelector } from "react-redux";
import { getThemeType } from "store/slice";
import { useActions } from "utils/hooks";
import { ThemeEnum } from "components/styled/Theme";
import { SwitchInput, SwitchLabel, SwitchButton } from "./styled";
export const ThemeToggle: React.FC = () => {
  const themeType = useSelector(getThemeType);
  const { toggleThem } = useActions();
  return (
    <>
      <SwitchInput
        id={"theme-toggle"}
        data-testid={"theme-toggle"}
        type="checkbox"
        checked={themeType === ThemeEnum.light}
        onChange={() => toggleThem()}
      />
      <SwitchLabel htmlFor={"theme-toggle"}>
        <SwitchButton />
      </SwitchLabel>
    </>
  );
};
