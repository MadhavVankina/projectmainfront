import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import VideoPlayer from "./VideoPlayer";

const Card = ({
  width,
  aspectRatio,
  index,
  image,
  trailer,
  slidePerView,
  movesLeft,
}) => {
  const [hovered, setHovered] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
    setShowInfo(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    const timeout1 = setTimeout(() => {
      setShowInfo(false);
    }, 200);

    return () => {
      clearTimeout(timeout1);
    };
  };

  return (
    <div
      key={index}
      style={{ width: `${width}%`, aspectRatio }}
      className={`
            ${index === 0 ? "ml-[5%]" : ""} 
            ${index === 12 ? "mr-[5%]" : ""} 
            px-[0.2%] flex-shrink-0 text-white
        `}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={`
                relative cursor-pointer h-full w-full rounded-[4px] 
                bg-center bg-cover bg-no-repeat bg-zinc-900 hover:z-50 transition-all delay-500
            `}
      >
        <div
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          className={`
                ${index === movesLeft ? "hover:translate-x-[18%] hover:delay-500" : ""}
                ${index === movesLeft + slidePerView - 1 ? "hover:-translate-x-[18%] hover:delay-500" : ""}
                w-full h-auto absolute top-0 hover:transform hover:top-1/2 hover:-translate-y-1/2 hover:ease-in-out rounded-[4px] overflow-hidden
                hover:scale-[135%] transition-all hover:delay-500 hover:duration-300 duration-200 hover:shadow-lg hover:shadow-black ease-out
            `}
        >
          <div
            style={{ aspectRatio, backgroundImage: `url(${image})` }}
            className="w-full bg-zinc-900 bg-cover bg-center"
          >
            {hovered && <VideoPlayer image={image} trailer={trailer} />}
          </div>

          <div
            className={`${hovered ? "opacity-100 delay-500 duration-0" : ""} opacity-0 duration-200 ease-out transition-all bg-zinc-900`}
          >
            {showInfo && (
              <div className="flex flex-col gap-2 p-4 text-xs">
                <div className="flex gap-2 items-center">
                  <button className="p-2 rounded-4xl bg-white">
                    <FaPlay color="black" />
                  </button>
                  <button className="p-1 rounded-4xl border-[1px] border-white">
                    <IoMdAdd size={18} />
                  </button>
                  <button className="p-[6px] rounded-4xl border-[1px] border-white">
                    <AiOutlineLike size={14} />
                  </button>
                </div>
                <div className="flex gap-2 items-center pt-1">
                  <p className="text-green-600  text-xs">99% Match</p>
                  <p className="text-[10px] opacity-70 border border-white px-2">
                    U/A 13+
                  </p>
                  <p className="text-xs opacity-70">2h 20m</p>
                  <div className="text-[8px] border border-white py-0 px-1 opacity-70">
                    HD
                  </div>
                </div>
                <p className="">Witty . Heartfelt . Dramatic</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
