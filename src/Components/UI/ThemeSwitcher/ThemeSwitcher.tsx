import { useTheme } from "../../../Providers/ThemeProvider";
import Button from "../Button/Button";
import "./ThemeSwitcher.scss";

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <span className="ThemeSwitcher">
      <Button type="secondary" onClick={toggleTheme}>
        Switch Mode
      </Button>
    </span>
  );
};
