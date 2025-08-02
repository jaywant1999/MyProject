import React from "react";
import SearchUser from "./SearchUser";
import PopularUserCard from "./PopularUserCard";
import { Card } from "@mui/material";

const popularUser = [1, 1, 1, 1, 1];

const HomeRight = () => {
  return (
    <div className="px-2 sm:px-3 md:px-4 lg:pr-5 ">
      <SearchUser />

      <Card className="p-3 sm:p-4 md:p-5 mt-2">
        <div className="flex justify-between sm:w-full items-center pb-4">
          <p className="text-[80%] font-semibold opacity-70">
            Suggestions for you
          </p>
          <p className="text-base text-[90%] font-semibold opacity-95 cursor-pointer">
            View All
          </p>
        </div>

        <div className="space-y-1">
          {popularUser.map((item, index) => (
            <PopularUserCard key={index} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default HomeRight;
