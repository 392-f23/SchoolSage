import SchoolSageHeader from "../SchoolSageHeader/SchoolSageHeader";
import "react-chat-elements/dist/main.css";
import { ChatList, MessageList, Input } from "react-chat-elements";
import "./SchoolSageChat.less";

const SchoolSageChat = () => {
  return (
    <div className="schoolsage-chat">
      <SchoolSageHeader />
      <div className="schoolsage-chat-container">
        <div className="schoolsage-chat-list">
          <ChatList
            className="chat-list"
            dataSource={[
              {
                avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
                alt: "kursat_avatar",
                title: "Kursat",
                subtitle:
                  "Why don't we go to the No Way Home movie this weekend ?",
                date: new Date(),
                unread: 3,
              },
            ]}
          />
        </div>
        <div className="schoolsage-chat-message-list">
          <MessageList
            className="message-list"
            lockable={true}
            toBottomHeight={"100%"}
            dataSource={[
              {
                position: "left",
                type: "text",
                title: "Kursat",
                text: "Give me a message list example !",
              },
              {
                position: "right",
                type: "text",
                title: "Emre",
                text: "That's all.",
              },
            ]}
          />
          <Input
            placeholder="Type here..."
            multiline={true}
            rightButtons={<button className="send-button">Send</button>}
          />
        </div>
      </div>
    </div>
  );
};

export default SchoolSageChat;
