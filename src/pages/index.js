import Imagegallery from "@/components/gallery/Imagegallery";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  //Loading Screen Functionality
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen bg-white">
          <Image
            src="/asset/images/loading.gif"
            width={500}
            height={500}
            alt="loading"
            className="object-cover"
          />
        </div>
      ) : (
        <Imagegallery />
      )}
    </>
  );
}
