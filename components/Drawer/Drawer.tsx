import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { DrawerBtn, DrawerContainer, MenuDrawer, SideBar } from "./index.style";
import { drawer } from "./Interface";

const Drawer: NextPage<{ sideBar: drawer[] }> = ({ sideBar }) => {
  console.log("🚀 ~ file: Drawer.tsx ~ line 7 ~ sideBar", sideBar);
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      {sideBar.map((drawer, i) => {
        return <p onClick={() => router.push(drawer.page)}>{drawer.title}</p>;
      })}
    </>
  );
};

export default Drawer;
