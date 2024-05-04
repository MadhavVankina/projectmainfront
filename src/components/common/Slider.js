import React, { useRef, useState, useEffect, memo } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const Slider = memo(({ slidePerView = 4, aspectRatio = "16/10" }) => {
  const sliderRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(true);
  const [showRightButton, setShowRightButton] = useState(true);
  const [steps, setSteps] = useState(0);
  const num = 13 - slidePerView;
  const [movesLeft, setMovesLeft] = useState(0);
  const [movesRight, setMovesRight] = useState(num);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [hoveredInfo, setHoveredInfo] = useState(-1);
  const [activeInfo, setActiveInfo] = useState(-1);

  const width = 90 / slidePerView;

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

  const handleHoverInfo = (index) => {
    const timeout = setTimeout(() => {
      setActiveInfo(index);
    }, 700);

    return () => {
      clearTimeout(timeout);
    };
  };

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
    handleHoverInfo(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
    setActiveInfo(-1);
  };

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setActiveIndex(hoveredIndex);
    }, 700);

    return () => {
      clearTimeout(timeout1);
    };
  }, [hoveredIndex]);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setActiveInfo(activeIndex);
    }, 700);

    return () => {
      clearTimeout(timeout1);
    };
  }, [activeIndex]);

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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((_, index) => (
          <div
            key={index}
            style={{ width: `${width}%`, aspectRatio }}
            className={`${index === 0 ? "ml-[5%]" : ""} ${
              index === 12 ? "mr-[5%]" : ""
            } ${
              activeIndex === index ? "z-50" : ""
            } px-[0.2%] flex-shrink-0 text-white transition-all duration-200 ease-out hover:ease-in-out hover:transition-all hover:delay-700 hover:duration-300`}
          >
            <div
              onMouseOver={() => {
                handleMouseOver(index);
              }}
              onMouseLeave={handleMouseLeave}
              className={`
              relative cursor-pointer dark:bg-primary-dark h-full w-full rounded-[4px] bg-primary-light
             `}
            >
              <div
                style={{ aspectRatio }}
                className={`
                  absolute top-0 ease-out duration-200 transition-all w-full h-full bg-primary-light dark:bg-primary-dark rounded-[5px] translate-x-[0%] group 
                  ${index === movesLeft ? "hover:translate-x-[20%] hover:delay-700" : ""}
                  ${index === movesLeft + slidePerView - 1 ? "hover:-translate-x-[20%] hover:delay-700" : ""}
                  ${index === hoveredIndex ? "transform hover:-translate-y-1/2 hover:delay-700 hover:shadow-md hover:shadow-black opacity-100 hover:scale-[140%] ease-in transition-all duration-300" : ""}
                `}
              >
                <>
                  <div
                    style={{ aspectRatio }}
                    className="w-full rounded-t-[5px] transition-all duration-300"
                  ></div>

                  <div
                    className={`opacity-0 transition-all ease-out bg-zinc-900 rounded-b-[5px] duration-200
                     ${
                       index === hoveredIndex
                         ? "opacity-100 ease-in-out transition-all duration-300 group-hover:delay-700 group-hover:shadow-md group-hover:shadow-black"
                         : ""
                     }`}
                  >
                    {index === hoveredIndex && (
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
                </>
              </div>
            </div>
          </div>
          // <Card
          //   activeIndex={activeIndex}
          //   width={width}
          //   aspectRatio={aspectRatio}
          //   index={index}
          //   length={12}
          //   movesLeft={movesLeft}
          //   slidePerView={slidePerView}
          // />
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

const Card = ({
  activeIndex,
  width,
  aspectRatio,
  index,
  length,
  movesLeft,
  slidePerView,
}) => {
  return (
    <div
      key={index}
      style={{ width: `${width}%`, aspectRatio }}
      className={`${index === 0 ? "ml-[5%]" : ""} ${
        index === length ? "mr-[5%]" : ""
      } ${
        activeIndex === index ? "z-50" : ""
      } px-[0.4%] flex-shrink-0 text-white text-4xl hover:scale-[140%] transition-all duration-200 hover:transition-all hover:delay-700 hover:duration-300 group relative ${index === movesLeft ? "hover:translate-x-[19.5%]" : ""} ${index === movesLeft + slidePerView - 1 ? "hover:-translate-x-[19.5%]" : ""}`}
    >
      <div
        className={`dark:bg-primary-dark h-full w-full rounded-[4px] transition-all duration-200 bg-primary-light hover:bg-accent-dark hover:shadow-md hover:shadow-black dark:hover:shadow-black hover:transition-all hover:delay-700 hover:duration-300 relative`}
      >
        <div
          className={`absolute top-full group-hover:h-52 transition-all delay-700 w-full bg-black`}
        ></div>
      </div>
    </div>
  );
};
