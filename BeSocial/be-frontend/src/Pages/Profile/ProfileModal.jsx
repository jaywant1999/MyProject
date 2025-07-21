import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { Avatar, IconButton, Modal, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { updateProfileAction } from "../../ReduxComponents/Auth/auth.action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  outline: "none",
  overFlow: "scroll-y",
  borderRadius: 3,
};

const ProfileModal = ({ open, handleClose }) => {
  const handleSave = (values) => {
    console.log("values", values);
    location.reload();
  };

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(updateProfileAction(values));
      handleClose();
    },
  });

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
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                  <p>Edit profile</p>
                </IconButton>
              </div>
              <Button type="submit" onClick={handleSave}>
                Save
              </Button>
            </div>
            <div>
              <div className="h-[12rem] md:h-[20rem] space-y-5 mt-5 ">
                <img src="https://cdn.pixabay.com/photo/2024/05/22/21/51/dog-8781844_1280.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="pl-5">
                <Avatar
                  className="transform -translate-y-24"
                  sx={{ width: "10rem", height: "10rem" }}
                  src="https://cdn.pixabay.com/photo/2025/06/27/07/36/dragon-9683286_1280.jpg"
                />
              </div>
            </div>
            <div className=" flex flex-col space-y-5 gap-5">
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ProfileModal;
