import { Link } from 'react-router-dom'
import './AppLink.scss'

interface AppLinkProps {
    to: string;
    children: React.ReactNode
}

export const AppLink = ({ children, to }: AppLinkProps) => {
    return (
        <span className='AppLink'>
            <Link to={to} >{children}</Link>
        </span>
    )
}