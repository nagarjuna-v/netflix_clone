import React from "react";
import { FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";

const VideoTitle = ({ title }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-4xl">{title.original_title}</h1>
      <p className="my-4 w-1/4">{title.overview}</p>
      <div className="flex">
        <button className="me-2 p-2 bg-green-700 rounded-lg w-28 h-10 flex justify-center">
        <span className="mt-1 mx-1">
            <FaPlay size={16} />
          </span>Play
        </button>
        <button className="me-2 p-2 bg-yellow-500 w-28 h-10 flex justify-cente rounded-lg">
        <span className="mt-1 mx-1"><GoInfo size={16} /></span> More Info 
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
