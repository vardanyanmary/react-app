import { useAuth } from "../../Providers/AuthProvider";
import AppLink from "../../shared/UI/AppLink/AppLink";
import Button from "../../shared/UI/Button/Button";
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
            <AppLink to="/albums"> Albums </AppLink>
            <AppLink to="/users"> Users </AppLink>
            <AppLink to='/counter'>Counter</AppLink>
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
