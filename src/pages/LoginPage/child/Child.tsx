import cls from './LoginPage.module.scss'
import { useAuth } from 'Providers/AuthProvider'
import { AppLink } from 'shared/UI/AppLink/AppLink'
import { Input } from 'shared/UI/Input/Input'


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
        placeholder='enter username'
        label='Username'
        value={username}
        onChange={changeUsername}
      />
      <Input
        type='password'
        placeholder='enter password'
        label='password'
        value={password}
        onChange={changePassword}
      />
      <button className={cls.loginBtn} onClick={logIn}> login </button>
    </div>
  )
}

export default LoginPage