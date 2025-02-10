import React, { useState } from "react";
import Skeleton from "../components/common/Skeleton";
import Sidebar from "../components/common/Sidebar";
import CustomTable from "../components/common/CustomTable";
import CustomModal from "../components/common/CustomModal";
import TextInput from "../components/formElements/TextInput";
import FileAttachment from "../components/formElements/FileAttachment";
import Dropdown from "../components/formElements/Dropdown";
import DatePicker from "../components/formElements/DatePicker";
import Header from "../components/common/Header";

const headers = [
  {
    headerName: "Contractor Code",
    headerId: "contractor_code",
    max: 5,
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
    max: 5,
  },
  {
    headerName: "Contract Name",
    headerId: "contract_name",
    max: 10,
  },
  {
    headerName: "Email Address",
    headerId: "email_address",
    max: 15,
  },
  {
    headerName: "Phone",
    headerId: "phone",
    isNumber: true,
  },
  {
    headerName: "Status",
    headerId: "status",
  },
  {
    headerName: "Actions",
    headerId: "actions",
  },
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
    status: "Active",
  },
  {
    contractor_code: "ASHU002",
    contractor_name: "Jane Smith",
    address: "456 Oak Ave",
    city: "Los Angeles",
    contract_name: "Office Building Construction",
    email_address: "janesmith@email.com",
    phone: "555-5678",
    status: "Inactive",
  },
  {
    contractor_code: "ASHU003",
    contractor_name: "Mike Johnson",
    address: "789 Pine Rd",
    city: "Chicago",
    contract_name: "Shopping Mall Expansion",
    email_address: "mikejohnson@email.com",
    phone: "555-9101",
    status: "Active",
  },
  {
    contractor_code: "ASHU004",
    contractor_name: "Emily Davis",
    address: "101 Maple Dr",
    city: "San Francisco",
    contract_name: "Apartment Complex",
    email_address: "emilydavis@email.com",
    phone: "555-1122",
    status: "Inactive",
  },
  {
    contractor_code: "ASHU005",
    contractor_name: "David Lee",
    address: "202 Birch Blvd",
    city: "Miami",
    contract_name: "Hotel Renovation",
    email_address: "davidlee@email.com",
    phone: "555-3344",
    status: "Active",
  },
  {
    contractor_code: "ASHU006",
    contractor_name: "Sarah Wilson",
    address: "303 Cedar Ln",
    city: "Dallas",
    contract_name: "Parking Garage Construction",
    email_address: "sarahwilson@email.com",
    phone: "555-5567",
    status: "Inactive",
  },
  {
    contractor_code: "ASHU007",
    contractor_name: "Robert Brown",
    address: "404 Elm St",
    city: "Houston",
    contract_name: "Bridge Overhaul",
    email_address: "robertbrown@email.com",
    phone: "555-7789",
    status: "Active",
  },
  {
    contractor_code: "ASHU008",
    contractor_name: "Olivia Martinez",
    address: "505 Redwood Dr",
    city: "Phoenix",
    contract_name: "School Renovation",
    email_address: "oliviamartinez@email.com",
    phone: "555-9901",
    status: "Inactive",
  },
  {
    contractor_code: "ASHU009",
    contractor_name: "James Garcia",
    address: "606 Fir Ave",
    city: "Seattle",
    contract_name: "Hospital Construction",
    email_address: "jamesgarcia@email.com",
    phone: "555-2233",
    status: "Active",
  },
  {
    contractor_code: "ASHU010",
    contractor_name: "Sophia Rodriguez",
    address: "707 Pinehill Blvd",
    city: "Boston",
    contract_name: "Warehouse Development",
    email_address: "sophiarodriguez@email.com",
    phone: "555-4455",
    status: "Inactive",
  },
  {
    contractor_code: "ASHU006",
    contractor_name: "Sarah Wilson",
    address: "303 Cedar Ln",
    city: "Dallas",
    contract_name: "Parking Garage Construction",
    email_address: "sarahwilson@email.com",
    phone: "555-5567",
    status: "Inactive",
  },
  {
    contractor_code: "ASHU007",
    contractor_name: "Robert Brown",
    address: "404 Elm St",
    city: "Houston",
    contract_name: "Bridge Overhaul",
    email_address: "robertbrown@email.com",
    phone: "555-7789",
    status: "Active",
  },
  {
    contractor_code: "ASHU008",
    contractor_name: "Olivia Martinez",
    address: "505 Redwood Dr",
    city: "Phoenix",
    contract_name: "School Renovation",
    email_address: "oliviamartinez@email.com",
    phone: "555-9901",
    status: "Inactive",
  },
  {
    contractor_code: "ASHU009",
    contractor_name: "James Garcia",
    address: "606 Fir Ave",
    city: "Seattle",
    contract_name: "Hospital Construction",
    email_address: "jamesgarcia@email.com",
    phone: "555-2233",
    status: "Active",
  },
  {
    contractor_code: "ASHU010",
    contractor_name: "Sophia Rodriguez",
    address: "707 Pinehill Blvd",
    city: "Boston",
    contract_name: "Warehouse Development",
    email_address: "sophiarodriguez@email.com",
    phone: "555-4455",
    status: "Inactive",
  },
];

const Layouts = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currValues, setCurrValues] = useState("");

  return (
    <div className="flex flex-col bg-black/10 min-h-screen">
      <Header />
      <div className="flex h-full p-4 gap-4">
        <Sidebar />
        <div className="w-full bg-white h-full rounded-[8px]">
          <CustomTable
            headers={headers}
            data={data}
            handleAdd={() => setOpenModal((prev) => !prev)}
            handleRowEdit={() => setOpenModal((prev) => !prev)}
          />
        </div>
      </div>
      <CustomModal
        isOpen={openModal}
        onRequestClose={() => setOpenModal((prev) => !prev)}
      >
        <Form currValues={currValues} setCurrValues={currValues} />
      </CustomModal>
    </div>
  );
};

export default Layouts;

const Form = ({ initailState = {}, currValues, setCurrValues }) => {
  return (
    <div className="grid grid-cols-2 gap-x-6 w-full">
      <TextInput label={"Company Name"} placeholder="Enter company name" />
      <TextInput label={"Company Name"} placeholder="Enter company name" />
      <TextInput label={"Company Name"} placeholder="Enter company name" />
      <Dropdown label={"Gender"} />
      <DatePicker
        label={"State Date"}
        value={currValues}
        onChange={(e) => setCurrValues(e.target.value)}
      />
      <div className="col-span-2">
        <FileAttachment label={"Profile Picture"} />
      </div>
    </div>
  );
};
