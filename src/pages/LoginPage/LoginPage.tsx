import { useAuth } from 'Providers/AuthProvider'
import { Input } from 'shared/UI/Input/Input'
import Button from 'shared/UI/Button/Button'
import cls from './LoginPage.module.scss'


const LoginPage = () => {
  const {
    logIn,
    changeUsername,
    changePassword,
    password,
    username
  } = useAuth()

  return (
    <div className={cls.LoginPage}>
      <Input
        type='text'
        placeholder='Enter username'
        label='Username'
        value={username}
        onChange={changeUsername}
      />
      <Input
        type='password'
        placeholder='Enter password'
        label='password'
        value={password}
        onChange={changePassword}
      />

      <Button className={cls.loginBtn} onClick={logIn}> Log In </Button>

    </div>
  )
}

export default LoginPage
