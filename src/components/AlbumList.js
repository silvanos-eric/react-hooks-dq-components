import React from "react";
import AlbumCard from "./AlbumCard";
import { albumList } from "../data/albumList";

function AlbumList() {
  return (
    <section className="albums">
      {albumList.map(({ name, image, genre, id }) => (
        <AlbumCard name={name} image={image} genre={genre} key={id} />
      ))}
    </section>
  );
}

export default AlbumList;
