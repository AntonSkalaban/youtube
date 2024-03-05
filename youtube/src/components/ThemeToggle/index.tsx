import { useSelector } from "react-redux";
import { getThemeType } from "store/slice";
import { ThemeEnum, darkTheme, lightTheme } from "components/styled/Theme";
import { SwitchInput, SwitchLabel, SwitchButton } from "./styled";
import { useActions } from "utils/hooks";

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
