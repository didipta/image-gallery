import Image from "next/image";
import React, { useRef, useEffect } from "react";
import Sortable from "sortablejs";

const Sortables = ({ images, handleClick, clicked, setImages }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    const sortable = new Sortable(gridRef.current, {
      animation: 150,
    });

   
  }, []);
  return (
    <div
      ref={gridRef}
      className=" grid md:grid-cols-5 grid-cols-2 justify-between items-center gap-3 m-5"
    >
      {images.map((item, index) => (
        <>
          <div
            key={index}
            className=" rounded-lg border-2 text-center first:col-span-2 first:row-span-2 first:h-full group relative bg-slate-400 overflow-hidden"
            data-id={index}
          >
            <Image
              src={`/asset/images/${item?.image}`}
              width={500}
              height={500}
              alt=""
              className="object-cover bg-white"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
              <input
                type="checkbox"
                class="opacity-0 absolute top-3 left-3 group-hover:opacity-100 z-50 p-5 w-5 h-5"
                onClick={() => handleClick(item?.id)}
                checked={clicked.includes(item?.id)}
              />
            </div>
            {clicked.includes(item?.id) && (
              <input
                type="checkbox"
                defaultChecked
                className="absolute top-3 left-3 z-0 p-5 w-5 h-5"
              />
            )}
          </div>
        </>
      ))}
      <div className=" rounded-lg border-dashed border-2 bo text-center overflow-hidden">
        {" "}
        <Image
          src={`/asset/images/image12.webp`}
          width={500}
          height={500}
          alt=""
          className="object-cover bg-white"
        />
      </div>
    </div>
  );
};

export default Sortables;
