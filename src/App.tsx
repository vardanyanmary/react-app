import { Routes, Route } from "react-router-dom";
import { ThemeSwitcher } from "./Components/UI/ThemeSwitcher/ThemeSwitcher";
import { useTheme } from "./Providers/ThemeProvider";
import { routes } from "./routes/routes";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`App ${theme}`}>
      <ThemeSwitcher />
      <Routes>
        {routes.map(({ element, path }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
