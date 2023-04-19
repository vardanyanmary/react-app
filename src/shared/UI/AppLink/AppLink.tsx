import { Link } from "react-router-dom";
import cls from "./AppLink.module.scss";

interface AppLinkProps {
  to: string;
  children: React.ReactNode;
}

export const AppLink = ({ to, children }: AppLinkProps) => {
  return (
    <span className={cls.AppLink}>
      <Link to={to}> {children} </Link>
    </span>
  );
};
