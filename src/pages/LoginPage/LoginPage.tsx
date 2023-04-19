import { useAuth } from 'Providers/AuthProvider'
import cls from './LoginPage.module.scss'
import { Input } from 'shared/UI/Input/Input'
import Button from 'shared/UI/Button/Button'


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

      <Button className={cls.loginBtn} onClick={logIn}> login </Button>

    </div>
  )
}

export default LoginPage
