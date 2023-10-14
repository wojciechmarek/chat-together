import { useState } from "react";
import QRCode from "react-qr-code";
import { clsx } from "clsx";

export const Home = () => {
  const [isConnected] = useState(false);

  return (
    <div className="flex flex-col max-w-xs mx-auto md:max-w-none md:flex-row md:h-full md:justify-center md:items-center md:gap-16">
      <div className="mt-20 md:mt-0 md:max-w-md">
        <h1 className="text-4xl font-extrabold text-center text-stone-50 md:text-6xl">
          Chat Together
        </h1>
        <p className="mt-10 text-lg text-center md:mt-4 text-stone-50">
          Chat with your friends and family using real-time messaging and video.
        </p>
        <p
          className={`${clsx(
            isConnected && "md:hidden",
            "invisible pt-10 text-sm text-center md:visible text-stone-50"
          )}`}
        >
          Scan the QR code beside to start the chat
        </p>
      </div>

      {isConnected ? (
        <div className="flex flex-col gap-5 px-3 md:mt-0">
          <button className="py-4 font-semibold rounded-md text-stone-50 md:px-8 bg-emerald-600">
            Return to Chat
          </button>
          <button className="py-4 font-semibold bg-red-500 rounded-md text-stone-50 md:px-8">
            Disconnect
          </button>
        </div>
      ) : (
        <div className="md:mt-0">
          <div className="grid mx-auto rounded-md w-36 h-36 md:w-52 md:h-52 bg-stone-50 place-items-center">
            <QRCode
              value="https://https://chat-together-ten.vercel.app/chat"
              className="w-32 h-32 md:w-48 md:h-48"
            />
          </div>
          <p className="mt-10 text-sm text-center md:hidden text-stone-50">
            Scan the QR code above to start the chat
          </p>
        </div>
      )}
    </div>
  );
};
