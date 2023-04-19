import { Routes, Route } from "react-router-dom";
import { useAuth } from "./Providers/AuthProvider";
import { useTheme } from "./Providers/ThemeProvider";
import { privateRoutes, publicRoutes} from "./routes/routes";
import { ThemeSwitcher } from "./shared/UI/ThemeSwitcher/ThemeSwitcher";
import Navbar from "./Components/UI/Navbar/Navbar";

function App() {
  const { theme } = useTheme();

  const {userIsAuth} = useAuth();
 
  return (
    <div className={`App ${theme}`}>
      <Navbar/>
      <ThemeSwitcher />
      <Routes>
        {(!userIsAuth ? publicRoutes : privateRoutes).map(({ element, path }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
