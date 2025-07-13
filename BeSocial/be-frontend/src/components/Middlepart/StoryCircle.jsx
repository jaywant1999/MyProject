import { Avatar } from "@mui/material";
import React from "react";

const StoryCircle = () => {
  return (
    <div>
      <div className="flex flex-col items-center mr-4 cursor-pointer">
        <Avatar className=" bg-red-300" sx={{ width: "5rem", height: "5rem" }} src="https://cdn.pixabay.com/photo/2020/05/11/15/38/tom-5158824_1280.png">
           
        </Avatar>
        <p>IamKhatarnak</p>
      </div>
    </div>
  );
};

export default StoryCircle;
