import { Grid } from "@mui/material";
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import MiddlePar from "../../components/Middlepart/MiddlePart";
import Reels from "../../components/Reels/Reels";
import CreateReels from "../../components/Reels/CreateReels";
import Profile from "../Profile/Profile";
import HomeRight from "../../components/HomeRight/HomeRight";

const HomePage = () => {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  return (
    <div className="px-20">
      <Grid container spacing={0}>
        <Grid item xs="auto" lg={3}>
          <div className="sticky top-0 h-screen">
            <Sidebar />
          </div>
        </Grid>

        <Grid
          xs={12}
          lg={isHome ? 6 : 9}
          item
          className="px-5 flex justify-center"
        >
          <Routes>
            <Route path="/" element={<MiddlePar />}></Route>
            <Route path="/reels" element={<Reels />}></Route>
            <Route path="/create-reels" element={<CreateReels />}></Route>
            <Route path="/profile/:id" element={<Profile />}></Route>
          </Routes>
        </Grid>
        {isHome && (
          <Grid item lg={3} className="relative">
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
