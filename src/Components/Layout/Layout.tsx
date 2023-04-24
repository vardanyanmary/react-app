import { FC, ReactNode } from "react";
import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";
import cls from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
        <div className={cls.child}>
            {children}
        </div>
      <Footer />
    </>
  );
};
