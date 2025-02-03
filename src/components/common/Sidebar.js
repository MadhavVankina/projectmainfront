import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";

const Sidebar = ({ currActiveState = {
    title: "Organization",
    subtitle: "Factory"
} }) => {

    const data = [

        {
            title: "Organization",
            subtitles: [
                "Factory",
                "Floor",
                "Activity"
            ]
        },
        {
            title: "Products",
            subtitles: [
                "Product",
                "Product Component",
                "Product Type"
            ]
        },
        {
            title: "Partners",
            subtitles: [
                "Contractor",
                "Contractor Rate",
                "Subcontractor",
                "Subcontractor Rate",
                "Subcontractor Client",
            ]
        },
        {
            title: "Users",
            subtitles: [
                "Roles"
            ]
        },

    ]

    return (
        <div className='min-w-[260px] bg-white rounded-[8px] p-3 flex flex-col gap-2'>
            {data.map((item) => (
                <Accordian item={item} currActiveState={currActiveState} />
            ))}
        </div>
    )
}

export default Sidebar;


const Accordian = ({ item, currActiveState }) => {

    const [open, setOpen] = useState(currActiveState.title === item.title);

    return (
        <div className={`transition-none rounded-[4px] overflow-hidden ${open ? 'bg-black text-white' : 'bg-white text-black'}  border-2 border-black hover:bg-black hover:text-white`}>
            <button className='transition-none  p-2 w-full text-start text-[14px] font-bold flex justify-between items-center' onClick={() => setOpen(prev => !prev)}>
                {item?.title}
                <FaChevronDown className={`transition-none ${open && 'rotate-180'}`} />
            </button>
            {open && <div className=' p-2 px-3 gap-4 flex w-full'>
                <div className='w-[1px] bg-white/50'>
                </div>
                <div className='w-full flex flex-col gap-1'>
                    {item?.subtitles.map((subtitle) => (
                        <div className={`border hover:border-white  py-1 px-2 w-full cursor-pointer text-[12px] rounded-[4px] ${currActiveState?.subtitle == subtitle ? 'border border-white' : 'border-black'}`}>
                            {subtitle}
                        </div>
                    ))}
                </div>
            </div>}
        </div>
    )
}