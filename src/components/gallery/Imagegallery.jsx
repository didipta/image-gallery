import React, { useEffect, useState } from "react";
import Sortables from "./Sortable";
import { data } from "@/utils/data";
import { useImageuploade } from "@/Hook/useImageupload";

const Imagegallery = () => {
  const [images, setImages] = useState(data);
  const [clicked, setClicked] = useState([]);
  const { handleImage, image } = useImageuploade();

  //Checkbox Functionality
  const handleClick = (id) => {
    if (clicked.includes(id)) {
      setClicked(clicked.filter((item) => item !== id));
    } else {
      setClicked([...clicked, id]);
    }
  };

  //Delete Image Functionality
  const handleDelete = () => {
    setImages(images.filter((item) => !clicked.includes(item.id)));
    setClicked([]);
  };

  useEffect(() => {
    if (image) {
      setImages([
        ...images,
        {
          id: images.length + 1,
          image: image,
          is_new: true,
        },
      ]);
    }
  }, [image]);
  console.log(images);

  return (
    <div className="w-full">
      <div className="w-full lg:w-9/12 m-auto shadow-lg p-5 bg-white">
        <div className=" border-b-2">
          {clicked.length > 0 ? (
            <div className="flex justify-between items-center mb-3">
              <h1 className="text-xl font-bold">
                <input
                  type="checkbox"
                  className="w-4 h-4 mx-2"
                  defaultChecked={clicked.length !== 0 ? true : false}
                />
                {clicked.length} Selected Images
              </h1>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
                onClick={handleDelete}
              >
                Delete Files
              </button>
            </div>
          ) : (
            <h1 className="text-xl font-bold mb-5">Image Gallery</h1>
          )}
        </div>
        <Sortables
          images={images}
          handleClick={handleClick}
          clicked={clicked}
          setImages={setImages}
          handleaddImage={handleImage}
        />
      </div>
    </div>
  );
};

export default Imagegallery;
