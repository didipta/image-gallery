import React, { useState } from "react";
import Sortables from "./Sortable";

const Imagegallery = () => {
  const [images, setImages] = useState([
    "image-1.webp",
    "image-2.webp",
    "image-3.webp",
    "image-4.webp",
    "image-5.webp",
    "image-6.webp",
    "image-7.webp",
    "image-8.webp",
    "image-9.webp",
    "image-10.jpeg",
    "image-11.jpeg",
  ]);
  return (
    <div className="w-full">
      <div className="w-9/12 mx-auto">
        <Sortables images={images} />
      </div>
    </div>
  );
};

export default Imagegallery;
