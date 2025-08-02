import { Avatar, Card, CardHeader } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchUserAction } from "../../ReduxComponents/Auth/auth.action";
import { createChat } from "../../ReduxComponents/Message/message.action";

const SearchUser = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const {message,auth} = useSelector((store)=>store)

  const handleSearchUser = (e) => {
    setUsername(e.target.value);
    console.log("handle serch user...",auth.searchUser);
    dispatch(searchUserAction(username));
  };

  const handleClick = (id) => { 
    console.log("chat created onclick....");
    dispatch(createChat({userId:id}))
  };
  return (
    <div>
      <div className="py-1 relative">
        <input
          placeholder="Search...."
          className="border outline-none rounded-full border-slate-600 bg-slate-200 px-5 w-full py-3 "
          type="text"
          onChange={handleSearchUser}
        />
        {username && (
         auth.searchUser.map((item)=> <Card key={item.id} className="absolute w-full z-10 top-[4.5rem] cursor-pointer">
            <CardHeader
              onClick={() => {
                handleClick(item.id);
                setUsername("");
              }}
              avatar={
                <Avatar src="https://cdn.pixabay.com/photo/2025/07/14/13/00/basilisk-9713946_1280.jpg" />
              }
              title={item.firstName+" "+item.lastName}
              subheader={`${"@"+item.firstName+"_"+item.lastName}`.toLowerCase()}
            />
          </Card>)
        )}
      </div>
    </div>
  );
};

export default SearchUser;
