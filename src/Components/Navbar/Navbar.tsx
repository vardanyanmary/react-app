import { useAuth } from "../../Providers/AuthProvider";
import AppLink from "../UI/AppLink/AppLink";
import Button from "../UI/Button/Button";
import "./Navbar.scss";

const Navbar = () => {
  const { userIsAuth, logOut } = useAuth();

  return (
    <div className="Navbar">
      {userIsAuth ? (
        <>
          <span className="links" >
            <AppLink to="/"> Home </AppLink>
            <AppLink to="/posts"> Posts </AppLink>
            <AppLink to="/todos"> ToDos </AppLink>
            <AppLink to="/comments"> Comments </AppLink>
          </span>
        </>
      ) : (
        <>
          <span className="links">
              <AppLink to='/login'> Login </AppLink>
          </span>
        </>
      )}

      <Button onClick={logOut} type='primary'> Log Out </Button>
    </div>
  );
};

export default Navbar;
