"use client";
import React from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiExpense } from "react-icons/gi";
import { MdSavings } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className=" bg-black  flex flex-col gap-10 w-[300px] min-w-[300px] border-r min-h-screen sticky top-0 h-screen p-4 ">
      {" "}
      <div className="flex items-center  justify-center gap-3 py-3 px-6">
        <div className="bg-black rounded-full p-4 ">
          <p className=" text-yellow-600 border rounded-full border-yellow-600 p-3 ">
            SM
          </p>
        </div>
        <div className=" text-yellow-600 ">
          <p className="font-bold"> Saad Mustafa</p>
          <p>Saadtanoli445@gmail.com </p>
        </div>
      </div>
      <div className="flex-grow">
        <Command className=" bg-black text-yellow-600">
          <CommandInput
            className="text-[#2F4F4F]"
            placeholder="Type a command or search..."
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup className="flex flex-col gap-10">
              <CommandItem className="text-yellow-600 text-[18px] hover:bg-gray-100 !important">
                <GiTakeMyMoney className="mr-2" size={20} />
                Dashboard/Home
              </CommandItem>
              <CommandItem className="text-yellow-600 text-[18px] hover:bg-gray-100 !important">
                <GiExpense className="mr-2" size={20} />
                User Management
              </CommandItem>
              <CommandItem className="text-yellow-600 text-[18px] hover:bg-gray-100 !important">
                <MdSavings className="mr-2" size={20} />
                Courses
              </CommandItem>
              <CommandItem className="text-yellow-600 text-[18px] hover:bg-gray-100 !important">
                <MdAccountCircle className="mr-2" size={20} />
                Timetables
              </CommandItem>
              <CommandItem className="text-yellow-600 text-[18px] hover:bg-gray-100 !important">
                <FaMoneyBills className="mr-2" size={20} />
                Reports
              </CommandItem>
              <CommandItem className="text-yellow-600 text-[18px] hover:bg-gray-100 !important">
                <IoSettings className="mr-2" size={20} />
                Announcements
              </CommandItem>
              <CommandItem className="text-yellow-600 text-[18px] hover:bg-gray-100 !important">
                <IoSettings className="mr-2" size={20} />
                Settings
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  );
};

export default Sidebar;
