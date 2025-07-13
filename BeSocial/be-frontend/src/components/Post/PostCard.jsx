import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import React from "react";

const PostCard = () => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="User full Name"
        subheader="Time Stamp"
      />

      <CardMedia
        component="img"
        height="194"
        image="https://cdn.pixabay.com/photo/2022/09/11/14/43/whale-7446905_1280.jpg"
        alt="Paella dish"
      />

      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          This is how well is look...
        </Typography>
      </CardContent>

      <CardActions className="flex justify-between">
        <div>
          <IconButton aria-label="add to favorites">
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>

          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>

          <IconButton aria-label="share">
            <CommentIcon />
          </IconButton>
        </div>

        <IconButton>
          <div className="pr-5">
            {true ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </div>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PostCard;
