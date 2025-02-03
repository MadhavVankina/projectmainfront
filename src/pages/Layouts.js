import React, { useState } from "react";
import Skeleton from "../components/common/Skeleton";
import Sidebar from "../components/common/Sidebar";
import CustomTable from "../components/common/CustomTable";


const Layouts = () => {


    return (
        <div className="flex flex-col bg-black/10 min-h-screen">
            <div className="w-full h-20 bg-white shadow-lg">
            </div>
            <div className="flex h-full p-4 gap-4">
                <Sidebar />
                <div className="w-full bg-white h-full rounded-[8px]">
                    <CustomTable />
                </div>

            </div>

        </div>
    );
};

export default Layouts;
