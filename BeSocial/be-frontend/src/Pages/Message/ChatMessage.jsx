import React from "react";
import { useSelector } from "react-redux";

const ChatMessage = ({ item }) => {
  const { message, auth } = useSelector((store) => store);
  const isReqUserMessage = auth.user?.id === item.user?.id;

  return (
    <div 
      className={`flex ${
        !isReqUserMessage ? "justify-start" : "justify-end"
      } text-white`}
    >
      <div>
        <div
          className={`p-1 ${
            item.image ? "rounded-md " : "px-5 rounded-full"
          } bg-gradient-to-br from-purple-900 to-red-700`}
        >
          {item.image && (
            <img
              className="w-[15rem] h-[15rem]"
              src={item.image}
            />
          )}
          <p className={`${true ? "py-2 px-2" : "py-1 px-2"}`}>{item?.content}</p>
        </div>
        <div className={`flex ${!isReqUserMessage ? "justify-start" : "justify-end"}`}>
          {" "}
          <p className="text-black text-[15px]"> {new Date(item.timestamp).toLocaleString("en-IN", {
                          // dateStyle: "medium",
                          timeStyle: "short",
                          })}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
