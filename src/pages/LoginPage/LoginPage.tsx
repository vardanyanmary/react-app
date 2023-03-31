import Button from "../../Components/UI/Button/Button";
import Input from "../../Components/UI/Input/Input";
import { useAuth } from "../../Providers/AuthProvider";
import './LoginPage.scss'

const LoginPage = () => {
  const { 
    logIn, 
    username, 
    password, 
    changeUsername, 
    changePassword 
} = useAuth();

  return (
    <>
      <div className="LoginPage">
        <Input
          type="text"
          label="Username:"
          placeholder="Enter your username"
          value={username}
          onChange={changeUsername}
        />
        <Input
          type="text"
          label="Password:"
          placeholder="Enter your password"
          value={password}
          onChange={changePassword}
        />

        <Button onClick={logIn} type='primary'> Log In </Button>
      </div>
    </>
  );
};

export default LoginPage;
