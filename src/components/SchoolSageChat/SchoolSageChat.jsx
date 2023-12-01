import { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Avatar, ChatList, MessageList, Input } from "react-chat-elements";
import SchoolSageHeader from "../SchoolSageHeader/SchoolSageHeader";
import { chatListData as fakeData, GetMessageData } from "./data";
import "react-chat-elements/dist/main.css";
import "./SchoolSageChat.less";

const truncateSubtitle = (subtitle, charLimit = 60) => {
  if (subtitle.length > charLimit) {
    return subtitle.substring(0, charLimit) + "...";
  }
  return subtitle;
};

const formatDateDifference = (date) => {
  if (!date) return "";

  const now = new Date();
  const receivedDate = new Date(date);
  const diffInMs = Math.abs(now - receivedDate);

  const diffInHours = diffInMs / (1000 * 60 * 60);
  if (diffInHours < 24) {
    if (Math.floor(diffInHours) === 0) {
      return "just now";
    }
    return `${Math.floor(diffInHours)} hours ago`;
  }

  const diffInDays = diffInHours / 24;
  return `${Math.floor(diffInDays)} days ago`;
};

const SchoolSageChat = () => {
  const week = 7 * 24 * 60 * 60 * 1000;
  const navigate = useNavigate();
  const location = useLocation();
  const receiver = location.state?.receiver;

  const inputRef = useRef(null);
  const [clearInputFunc, setClearInputFunc] = useState(() => () => {});

  const navigateToNeedTutor = () => {
    navigate("/need-tutor-page");
  };

  const [chatListData, setChatListData] = useState([]);
  const [messageData, setMessageData] = useState(new Map());

  const [currentChat, setCurrentChat] = useState(null);
  const [currentReceiver, setCurrentReceiver] = useState(null);
  const [currentMessages, setCurrentMessages] = useState([]);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (chatListData.length === 0) {
      const initialChatData = fakeData.map((item) => ({
        ...item,
        subtitle: truncateSubtitle(item.subtitle),
        date: new Date().getTime() - week + Math.random() * week,
        unread: Math.floor(Math.random() * 10) + 1,
      }));
      setChatListData(initialChatData);
    }
  }, []);

  useEffect(() => {
    if (receiver) {
      let newReceiverData = {
        avatar:
          "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgstudent.gif",
        alt: receiver,
        title: receiver,
        subtitle: "",
        date: new Date(),
        unread: 0,
      };

      const existingReceiverIndex = chatListData.findIndex(
        (item) => item.title === receiver
      );

      if (existingReceiverIndex === -1) {
        setChatListData((prevData) => [newReceiverData, ...prevData]);
      } else {
        const updatedList = [...chatListData];
        const [existingReceiver] = updatedList.splice(existingReceiverIndex, 1);
        updatedList.unshift(existingReceiver);
        setChatListData(updatedList);
      }

      setCurrentChat(receiver);
      setCurrentReceiver(newReceiverData);
      setCurrentMessages(messageData.get(receiver) || []);
    }
  }, [receiver]);

  useEffect(() => {
    if (!receiver && chatListData.length > 0) {
      const firstChat = chatListData[0];
      setCurrentChat(firstChat.title);
      setCurrentReceiver(firstChat);
      setCurrentMessages(messageData.get(firstChat.title) || []);
    }
  }, [chatListData]);

  useEffect(() => {
    setMessageData(GetMessageData());
  }, []);

  useEffect(() => {
    if (currentChat) {
      const receiverInfo = chatListData.find(
        (item) => item.title === currentChat
      );
      setCurrentReceiver(receiverInfo);
    }
  }, [currentChat, chatListData]);

  const handleChatClick = (chatTitle) => {
    setCurrentChat(chatTitle);
    const messagesForChat = messageData.get(chatTitle) || [];
    setCurrentMessages(messagesForChat);
  };

  const handleInputSubmit = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      position: "right",
      type: "text",
      title: "You",
      text: inputValue,
    };

    setCurrentMessages((currentMessages) => [...currentMessages, newMessage]);

    setMessageData((prevData) => {
      const updatedData = new Map(prevData);
      const currentConversation = updatedData.get(currentChat) || [];
      updatedData.set(currentChat, [...currentConversation, newMessage]);
      return updatedData;
    });

    setInputValue("");
    clearInputFunc();
  };

  return (
    <div className="schoolsage-chat">
      <SchoolSageHeader />
      <div className="schoolsage-chat-container">
        <div className="schoolsage-chat-list">
          <div className="user-interaction-container">
            <div className="user-interaction-message">
              <img
                className="user-interaction-message-icon"
                src="https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgSSD.gif"
              />
            </div>
            <div className="user-interaction-video">
              <img
                className="user-interaction-video-icon"
                src="https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgvideo-conference.gif"
              />
            </div>
            <div className="user-interaction-exit">
              <img
                className="user-interaction-exit-icon"
                src="https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imglogout.gif"
                onClick={navigateToNeedTutor}
              />
            </div>
          </div>
          <div className="chat-list-container">
            <ChatList
              className="chat-list"
              dataSource={chatListData}
              onClick={(e) => handleChatClick(e.title)}
            />
          </div>
        </div>
        <div className="schoolsage-chat-message-list">
          <div className="chat-detail-container">
            <Avatar
              className="chat-detail-avator"
              src={currentReceiver?.avatar}
              alt={currentReceiver?.alt}
              size="large"
              type="circle"
            />
            <div className="user-info-container">
              <span className="user-info-name">{currentReceiver?.title}</span>
              <span className="user-info-commute">
                Last seen: {formatDateDifference(currentReceiver?.date)}
              </span>
            </div>
            <div className="chat-detail-user-interaction">
              <img
                className="user-interaction-search"
                src="https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgsearch.png"
              />
              <img
                className="user-interaction-call"
                src="https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgadasda.png"
              />
              <img
                className="user-interaction-more"
                src="https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgmore.png"
              />
            </div>
          </div>
          <div className="message-list-container">
            <MessageList
              className="message-list"
              lockable={true}
              toBottomHeight={"100%"}
              dataSource={currentMessages}
            />
            <div className="input-container">
              <Input
                referance={inputRef}
                placeholder="Type here..."
                value={inputValue}
                multiline={false}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleInputSubmit()}
                clear={(clear) => setClearInputFunc(() => clear)}
                leftButtons={
                  <img
                    className="emoji-icon"
                    src="https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgxzchcsd.png"
                  />
                }
                rightButtons={
                  <img
                    className="send-icon"
                    src="https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgsend-message.png"
                    onClick={handleInputSubmit}
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolSageChat;
