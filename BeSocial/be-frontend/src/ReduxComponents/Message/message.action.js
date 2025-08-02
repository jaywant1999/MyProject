import { api } from "../../config/api";
import * as actionType from "./message.actionType";

export const createMessage = (reqData) => async (dispatch) => {
  dispatch({ type: actionType.CREATE_MESSAGE_REQUEST });
  try {
    const { data } = await api.post(
      `/api/messages/chat/${reqData.message.chatId}`,
      reqData.message
    );
    reqData.sendMessageToServer(data);
    console.log("message created ...", data);
    dispatch({ type: actionType.CREATE_MESSAGE_SUCCESS, payload: data });
  
  } catch (error) {
    console.log("error in creating msg...", error);
    dispatch({ type: actionType.CREATE_MESSAGE_FAILURE, payload: error });
  }
};


export const createChat = (chat) => async (dispatch) => {
  dispatch({ type: actionType.CREATE_CHAT_REQUEST });
  try {
    const { data } = await api.post(
      `/api/chats`,
      chat
    );
    console.log("chat created ...", data);
    dispatch({ type: actionType.CREATE_CHAT_SUCCESS, payload: data });
  } catch (error) {
    console.log("error in creating chat...", error);
    dispatch({ type: actionType.CREATE_CHAT_FAILURE, payload: error });
  }
};

export const getAllChats = ( ) => async (dispatch) => {
  dispatch({ type: actionType.GET_ALL_CHATS_REQUEST });
  try {
    const { data } = await api.get(
      `/api/chats`
    );
    console.log("get all chats...", data);
    dispatch({ type: actionType.GET_ALL_CHATS_SUCCESS, payload: data });
  } catch (error) {
    console.log("error in fetching chat...", error);
    dispatch({ type: actionType.GET_ALL_CHATS_FAILURE, payload: error });
  }
};





