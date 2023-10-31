import Image from "next/image";
import React, { useRef, useEffect } from "react";
import Sortable from "sortablejs";

const Sortables = ({ images }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    const sortable = new Sortable(gridRef.current, {
      animation: 150,
    });
  }, []);

  return (
    <div
      ref={gridRef}
      className=" grid grid-cols-5 justify-between items-center gap-3"
    >
      {images.map((image, index) => (
        <div
          key={index}
          className=" border border-spacing-3 text-center first:col-span-2 first:row-span-2 first:h-full group relative"
          data-id={index}
        >
          <Image
            src={`/asset/images/${image}`}
            width={500}
            height={500}
            alt=""
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
            <input
              type="checkbox"
              class="opacity-0 absolute top-3 left-3 group-hover:opacity-100 z-50 p-5 w-5 h-5"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sortables;
