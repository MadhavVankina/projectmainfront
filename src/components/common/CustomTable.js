import React, { useState } from "react";
import Button from "./Button";
import SearchBar from "./SearchBar";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { FaArrowsAltV } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const CustomTable = ({
  headers,
  data,
  title = "Contractors",
  nthChildWidth = "[&>*:nth-child(1)]:col-span-2 [&>*:nth-child(2)]:col-span-2 [&>*:nth-child(3)]:col-span-2 [&>*:nth-child(5)]:col-span-2 [&>*:nth-child(6)]:col-span-2",
  extraSpace = 5,
  handleRowEdit = () => {},
  handleRowDelete,
  handleAdd,
}) => {
  const [search, setSearch] = useState("");

  const filteredData = () => {
    if (search.length === 0) {
      return data;
    } else {
      const newData = data?.filter((item) =>
        Object.values(item).some(
          (value) =>
            typeof value === "string" &&
            value.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      );

      return newData;
    }
  };

  const updatedData = filteredData();

  return (
    <div className="flex flex-col p-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-2xl font-bold">{title}</p>
        <div className="flex gap-6 items-center">
          <Button onClick={handleAdd}>
            <div className="flex gap-1 items-center">
              Add <IoMdAddCircle size={16} className="mb-[2px]" />
            </div>
          </Button>
          <SearchBar search={search} setSearch={setSearch} />
        </div>
      </div>
      <div
        style={{
          gridTemplateColumns: `repeat(${headers.length + extraSpace}, minmax(0, 1fr))`,
        }}
        className={`gap-x-4 ${nthChildWidth} grid w-fit min-w-full p-2 px-4 py-3 rounded-[5px] bg-black/15`}
      >
        {headers.map((header) => (
          <button className="hover:bg-black/5">
            <div className="flex items-center justify-between pr-[4px]">
              <p
                data-tooltip-id={
                  header?.max && header?.max < header?.headerName.length
                    ? "my-tooltip"
                    : ""
                }
                data-tooltip-content={header?.headerName}
                className={`text-black text-sm text-start font-bold`}
              >
                {header?.max && header?.max < header?.headerName.length
                  ? header?.headerName.substring(0, header?.max) + ".."
                  : header?.headerName}
              </p>
              {header?.headerName !== "Actions" && <FaArrowsAltV size={12} />}
            </div>
          </button>
        ))}
      </div>
      <div className="flex flex-col mt-2 gap-2">
        {updatedData?.map((row, i) => (
          <div
            style={{
              gridTemplateColumns: `repeat(${headers.length + extraSpace}, minmax(0, 1fr))`,
            }}
            className={`gap-x-4 ${nthChildWidth} grid w-fit min-w-full p-2 px-4 py-3 rounded-[5px] border ${i % 2 !== 0 && "bg-black/5"} `}
          >
            {headers.map((header) => {
              switch (header.headerId) {
                case "actions":
                  return (
                    <div className="flex gap-2 items-center">
                      <button onClick={handleRowEdit}>
                        <MdOutlineModeEdit size={18} color="#2457C5" />
                      </button>
                      <button>
                        <MdOutlineDelete size={18} color="red" />
                      </button>
                    </div>
                  );

                default:
                  return (
                    <p
                      data-tooltip-id={
                        header?.max &&
                        header?.max < row[header?.headerId].length
                          ? "my-tooltip"
                          : ""
                      }
                      data-tooltip-content={row[header?.headerId]}
                      className="text-black text-sm font-medium cursor-default"
                      key={header?.headerId}
                    >
                      {header?.max && header?.max < row[header?.headerId].length
                        ? row[header?.headerId].substring(0, header?.max) + ".."
                        : row[header?.headerId]}
                    </p>
                  );
              }
            })}
          </div>
        ))}
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default CustomTable;
