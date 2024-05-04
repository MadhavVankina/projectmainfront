import React, { useRef } from "react";
import PrimaryButton from "../formElements/PrimaryButton";

const Carousel = () => {
  const sliderRef = useRef();

  return (
    <>
      <div
        id="container"
        className="tab-scroll flex flex-nowrap overflow-visible touch-pan-x"
      >
        {[1, 1, 1, 1, 1].map((_) => (
          <>
            <div
              style={{ zIndex: 90 }}
              className="bg-green-500 hover:scale-125 hover:bg-black transition-all delay-300 duration-300"
            ></div>
            {/* <div className="bg-pink-500 hover:scale-125 transition-all delay-300 duration-300"></div> */}
          </>
        ))}
      </div>
      <PrimaryButton label={"Left"} />
      <PrimaryButton label={"Right"} />
    </>
  );
};

export default Carousel;
