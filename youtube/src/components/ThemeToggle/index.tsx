import { useSelector } from "react-redux";
import { darkTheme, lightTheme, ThemeEnum } from "components/styled/Theme";
import { getThemeType } from "store/slice";
import { useActions } from "utils/hooks";
import { SwitchButton, SwitchInput, SwitchLabel } from "./styled";

export const ThemeToggle: React.FC = () => {
  const themeType = useSelector(getThemeType);
  const { setTheme } = useActions();

  const handleChange = () => {
    const theme = themeType === ThemeEnum.light ? darkTheme : lightTheme;
    setTheme(theme);
    localStorage.setItem("themeType", theme.type);
  };

  return (
    <>
      <SwitchInput
        id={"theme-toggle"}
        data-testid={"theme-toggle"}
        type="checkbox"
        checked={themeType === ThemeEnum.light}
        onChange={handleChange}
      />
      <SwitchLabel htmlFor={"theme-toggle"}>
        <SwitchButton />
      </SwitchLabel>
    </>
  );
};
