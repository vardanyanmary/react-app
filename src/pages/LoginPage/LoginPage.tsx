import { useAuth } from 'Providers/AuthProvider'
import { Input } from 'shared/UI/Input/Input'
import cls from './LoginPage.module.scss'
import { Button } from '@mui/material'


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

      <Button onClick={logIn}> Log In </Button>

    </div>
  )
}

export default LoginPage
