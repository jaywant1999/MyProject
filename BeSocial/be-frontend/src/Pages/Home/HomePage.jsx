import { Grid, Drawer, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import MiddlePar from "../../components/Middlepart/MiddlePart";
import Reels from "../../components/Reels/Reels";
import CreateReels from "../../components/Reels/CreateReels";
import Profile from "../Profile/Profile";
import HomeRight from "../../components/HomeRight/HomeRight";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../../ReduxComponents/Auth/auth.action";
import MenuIcon from "@mui/icons-material/Menu";

const HomePage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    dispatch(getProfileAction(jwt));
  }, [jwt,dispatch]);

  const isHome = location.pathname === "/";

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-12 xl:px-10">
      {/* Mobile-only menu button */}
      <div className="md:hidden flex items-center py-2">
        <IconButton onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>
      </div>

      {/* Sidebar Drawer for small screens */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <div className="w-[250px] h-full">
          <Sidebar />
        </div>
      </Drawer>

      <Grid container spacing={0}>
        {/* Sidebar for medium and up */}
        <Grid item xs={0} md={3}>
          <div className="hidden md:block sticky top-0 h-screen">
            <Sidebar />
          </div>
        </Grid>

        {/* Main Content */}
        <Grid
          item
          xs={12}
          md={isHome ? 6 : 9}
          className="px-2 sm:px-5 flex justify-center"
        >
          <Routes>
            <Route path="/" element={<MiddlePar />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/create-reels" element={<CreateReels />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </Grid>

        {/* HomeRight always visible, reduced width on small screens */}
        {isHome && (
      <Grid item xs={12} sm={8} md={3} className="relative sm:flex sm:justify-center sm:w-full">

            <div className="sticky top-0 h-screen w-full">
               <HomeRight /> 
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default HomePage;
