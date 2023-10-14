import { Bar, CallButtons, Conversation } from "../components";
import { useNavigate } from "react-router-dom";

export const Chat = () => {
  const navigate = useNavigate();

  const handleOnBackClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col h-full mx-4 md:mx-auto md:max-w-3xl">
      <Bar
        isOnline={true}
        lastSeenDate="2 hours ago"
        userName="Visiting User"
        onBackClick={handleOnBackClick}
      />
      <CallButtons
        onCallClick={() => alert("Calling...")}
        onVideoClick={() => alert("Video calling...")}
      />
      <div className="flex-1">
        <Conversation
          onSendMessageClick={(message) => alert(message)}
          messages={[
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
          ]}
        />
      </div>
    </div>
  );
};
