import { Input } from "@/components/ui/input";
import React, { FC } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface FormSearchProps {}

const FormSearch: FC<FormSearchProps> = ({}) => {
  return (
    <>
      <div className="mt-6 bg-white p-4 shadow-md inline-flex items-center gap-4 relative w-max z-10">
        <div className="inline-flex gap-3 items-center">
          <AiOutlineSearch className="w-6 h-6" />
          <Input
            className="py-8 w-[300px] border-none"
            placeholder="Job Title or Keyword"
          />
        </div>
        <div className="inline-flex gap-3 items-center">
          <HiLocationMarker className="w-6 h-6" />
          <Select>
            <SelectTrigger className="w-[300px] text-gray-300">
              <SelectValue placeholder="Select A Location" />
            </SelectTrigger>
            <SelectContent className="text-gray-300">
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button className="py-8 px-10 text-lg">Search My Job</Button>
        </div>
      </div>
      <div>
        <div className="text-muted-foreground mt-3">
          Popular : UI Designer, UX Researcher, Android, Admin
        </div>
      </div>
    </>
  );
};

export default FormSearch;
