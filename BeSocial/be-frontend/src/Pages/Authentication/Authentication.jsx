import React from "react";
import { Card, Grid } from "@mui/material";
import Login from "./Login";
// import Register from "./Register";
import img1 from "../../assets/Landing.jpg";
import { Route, Routes } from "react-router-dom";
import Register from "./Register";

const Authentication = () => {
  return (
    <div>
      <Grid
        container
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid
          size={12}
          className="flex justify-center items-center min-h-screen w-md"
        >
          <div className="w-full px-4">
            <Card className="card p-8 opacity-90">
              <div className="flex flex-col items-center mb-6 space-y-1 ">
                <h1 className="logo font-bold text-3xl italic text-center">
                  BeMitra
                </h1>
                <p className="text-center text-sw w-full">
                  Build Maitry, not just followers.
                </p>
              </div>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Authentication;
