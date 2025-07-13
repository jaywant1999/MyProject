import { Avatar, Button, CardHeader } from "@mui/material";
import { red } from "@mui/material/colors";
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from "react";

const PopularUserCard = () => {
  return (
    <div>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            J
          </Avatar>
        }
        action={<Button size="small">Follow</Button>}
        title="User Name"
        subheader="Follows You"
      />
    </div>
  );
};

export default PopularUserCard;
