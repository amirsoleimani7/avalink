"use client";

import { useEffect, useState } from "react";
interface imgPropsType {
  url: string;
}

const MyImageComponent = (props: imgPropsType) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imgError, setImgError] = useState<boolean>(false);

  // Effects only run on the client-side after the component has mounted
  useEffect(() => {
    setImageSrc(props.url);
  }, [props.url]);

  // You could also show a placeholder here
  if (!imageSrc) {
    return <div className="w-full h-75 animate-pulse bg-main-bg-1"></div>;
  }

  return (
    <div className="w-full h-75 relative">
      <img
        src={imageSrc}
        onError={() => {
          setImgError(true);
        }}
        alt=""
        className={`object-cover   border-none duration-300 ease-in-out transition-all `}
      />
      {imgError && (
        <div className="w-full h-full absolute inset-0 z-10 flex bg-main-bg-1 font-geist items-center justify-center font-bold">
          ERROR
        </div>
      )}
    </div>
  );
};

export default MyImageComponent;
