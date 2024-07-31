import React from "react";

import GenrePicker from "../components/GenrePicker";
import AlbumList from "../components/AlbumList";

function MainContent() {
  return (
    <main>
      <GenrePicker />
      <AlbumList />
    </main>
  );
}

export default MainContent;
