import React from "react";

const SliderComp = () => {
  return (
    <div className="CONTAINER grid grid-flow-col w-full">
      <div className="SLIDER grid grid-cols-4 bg-black gap-2">
        <div className="IMAGE w-full aspect-video bg-slate-400"></div>
        <div className="IMAGE w-full aspect-video bg-slate-400"></div>
        <div className="IMAGE w-full aspect-video bg-slate-400"></div>
        <div className="IMAGE w-full aspect-video bg-slate-400"></div>
        <div className="IMAGE w- aspect-video bg-slate-400"></div>
      </div>
    </div>
  );
};

export default SliderComp;
