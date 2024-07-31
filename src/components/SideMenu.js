import React from "react";

import Logo from "../components/Logo";
import MenuLinks from "../components/MenuLinks";
import Search from "../components/Search";

function SideMenu() {
  return (
    <aside className="side-bar open">
      <Logo />
      <MenuLinks />
      <Search />
    </aside>
  );
}

export default SideMenu;
