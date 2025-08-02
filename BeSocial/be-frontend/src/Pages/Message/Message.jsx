import React, { useEffect, useRef, useState } from "react";
import {
  Avatar,
  Backdrop,
  CircularProgress,
  Grid,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CallIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SearchUser from "../../components/SearchUser/SearchUser";
import UserChatCard from "./UserChatCard";
import { useNavigate } from "react-router-dom";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import {
  createMessage,
  getAllChats,
} from "../../ReduxComponents/Message/message.action";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { UploadToCloud } from "../../Utils/UploadToCloud";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

const Message = () => {
  const dispatch = useDispatch(0);
  const { message } = useSelector((store) => store);
  const [currentChat, setCurrentChat] = useState();
  const [messages, setMessages] = useState([]);
  const [selectedImage, setSelectedImage] = useState();
  const { auth } = useSelector((store) => store);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const chatContainerRef = useRef(null);

  useEffect(() => {
    dispatch(getAllChats());
  }, []);

  const handleSelectImage = async (e) => {
    setLoading(true);
    console.log("handle select image");
    const imgUrl = await UploadToCloud(e.target.files[0], "image");
    setSelectedImage(imgUrl);
    setLoading(false);
  };

  const handleCreateMessage = (value) => {
    const message = {
      chatId: currentChat.id,
      content: value,
      image: selectedImage,
      timestamp: new Date().toISOString(),
    };
    dispatch(createMessage({ message, sendMessageToServer }));
    dispatch(getAllChats());
  };

  const navigate = useNavigate();

  const [stompClient, setStompClient] = useState(null);

  useEffect(() => {
    const sock = new SockJS("http://localhost:1999/ws");
    const stomp = Stomp.over(sock);
    stomp.connect(
      {},
      () => {
        console.log("WebSocket connected");
        setStompClient(stomp);
      },
      (error) => {
        console.log("WebSocket error:", error);
      }
    );
  }, []);

  useEffect(() => {
    if (stompClient && auth.user && currentChat) {
      const subscription = stompClient.subscribe(
        `/user/${currentChat.id}/private`,
        onMessageRecieve
      );

      return () => subscription.unsubscribe();
    }
  }, [stompClient, currentChat]);

  const sendMessageToServer = (newMessage) => {
    try {
      if (stompClient && newMessage) {
        stompClient.send(
          `/app/chat/${currentChat?.id.toString()}`,
          {},
          JSON.stringify(newMessage)
        );
      }
    } catch (error) {
      console.log("sender error..", error);
    }
  };

  const onMessageRecieve = (newMessage) => {
    try {
      const parsed = JSON.parse(newMessage.body);
      console.log("message recieve from websocket....", parsed);
      setMessages((prev) => [...prev, parsed]);
    } catch (error) {
      console.log("reciever error....", error);
    }
  };

  useEffect(() => {
  const fetchMessages = async () => {
    if (currentChat) {
      setMessages(currentChat.messages || []);
    }
  };

  fetchMessages();
}, [currentChat]);

useEffect(()=>{
  if(chatContainerRef.current){
    chatContainerRef.current.scrollTop=chatContainerRef.current.scrollHeight;
  }
},[messages])

  return (
    <div>
      <Grid container className="h-screen overflow-y-hidden">
        <Grid className="px-5" item xs={3}>
          <div className="flex flex-col h-full justify-between">
            <div className="flex space-x-3 items-center py-5">
              <IconButton type="button" onClick={() => navigate("/")}>
                <ArrowBackIosIcon sx={{ color: "black" }} />
              </IconButton>
              <h1 className="text-xl font-bold">Home</h1>
            </div>
            <div className="h-[90vh]">
              <div>
                <SearchUser />
              </div>
              <div className="h-full space-y-4 mt-5 overflow-y-scroll">
                {message.chats.map((item, index) => {
                  return (
                    <div
                      onClick={() => {
                        setCurrentChat(item)
                      }}
                    >
                      <UserChatCard chat={item} key={index} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Grid>

        <Grid className="h-full " item xs={9}>
          {currentChat ? (
            <div>
              <div className="flex justify-between items-center border-1 p-5 ">
                <div className="flex items-center  space-x-3">
                  <Avatar src="https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg" />
                  <p>
                    {auth.user.id === currentChat.users[0].id
                      ? currentChat.users[1].firstName +
                        " " +
                        currentChat.users[1].lastName
                      : currentChat.users[0].firstName +
                        " " +
                        currentChat.users[0].lastName}
                  </p>
                </div>
                <div className="flex space-x-3">
                  <IconButton>
                    <CallIcon />
                  </IconButton>

                  <IconButton>
                    <VideoCallIcon />
                  </IconButton>
                </div>
              </div>
              <div ref={chatContainerRef} className="overflow-y-scroll h-[82vh] px-2 py-5 space-y-5">
                {messages.map((item, index) => (
                  <ChatMessage item={item} key={index} />
                ))}
              </div>
              <div className="sticky bottom-0 ">
                {selectedImage && (
                  <img
                    className="w-[8rem] h-[8rem] object-cover px-2"
                    src={selectedImage}
                    alt="selectedimg"
                  />
                )}
                <div className="py-5 flex items-center justify-center space-x-5">
                  <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && e.target.value) {
                        handleCreateMessage(inputValue);
                        setSelectedImage("");
                        setInputValue("");
                        console.log(e.target.value);
                      }
                    }}
                    className="border rounded-full border-slate-600 bg-slate-200 px-5 w-[90%] py-3"
                    placeholder="write....."
                    type="text"
                  />
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleSelectImage}
                      className="hidden"
                      id="image-input"
                    />
                    <label htmlFor="image-input">
                      <AddPhotoAlternateIcon />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full space-y-5 flex w-full flex-col justify-center items-center ">
              <ChatBubbleOutlineIcon sx={{ fontSize: "5rem" }} />
              <p className="font-semibold text-2xl">"No chat selected"</p>
            </div>
          )}
        </Grid>
      </Grid>

      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Message;
