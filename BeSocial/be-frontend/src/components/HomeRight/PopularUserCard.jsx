import { Avatar, Button, CardHeader } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

const PopularUserCard = () => {
  return (
    <div>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500],width:"2rem" ,height:"2rem" }} className="text-[90%]" aria-label="recipe">
            J
          </Avatar>
        }
        action={
          <Button size="small" className="text-[90%]" variant="outlined">
            Follow
          </Button>
        }
        title={<p className="text-[90%] font-semibold">User Name</p>}
        subheader={<p className="text-[90%] text-gray-500">Follows You</p>}
      />
    </div>
  );
};

export default PopularUserCard;
