import { Link } from "react-router-dom";

import "./AppLink.scss";

interface AppLinkProps {
  to: string;
  children: React.ReactNode;
}

const AppLink = ({ to, children }: AppLinkProps) => {
  return (
    <span className="AppLink">
      <Link to={to}> {children} </Link>
    </span>
  );
};

export default AppLink;
