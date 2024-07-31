import React from "react";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";
import MainContent from "../components/MainContent";

function App() {
  return (
    <div className="app-container">
      <SideMenu />
      <TopMenu />
      <MainContent />
    </div>
  );
}

export default App;
