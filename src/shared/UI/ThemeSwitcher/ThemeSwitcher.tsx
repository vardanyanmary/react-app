import { useTheme } from "Providers/ThemeProvider";
import Button from '@mui/material/Button';
import cls from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <span className={cls.ThemeSwitcher}>
      <Button onClick={toggleTheme} variant="text">
        Switch Mode
      </Button>
    </span>
  );
};
