import { useState } from "react";
import { Bar, CallButtons, Conversation, Message } from "../components";
import { useNavigate } from "react-router-dom";

export const Chat = () => {
  const navigate = useNavigate();

  const handleOnBackClick = () => {
    navigate("/");
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hello!",
      date: "2 hours ago",
      id: "1",
      isMine: true,
    },
    {
      content: "Hi!",
      date: "2 hours ago",
      id: "2",
      isMine: false,
    },
    {
      content: "How are you?",
      date: "2 hours ago",
      id: "3",
      isMine: true,
    },
    {
      content: "I'm fine, thanks!",
      date: "2 hours ago",
      id: "4",
      isMine: false,
    },
  ]);

  const handleOnSendMessageClick = (message: string) => {
    const newMessage: Message = {
      content: message,
      date: "now",
      id: String(messages.length + 1),
      isMine: true,
    };

    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex flex-col h-full mx-4 md:mx-auto md:max-w-3xl">
      <div className="mt-8">
        <Bar
          isOnline={true}
          lastSeenDate="2 hours ago"
          userName="Visiting User"
          onBackClick={handleOnBackClick}
        />
      </div>
      <div className="mt-8">
        <CallButtons
          onCallClick={() => alert("Calling...")}
          onVideoClick={() => alert("Video calling...")}
        />
      </div>
      <div className="flex-grow my-8">
        <Conversation
          onSendMessageClick={handleOnSendMessageClick}
          messages={messages}
        />
      </div>
    </div>
  );
};
