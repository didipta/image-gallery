import { useState } from "react";

export const useImageuploade = () => {
  const [image, setImage] = useState(null);
  const handleImage = (e) => {
    let file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return {
    handleImage,
    image,
    setImage,
  };
};
