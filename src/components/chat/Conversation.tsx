import clsx from "clsx";
import { SendHorizontal } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export interface Message {
  id: string;
  content: string;
  isMine: boolean;
  date: string;
}

export interface ConversationProps {
  onSendMessageClick: (message: string) => void;
  messages: Message[];
}

export const Conversation = (props: ConversationProps) => {
  const { onSendMessageClick, messages } = props;

  const listRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");

  const handleOnSendMessageClick = useCallback(() => {
    if (input.length > 0) {
      onSendMessageClick(input);
      setInput("");
    }
  }, [input, onSendMessageClick]);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleOnSendMessageClick();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [handleOnSendMessageClick]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="w-full h-full bg-[#242233] flex flex-col rounded-2xl">
      <div
        className="flex flex-col items-center flex-grow h-0 gap-1 px-4 py-2 overflow-y-auto"
        ref={listRef}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={clsx(
              message.isMine ? "ml-auto items-end" : "mr-auto items-start",
              "flex flex-col  justify-start"
            )}
          >
            <div
              className={clsx(
                message.isMine ? "bg-[#9781ED]" : "bg-[#372F4D]",
                "flex flex-col items-start justify-start px-4 py-2 rounded-2xl"
              )}
            >
              <p className="text-slate-100">{message.content}</p>
            </div>
            <p
              className={clsx(
                message.isMine ? "ml-auto" : "mr-auto",
                "text-xs text-slate-100 px-1"
              )}
            >
              {message.date}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-between h-12 gap-4 px-4 py-2 my-4 ">
        <div className="flex flex-row flex-1 items-center justify-between bg-[#2E2940] h-12 rounded-2xl">
          <input
            className="w-full px-4 bg-transparent outline-none text-slate-100"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button
          className="w-12 h-12 rounded-full bg-[#9781ED] grid place-content-center"
          onClick={handleOnSendMessageClick}
        >
          <SendHorizontal color="#fff" size={24} />
        </button>
      </div>
    </div>
  );
};
