import { Avatar, Card, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import StoryCircle from "./StoryCircle";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import ArticleIcon from "@mui/icons-material/Article";
import PostCard from "../Post/PostCard";
import CreatePostModal from "../Post/CreatePostModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostAction } from "../../ReduxComponents/Post/post.action";

const story = [1, 1, 1, 1];

const MiddlePart = () => {
  const dispatch = useDispatch();
  const { post } = useSelector((store) => store);
  const [openCreatePostModal, setOpencreatePostModal] = useState(false);
  const handleCloseCratePostModal = () => setOpencreatePostModal(false);

  const handleOpenCreatePostModal = () => {
    setOpencreatePostModal(true);
    console.log("open post model");
  };
 

  useEffect(() => {
    dispatch(getAllPostAction());
  }, []);
  return (
    <div className="px-20">
      <section className="flex p-5 items-center rounded-b-md">
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar sx={{ width: "5rem", height: "5rem" }}>
            <AddIcon sx={{ fontSize: "3rem" }} />
          </Avatar>
          <p>New</p>
        </div>
        {story.map((item, index) => (
          <StoryCircle key={index} />
        ))}
      </section>

      <Card className="p-5 mt-5">
        <div className="flex justify-between">
          <Avatar />
          <input
            onClick={handleOpenCreatePostModal}
            readOnly
            className="outline-none w-[90%] px-5 rounded-full border bg-slate-200 border-[#3b4054]"
            type="text"
          ></input>
        </div>

        <div className="flex justify-center space-x-9 mt-5">
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <ImageIcon />
            </IconButton>
            <span>Image</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <VideocamIcon />
            </IconButton>
            <span>Video</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <ArticleIcon />
            </IconButton>
            <span>Article</span>
          </div>
        </div>
      </Card>

      <div className="mt-5 space-y-5">
        {post.posts?.map((item, index) => (
          <PostCard item={item} key={index} />
        ))}
      </div>

      <div>
        <CreatePostModal
          handleClose={handleCloseCratePostModal}
          open={openCreatePostModal}
        />
      </div>
    </div>
  );
};

export default MiddlePart;
