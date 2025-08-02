import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useSelector } from "react-redux";

const UserChatCard = ({ chat }) => {

const {mesage,auth} = useSelector((store)=>store);

  return (
    <Card>
      <CardHeader
        action={
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        }
        title={auth.user.id===chat.users[0].id?chat.users[1].firstName+" "+chat.users[1].lastName : chat.users[0 ].firstName+" "+chat.users[0].lastName}
        subheader={"@"+`${auth.user.id===chat.users[0].id?chat.users[1].firstName+"_"+chat.users[1].lastName : chat.users[0 ].firstName+"_"+chat.users[0].lastName}`.toLowerCase()}
        avatar={
          <Avatar
            sx={{ width: "3.5rem", height: "3.5rem", fontSize: "1.5rem" }}
            src="https://cdn.pixabay.com/photo/2020/08/26/11/57/dog-5519360_1280.jpg"
          />
        }
      />
    </Card>
  );
};

export default UserChatCard;
