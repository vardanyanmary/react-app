import { useAuth } from "Providers/AuthProvider";
import { AppLink } from "shared/UI/AppLink/AppLink";
import { AppBar, Button, Stack } from "@mui/material";
import cls from "./Navbar.module.scss";

const Navbar = () => {
  const { userIsAuth, logOut } = useAuth();

  return (
    <div>
      {userIsAuth ? (
        <AppBar position="static">
          <Stack
            direction="row"
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
            bgcolor="var(--inverted-primary-color)"
          >
            <AppLink to="/"> Home </AppLink>
            <AppLink to="/posts"> Posts </AppLink>
            <AppLink to="/todos"> ToDos </AppLink>
            <AppLink to="/comments"> Comments </AppLink>
            <AppLink to="/albums"> Albums </AppLink>
            <AppLink to="/users"> Users </AppLink>
            <AppLink to="/counter">Counter</AppLink>

            <Button onClick={logOut}>Log Out</Button>
          </Stack>
        </AppBar>
      ) : (
        <Stack
          direction="row"
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          bgcolor="var(--inverted-primary-color)"
        >
          <AppLink to="/login"> Login </AppLink>
        </Stack>
      )}
    </div>
  );
};

export default Navbar;
