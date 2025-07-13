import React from "react";
import { navigationMenu } from "./Navigation";
// import { useNavigate } from "react-router-dom";
import { Avatar, Button, Card, Divider, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Sidebar = () => {
  // const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card className="card h-screen flex flex-col justify-between py-5">
      <div className="space-y-8 pl-5">
        <div className="w-full flex justify-center">
          <span className="logo text-3xl italic font-bold pr-5">BeMitra</span>
        </div>

        <div className="space-y-8">
          {navigationMenu.map((item) => (
            <div className="cursor-pointer flex space-x-5 items-center">
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Divider />
        <div className="flex pl-5 items-center justify-between pt-5 ">
          <div className="flex items-center space-x-3">
            <Avatar src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" />
            <div>
              <p className="font-bold ">Real Username</p>
              <p className="opacity-60">@iamkhatarnak</p>
            </div>
          </div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "basic-button",
              },
            }}
          >
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </Card>
  );
};

export default Sidebar;
