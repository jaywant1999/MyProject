import { Avatar, Button, CardHeader } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

const PopularUserCard = () => {
  return (
    <div  >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            J
          </Avatar>
        }
        action={
          <Button size="small" className="text-sm" variant="outlined">
            Follow
          </Button>
        }
        title={<p className="text-sm  font-semibold">User Name</p>}
        subheader={<p className="text-sm text-gray-500">Follows You</p>}
      />
    </div>
  );
};

export default PopularUserCard;
