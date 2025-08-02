import {
  Avatar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import { UploadToCloud } from "../../Utils/UploadToCloud";
import { createPostAction } from "../../ReduxComponents/Post/post.action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "0.6rem",
  outline: "none",
};

const CreatePostModal = ({ handleClose, open }) => {
  const [selectedImage, setSelectImage] = useState();
  const [selectedVideo, setSelectVideo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

 

  const handleSelectImage = async (event) => {
    setIsLoading(true);
    const imageUrl = await UploadToCloud(event.target.files[0], "image");
    setSelectImage(imageUrl);
    setIsLoading(false);
    formik.setFieldValue("image", imageUrl);
  };

  const handleSelectVideo = async (event) => {
    setIsLoading(true);
    const videoUrl = await UploadToCloud(event.target.files[0], "video");
    setSelectVideo(videoUrl);
    setIsLoading(false);
    formik.setFieldValue("video", videoUrl);
  };

  const formik = useFormik({
    initialValues: {
      caption: "",
      image: "",
      video: "",
    },

    onSubmit: (values) => {
      console.log("formik values", values);
      dispatch(createPostAction(values))
      handleClose();
      formik.resetForm();
      setSelectImage(null);
      setSelectVideo(null);
    },
  });

  const { auth } = useSelector((store) => store);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <div className="flex space-x-4 items-center">
                <Avatar />
                <div>
                  <p className="font-bold text-lg">
                    {auth.user?.firstName + " " + auth.user?.lastName}
                  </p>
                  <p className="text-sm">
                    @
                    {auth.user?.firstName.toLowerCase() +
                      "_" +
                      auth.user?.lastName.toLowerCase()}
                  </p>
                </div>
              </div>
              <textarea
                className="border border-[#585c6b] w-full mt-5 p-2 bg-transparent outline-none rounded-sm"
                placeholder="write caption here...."
                name="caption"
                id=""
                rows="4"
                value={formik.values.caption}
                onChange={formik.handleChange}
              ></textarea>

              <div className="flex space-x-5 items-center mt-5 w-full">
                <div>
                  <input
                    className="outline w-full"
                    type="file"
                    accept="image/*"
                    onChange={handleSelectImage}
                    style={{ display: "none" }}
                    id="image-input"
                  />
                  <label htmlFor="image-input">
                    <IconButton color="primary" component="span">
                      <ImageIcon />
                    </IconButton>
                  </label>
                  <span>Image</span>
                </div>

                <div>
                  <input
                    className="outline w-full"
                    type="file"
                    accept="video/*"
                    onChange={handleSelectVideo}
                    style={{ display: "none" }}
                    id="video-input"
                  />
                  <label htmlFor="video-input">
                    <IconButton color="primary" component="span">
                      <VideocamIcon />
                    </IconButton>
                  </label>
                  <span>Video</span>
                </div>
              </div>

              {selectedImage && (
                <div className="flex w-full justify-center">
                  <img
                    className="h-[15rem] mb-5"
                    src={selectedImage || selectedVideo}
                    alt="selected image.."
                  />
                </div>
              )}

              {selectedVideo && (
                <div className="mt-3">
                  <video className="h-[10rem]" controls>
                    <source src={selectedVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              <div className="flex w-full justify-end">
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ borderRadius: "1.5rem" }}
                   disabled={!formik.values.caption && !selectedImage && !selectedVideo}
                >
                  Post
                </Button>

                <Backdrop
                  sx={(theme) => ({
                    color: "#fff",
                    zIndex: theme.zIndex.drawer + 1,
                  })}
                  open={isLoading}
                  onClick={handleClose}
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default CreatePostModal;
