import React, { useRef, useState, useEffect, memo } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import image from "../../assets/images/itachi.jpg";
import ReactPlayer from "react-player";
import VidyardPlayer from "react-player/vidyard";
import VideoPlayer from "./VideoPlayer";
import Card from "./Card";

const Slider = memo(({ slidePerView = 4, aspectRatio = "16/10", data }) => {
  const num = data?.length - slidePerView;
  const width = 90 / slidePerView;

  const sliderRef = useRef(null);

  const [showLeftButton, setShowLeftButton] = useState(true);
  const [showRightButton, setShowRightButton] = useState(true);
  const [steps, setSteps] = useState(0);
  const [movesLeft, setMovesLeft] = useState(0);
  const [movesRight, setMovesRight] = useState(num);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const moves = Math.min(movesLeft, slidePerView);
      setSteps((prev) => prev - moves);
      setMovesLeft((prev) => prev - moves);
      setMovesRight((prev) => prev + moves);
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const moves = Math.min(movesRight, slidePerView);
      setSteps((prev) => prev + moves);
      setMovesRight((prev) => prev - moves);
      setMovesLeft((prev) => prev + moves);
    }
  };

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setShowRightButton(movesRight > 0);
    }, 750);
    const timeout2 = setTimeout(() => {
      setShowLeftButton(movesLeft > 0);
    }, 750);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [movesRight, movesLeft]);

  return (
    <div className="relative group tab-scroll hover:z-10">
      <div
        ref={sliderRef}
        style={{ transform: `translateX(-${width * steps}%)` }}
        className="tab-scroll flex flex-nowrap transition-all duration-1000"
      >
        {data?.map((_, index) => (
          <Card
            width={width}
            index={index}
            image={image}
            slidePerView={slidePerView}
            movesLeft={movesLeft}
            aspectRatio={aspectRatio}
          />
        ))}
      </div>

      {showLeftButton && (
        <div className="opacity-0 group-hover:opacity-100 absolute top-0 bottom-0 left-0 w-[5%] pr-[0.4%]">
          <button
            onClick={scrollLeft}
            className="w-full h-full bg-gradient-to-r from-black/50 dark:from-white/40 to-transparent flex justify-center items-center text-white dark:text-black"
          >
            <FaAngleLeft />
          </button>
        </div>
      )}

      {showRightButton && (
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 absolute top-0 bottom-0 right-0 w-[5%] pl-[0.4%]">
          <button
            onClick={scrollRight}
            className="w-full h-full bg-gradient-to-l from-black/50 dark:from-white/40 to-transparent flex justify-center items-center text-white dark:text-black"
          >
            <FaAngleRight />
          </button>
        </div>
      )}
    </div>
  );
});

export default Slider;
