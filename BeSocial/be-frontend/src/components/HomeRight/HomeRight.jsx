import React from "react";
import SearchUser from "./SearchUser";
import PopularUserCard from "./PopularUserCard";
import { Card } from "@mui/material";

const popularUser = [1, 1, 1, 1, 1];
const HomeRight = () => {
  return (
    <div className="pr-5">
      <SearchUser />

      <Card className="p-5 mt-2">
        <div className="flex justify-between items-center py-5">
          <p className="font-semibold opacity-70">Suggetions of users</p>
          <p className="text-xl font-semibold opacity-95">View All</p>
        </div>

        <div>
          {popularUser.map((item) => (
            <PopularUserCard />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default HomeRight;
