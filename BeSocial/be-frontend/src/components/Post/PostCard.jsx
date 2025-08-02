import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCommentAction,
  likePostAction,
} from "../../ReduxComponents/Post/post.action";
import isLikeByReqUsers from "../../Utils/isLikeByReqUsers";

const PostCard = ({ item }) => {
    const { auth } = useSelector((store) => store);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(item.comments || []);

  const dispatch = useDispatch();

  const handleCreateComment = (commentString) => {
    const reqData = {
      postId: item.id,
      data: {
        commentString,
      },
    };
    dispatch(createCommentAction(reqData)).then(() => {
      const newComment = {
        commentString,
        user: auth.user,
        timestamp:new Date().toISOString(),
      };
      setComments((prev) => [...prev, newComment]);
    });
  };

  const handleLikePost = () => {
    dispatch(likePostAction(item.id));
  };

  const handleShowComments = () => setShowComments(!showComments);
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500], fontSize: "1rem" }}
            aria-label="recipe"
          >
            {`${
              item.user?.firstName[0] + item.user?.lastName[0]
            }`.toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title ={item.user?.firstName + " " + item.user?.lastName}
        subheader={item.createdAt? new Date(item.createdAt).toLocaleString("en-IN", {
                            dateStyle: "medium",
                            timeStyle: "short",
                          })
                        : ""}
                        subheaderTypographyProps={{fontSize:"10px"}}
                 
      />

      <CardMedia
        component="img"
        height="194"
        image={item.image}
        alt={"post image"}
      />

      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {item.caption}
        </Typography>
      </CardContent>

      <CardActions className="flex justify-between">
        <div className="flex gap-3">
          <IconButton aria-label="add to favorites" onClick={handleLikePost}>
            {isLikeByReqUsers(auth.user.id, item) ? (
              <FavoriteIcon sx={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon sx={{ color: "red" }} />
            )}

            <Typography variant="caption" sx={{ ml: 1 }}>
              {item.liked?.length || 0}
            </Typography>
          </IconButton>

          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>

          <IconButton aria-label="share" onClick={handleShowComments}>
            <CommentIcon />
            <Typography variant="caption" sx={{ ml: 1 }}>
              {item.comments?.length || 0}
            </Typography>
          </IconButton>
        </div>

        <IconButton>
          <div className="pr-5">
            {true ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </div>
        </IconButton>
      </CardActions>

      {showComments && (
        <section>
          <div className="flex items-center soace-x-5 mx-3 my-5">
            <Avatar sx={{ bgcolor: green[600], fontSize: "1rem" }}>
              {`${
                auth.user?.firstName[0] + auth.user?.lastName[0]
              }`.toUpperCase()}
            </Avatar>
            <input
              onKeyPress={(e) => {
                if (e.key == "Enter") {
                  handleCreateComment(e.target.value);
                  console.log("entere pressed.....", e.target.value);
                  e.target.value = "";
                }
              }}
              type="text"
              className="w-full outline-none bg-slate-200 border mx-2 border-[#5c5f6c] rounded-full px-5 py-2"
              placeholder="comment here.... "
            />
          </div>
          <Divider />
          <div className="mx-3 space-y-2 my-5 text-sm">
            {comments.map((comment, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Avatar
                  sx={{
                    height: "2rem",
                    width: "2rem",
                    fontSize: "0.8rem",
                    bgcolor: "purple",
                  }}
                >
                  {`${
                    comment.user?.firstName.charAt(0) +
                    comment.user?.lastName.charAt(0)
                  }`.toUpperCase()}
                </Avatar>
                <div className="flex flex-col text-xs">
                  <div className="font font-semibold">
                    <p>
                      {comment.user?.firstName + " " + comment.user?.lastName}
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-baseline font-light ">
                    <p>{comment?.commentString}</p>
                    <p className="text-slate-500 text-[8px] ">
                      {comment?.timestamp
                        ? new Date(comment.timestamp).toLocaleString("en-IN", {
                            dateStyle: "medium",
                            timeStyle: "short",
                          })
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </Card>
  );
};

export default PostCard;
