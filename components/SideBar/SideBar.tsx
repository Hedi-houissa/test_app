import { NextPage } from "next";
import { useState } from "react";
import Drawer from "@components/Drawer/Drawer";
import { Content } from "@components/Drawer/index.style";

const SideBar: NextPage = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    {
      id: 1,
      icon: "",
      title: "Attribuer une tâche",
      page: "attribuer-une-tache",
      subNav: null,
    },
    {
      id: 2,
      icon: "",
      title: "Attrifdghdfghd gh buer une tâche",
      page: "attribuer-une-tache",
      subNav: null,
    },
  ];
 

  return (<div className="flex flex-row w-full	" >
  
    <div className=" w-[10%] h-screen border-r-2  border-indigo-500 flex flex-col	gap-2 items-center pt-2">
    <Drawer sideBar={Menus} />

    </div>
    <div className=" w-w-[10%] h-screen border-r-2  border-indigo-500 flex flex-col	gap-2 items-center pt-2">
      <Drawer sideBar={Menus} />
      <Drawer sideBar={Menus} />
    </div>
    <div>
      fghndgfhdfg
    </div>
  </div>
  );
};

export default SideBar;

