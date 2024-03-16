import { SyntheticEvent } from "react";

export default function FavIcon({
  location,
  onSelectedClick,
}: {
  location: string;
  onSelectedClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      className={` bg-white-200 rounded-lg flex p-[20px] bk-icon ml-auto ring-black translate-x-4 ${
        location === localStorage.getItem("Fav") //TODO: colouring display from localStorage
          ? `fill-yellow-300`
          : `hover:fill-yellow-300`
      } hover:duration-50  translate-x-24`}
      onClick={onSelectedClick}
    >
      <svg
        className="mr-[19px]"
        height="24"
        width="24"
        viewBox="0 0 24 24"
        role="presentation"
        aria-hidden="true"
      >
        <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path>
      </svg>
    </button>
  );
}
