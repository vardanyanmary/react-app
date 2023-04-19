import { useTheme } from "Providers/ThemeProvider";
import Button from "../Button/Button";
import cls from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <span className={cls.ThemeSwitcher}>
      <Button type="secondary" onClick={toggleTheme}>
        Switch Mode
      </Button>
    </span>
  );
};
