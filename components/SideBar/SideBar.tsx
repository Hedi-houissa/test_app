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
      title: "Attribuer une tâche",
      page: "attribuer-une-tache",
      subNav: null,
    },
  ];
 

  return (
    <Content backgroundColor="blue" margin="0" height="100vh" width="20%">
      <Drawer sideBar={Menus} />
    </Content>
  );
};

export default SideBar;

