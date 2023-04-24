import { FC, useState, useCallback } from "react";
import { Button, Drawer } from "@mui/material";
import Navbar from "Components/Navbar/Navbar";
import cls from "./Header.module.scss";

const Header: FC = () => {
  const [isOpenDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = useCallback(() => setOpenDrawer((prev) => !prev), []);
  
  return (
    <>
      <header className={cls.Header}>
        <Button onClick={toggleDrawer}> Open Menu </Button>
      </header>
      <Drawer 
        anchor="left" 
        open={isOpenDrawer} 
        onClose={toggleDrawer}
	    >
        <Navbar />
      </Drawer>
    </>
  );
};

export default Header;
