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
        return (
          <div
            onClick={() => router.push(drawer.page)}
            className="hover:opacity-75 cursor-pointer border-solid border-2 border-[#F4F7FA] rounded-[16px] px-[20px] pt-[2px] pb-[4px] flex gap-2 w-fit"
          >
            <p className="text-[16px] text-[#515154] font-[700] w-[150px]">{drawer.title}</p>
            <img src="/assets/drawer/row_rigth.svg" alt="row"/>
          </div>
        );
      })}
    </>
  );
};

export default Drawer;
