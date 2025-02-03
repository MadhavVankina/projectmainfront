import React, { useState } from 'react';
import Button from './Button';
import SearchBar from './SearchBar';
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { FaArrowsAltV } from "react-icons/fa";


const CustomTable = ({
    title = "Contractors",
    nthChildWidth = "[&>*:nth-child(1)]:col-span-2 [&>*:nth-child(2)]:col-span-2 [&>*:nth-child(3)]:col-span-2 [&>*:nth-child(5)]:col-span-2 [&>*:nth-child(6)]:col-span-2",
    extraSpace = 5,
    handleRowEdit,
    handleRowDelete,
}) => {

    const headers = [
        {
            headerName: "Contractor Code",
            headerId: "contractor_code",
        },
        {
            headerName: "Contractor Name",
            headerId: "contractor_name",
        },
        {
            headerName: "Address",
            headerId: "address",
        },
        {
            headerName: "City",
            headerId: "city",
        },
        {
            headerName: "Contract Name",
            headerId: "contract_name",
        },
        {
            headerName: "Email Address",
            headerId: "email_address",
            max: 15
        },
        {
            headerName: "Phone",
            headerId: "phone",
            isNumber: true
        },
        {
            headerName: "Status",
            headerId: "status",
        },
        {
            headerName: "Actions",
            headerId: "actions",
        }
    ];


    const data = [
        {
            contractor_code: "ASHU001",
            contractor_name: "John Doe",
            address: "123 Main St",
            city: "New York",
            contract_name: "Residential Renovation",
            email_address: "johndoe@email.com",
            phone: "555-1234",
            status: "Active"
        },
        {
            contractor_code: "ASHU002",
            contractor_name: "Jane Smith",
            address: "456 Oak Ave",
            city: "Los Angeles",
            contract_name: "Office Building Construction",
            email_address: "janesmith@email.com",
            phone: "555-5678",
            status: "Inactive"
        },
        {
            contractor_code: "ASHU003",
            contractor_name: "Mike Johnson",
            address: "789 Pine Rd",
            city: "Chicago",
            contract_name: "Shopping Mall Expansion",
            email_address: "mikejohnson@email.com",
            phone: "555-9101",
            status: "Active"
        },
        {
            contractor_code: "ASHU004",
            contractor_name: "Emily Davis",
            address: "101 Maple Dr",
            city: "San Francisco",
            contract_name: "Apartment Complex",
            email_address: "emilydavis@email.com",
            phone: "555-1122",
            status: "Inactive"
        },
        {
            contractor_code: "ASHU005",
            contractor_name: "David Lee",
            address: "202 Birch Blvd",
            city: "Miami",
            contract_name: "Hotel Renovation",
            email_address: "davidlee@email.com",
            phone: "555-3344",
            status: "Active"
        },
        {
            contractor_code: "ASHU006",
            contractor_name: "Sarah Wilson",
            address: "303 Cedar Ln",
            city: "Dallas",
            contract_name: "Parking Garage Construction",
            email_address: "sarahwilson@email.com",
            phone: "555-5567",
            status: "Inactive"
        },
        {
            contractor_code: "ASHU007",
            contractor_name: "Robert Brown",
            address: "404 Elm St",
            city: "Houston",
            contract_name: "Bridge Overhaul",
            email_address: "robertbrown@email.com",
            phone: "555-7789",
            status: "Active"
        },
        {
            contractor_code: "ASHU008",
            contractor_name: "Olivia Martinez",
            address: "505 Redwood Dr",
            city: "Phoenix",
            contract_name: "School Renovation",
            email_address: "oliviamartinez@email.com",
            phone: "555-9901",
            status: "Inactive"
        },
        {
            contractor_code: "ASHU009",
            contractor_name: "James Garcia",
            address: "606 Fir Ave",
            city: "Seattle",
            contract_name: "Hospital Construction",
            email_address: "jamesgarcia@email.com",
            phone: "555-2233",
            status: "Active"
        },
        {
            contractor_code: "ASHU010",
            contractor_name: "Sophia Rodriguez",
            address: "707 Pinehill Blvd",
            city: "Boston",
            contract_name: "Warehouse Development",
            email_address: "sophiarodriguez@email.com",
            phone: "555-4455",
            status: "Inactive"
        },
        {
            contractor_code: "ASHU006",
            contractor_name: "Sarah Wilson",
            address: "303 Cedar Ln",
            city: "Dallas",
            contract_name: "Parking Garage Construction",
            email_address: "sarahwilson@email.com",
            phone: "555-5567",
            status: "Inactive"
        },
        {
            contractor_code: "ASHU007",
            contractor_name: "Robert Brown",
            address: "404 Elm St",
            city: "Houston",
            contract_name: "Bridge Overhaul",
            email_address: "robertbrown@email.com",
            phone: "555-7789",
            status: "Active"
        },
        {
            contractor_code: "ASHU008",
            contractor_name: "Olivia Martinez",
            address: "505 Redwood Dr",
            city: "Phoenix",
            contract_name: "School Renovation",
            email_address: "oliviamartinez@email.com",
            phone: "555-9901",
            status: "Inactive"
        },
        {
            contractor_code: "ASHU009",
            contractor_name: "James Garcia",
            address: "606 Fir Ave",
            city: "Seattle",
            contract_name: "Hospital Construction",
            email_address: "jamesgarcia@email.com",
            phone: "555-2233",
            status: "Active"
        },
        {
            contractor_code: "ASHU010",
            contractor_name: "Sophia Rodriguez",
            address: "707 Pinehill Blvd",
            city: "Boston",
            contract_name: "Warehouse Development",
            email_address: "sophiarodriguez@email.com",
            phone: "555-4455",
            status: "Inactive"
        }
    ];

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
        <div className='flex flex-col p-4'>
            <div className='flex justify-between items-center mb-4'>
                <p className='text-2xl font-bold'>{title}</p>
                <div className='flex gap-6 items-center'>
                    <Button><div className='flex gap-1 items-center'>Add <IoMdAddCircle size={16} className='mb-[2px]' /></div></Button>
                    <SearchBar search={search} setSearch={setSearch} />
                </div>
            </div>
            <div
                style={{ "gridTemplateColumns": `repeat(${headers.length + extraSpace}, minmax(0, 1fr))` }}
                className={`gap-x-4 ${nthChildWidth} grid w-fit min-w-full p-2 px-4 py-3 rounded-[5px] bg-black/15`}>
                {headers.map((header) => (
                    <button className='hover:bg-black/5'>
                        <div className='flex items-center justify-between pr-[4px]'>
                            <p className={`text-black text-sm text-start font-bold`}>{header?.headerName}</p>
                            {header?.headerName !== 'Actions' &&
                                <FaArrowsAltV size={12} />
                            }
                        </div>
                    </button>
                ))}
            </div>
            <div className='flex flex-col mt-2 gap-2'>
                {updatedData?.map((row, i) => (
                    <div
                        style={{ "gridTemplateColumns": `repeat(${headers.length + extraSpace}, minmax(0, 1fr))` }}
                        className={`gap-x-4 ${nthChildWidth} grid w-fit min-w-full p-2 px-4 py-3 rounded-[5px] border ${i % 2 !== 0 && 'bg-black/5'} `}>
                        {headers.map((header) => {
                            switch (header.headerId) {
                                case 'actions':
                                    return <div className='flex gap-2 items-center'>
                                        <button><MdOutlineModeEdit size={18} color='#2457C5' /></button>
                                        <button><MdOutlineDelete size={18} color='red' /></button>
                                    </div>

                                default:
                                    return <p className='text-black text-sm text-start font-medium' key={header?.headerId}>{header?.max ? row[header?.headerId].substring(0, header?.max) + '..' : row[header?.headerId]}</p>

                            }
                        })}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default CustomTable