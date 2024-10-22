import Image from "next/image";
import React from "react";

interface LocationCardProps {
  item: {
    backgroundUrl: string;
    logoUrl: string;
    title: string;
    address: string;
    rating: number;
    reviews: number;
  };
}

const LocationCard: React.FC<LocationCardProps> = ({
  item: { backgroundUrl, logoUrl, title, address, rating, reviews },
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
      className=" rounded-2xl bg-cover bg-no-repeat bg-center px-4 sm:px-6 py-8 flex flex-col items-center justify-center gap-y-4"
    >
      <Image src={logoUrl} alt="location" width={120} height={120} />
      <div>
        <h3 className="text-[1.8rem] lg:text-[2rem] font-bold text-center text-white">
          {title}
        </h3>
        <p className="text-center text-skin-gray text-sm font-normal">
          {address}
        </p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="inline-flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={24}
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M5.83337 20.5H18.3334M3.33337 7.5L4.27631 13.1576C4.54236 14.7539 4.67539 15.5521 5.23488 16.026C5.79437 16.5 6.60354 16.5 8.22188 16.5H15.7532C17.4561 16.5 18.3076 16.5 18.8771 15.9903C19.4467 15.4805 19.5407 14.6343 19.7287 12.9417L20.3334 7.5L15.3334 10.5L11.8334 3.5L8.33337 10.5L3.33337 7.5Z"
              stroke="#EBEAEB"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-base lg:text-lg font-bold text-white">
            {rating}
          </span>
        </div>
        <div className="inline-flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={21}
            height={20}
            viewBox="0 0 21 20"
            fill="none"
          >
            <circle
              cx="2.83337"
              cy="2.5"
              r="1.5"
              fill="#EBEAEB"
              stroke="#EBEAEB"
              strokeWidth={2}
            />
            <circle
              cx="17.8334"
              cy="2.5"
              r="1.5"
              fill="#EBEAEB"
              stroke="#EBEAEB"
              strokeWidth={2}
            />
            <path
              d="M11.8334 2.5C11.8334 3.32843 11.1618 4 10.3334 4C9.50495 4 8.83337 3.32843 8.83337 2.5C8.83337 1.67157 9.50495 1 10.3334 1C11.1618 1 11.8334 1.67157 11.8334 2.5Z"
              fill="#EBEAEB"
              stroke="#EBEAEB"
              strokeWidth={2}
            />
            <path
              d="M11.8334 17.5C11.8334 18.3284 11.1618 19 10.3334 19C9.50495 19 8.83337 18.3284 8.83337 17.5C8.83337 16.6716 9.50495 16 10.3334 16C11.1618 16 11.8334 16.6716 11.8334 17.5Z"
              fill="#EBEAEB"
              stroke="#EBEAEB"
              strokeWidth={2}
            />
            <circle
              cx="17.8334"
              cy="17.5"
              r="1.5"
              fill="#EBEAEB"
              stroke="#EBEAEB"
              strokeWidth={2}
            />
            <circle
              cx="2.83337"
              cy="17.5"
              r="1.5"
              fill="#EBEAEB"
              stroke="#EBEAEB"
              strokeWidth={2}
            />
            <path
              d="M4.33337 10C4.33337 10.8284 3.6618 11.5 2.83337 11.5C2.00495 11.5 1.33337 10.8284 1.33337 10C1.33337 9.17157 2.00495 8.5 2.83337 8.5C3.6618 8.5 4.33337 9.17157 4.33337 10Z"
              fill="#EBEAEB"
              stroke="#EBEAEB"
              strokeWidth={2}
            />
            <path
              d="M11.8334 10C11.8334 10.8284 11.1618 11.5 10.3334 11.5C9.50495 11.5 8.83337 10.8284 8.83337 10C8.83337 9.17157 9.50495 8.5 10.3334 8.5C11.1618 8.5 11.8334 9.17157 11.8334 10Z"
              fill="#EBEAEB"
              stroke="#EBEAEB"
              strokeWidth={2}
            />
            <path
              d="M19.3334 10C19.3334 10.8284 18.6618 11.5 17.8334 11.5C17.0049 11.5 16.3334 10.8284 16.3334 10C16.3334 9.17157 17.0049 8.5 17.8334 8.5C18.6618 8.5 19.3334 9.17157 19.3334 10Z"
              fill="#EBEAEB"
              stroke="#EBEAEB"
              strokeWidth={2}
            />
          </svg>
          <span className="text-base lg:text-lg font-bold text-white">
            {reviews}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
