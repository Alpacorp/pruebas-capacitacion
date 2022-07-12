import { useState } from "react";
import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const imgs = await getGifs(category);
    console.log("imgs", imgs);
    setImages(imgs);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      {images.map((id, title) => (
        <li key={id}>{title}</li>
      ))}
    </>
  );
};

export default GifGrid;
