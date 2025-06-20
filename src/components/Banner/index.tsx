import React from "react";
import Button from "../../common/Button";

interface BannerProps {
  title: string;
  imageUrl: string;
  altText?: string;
  className?: string;
}

const Banner: React.FC<BannerProps> = ({ altText, className }) => {
  return (
    <div
      className={` w-full   flex flex-col items-center justify-center ${className} `}
    >
      <div className="mt-48 flex flex-col gap-4 mb-8">
        <h1 className=" z-10 text-white text-3xl font-bold text-center leading-relaxed tracking-widest">
          All your Transactions in one place.
        </h1>
        <h3 className="z-10 text-white text-xl font-bold text-center leading-relaxed tracking-widest">
          Stay on Track, Never Miss a Transaction
        </h3>
      </div>
      <div className="flex gap-3 mb-8">
        <Button label="Let’s get started" variant="primary" />
        <Button label="Learn more" variant="outline" />
      </div>
    </div>
  );
};

export default Banner;
