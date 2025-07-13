import React from "react";
import { AppBar, Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import PostCard from "../../components/Post/PostCard";
import UserReelsCard from "../../components/Reels/UserReelsCard";

const tabs = [
  { value: "post", name: "Post" },
  { value: "reels", name: "Reels" },
  { value: "saved", name: "Saved" },
  { value: "repost", name: "Repost" },
];

const posts = [1, 1, 1, 1];
const reels = [1, 1, 1, 1];
const savedPost = [1, 1];
const repost = [1, 1];
const Profile = () => {
  const [value, setValue] = React.useState("post");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className="my-10 w-[70%]  ">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            className="w-full h-full rounded-t-md"
            src="https://cdn.pixabay.com/photo/2019/01/02/18/25/beautiful-3909346_1280.jpg"
            alt="profile photo"
          />
        </div>
        <div className="flex items-start justify-between px-5 mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24 bg-white border-white border-2"
            sx={{ width: "10rem", height: "10rem" }}
            src="https://cdn.pixabay.com/photo/2020/05/11/15/38/tom-5158824_1280.png"
          />
          {true ? (
            <Button sx={{ borderRadius: "20px" }} variant="outlined">
              Edit Profile
            </Button>
          ) : (
            <Button sx={{ borderRadius: "20px" }} variant="outlined">
              Follow
            </Button>
          )}
        </div>
        <div className="p-5">
          <div>
            <h1 className="py-1 font-bold text-xl">I am Khatarnak</h1>
            <p>@iamkhatarnak</p>
          </div>
          <div className="flex items-center gap-10 py-3 w-full">
            <span>20 Posts</span>
            <span>50 Followers</span>
            <span>14 Followings</span>
          </div>

          <div>Bio......</div>
        </div>

        <section>
          <Box>
            <AppBar position="static" sx={{ bgcolor: "white", color: "black" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                {tabs.map((item) => (
                  <Tab label={item.name} value={item.value} />
                ))}
              </Tabs>
            </AppBar>
          </Box>
          <div className="flex justify-center p-1">
            {value === "post" ? (
              <div className="space-y-5 w-[80%] my-10">
                {posts.map((item) => (
                  <div className="border-slate-100 border rounded-sm ">
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : value === "reels" ? (
              <div className="flex flex-wrap   ">
                {reels.map((item) => (
                  <div className="border-slate-100 border rounded-sm ">
                    <UserReelsCard />
                  </div>
                ))}
              </div>
            ) : value === "saved" ? (
              <div className="space-y-5 w-[80%] my-10">
                {savedPost.map((item) => (
                  <div className="border-slate-100 border rounded-sm ">
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : value === "repost" ? (
              <div className="flex flex-wrap ">
                {repost.map((item) => (
                  <div className="border-slate-100 border rounded-sm ">
                    <UserReelsCard />
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </section>
      </div>
    </Card>
  );
};

export default Profile;
