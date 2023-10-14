import { ArrowLeft } from "lucide-react";
import { createAvatar } from "@dicebear/core";
import { pixelArt } from "@dicebear/collection";
import { useMemo } from "react";

export interface BarProps {
  onBackClick: () => void;
  userName: string;
  isOnline: boolean;
  lastSeenDate: string;
}

export const Bar = (props: BarProps) => {
  const { onBackClick, userName, isOnline, lastSeenDate } = props;

  const avatar = useMemo(() => {
    return createAvatar(pixelArt, {
      size: 128,
      seed: userName,
    }).toDataUriSync();
  }, [userName]);

  return (
    <div className="flex flex-row items-center justify-between">
      <button
        className="grid w-12 h-12 rounded-full place-items-center"
        onClick={onBackClick}
      >
        <ArrowLeft color="#fff" size={36} />
      </button>
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl font-bold text-slate-100">{userName}</p>
        <div className="flex flex-row items-center justify-center">
          {isOnline && (
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          )}
          {isOnline ? (
            <p className="ml-1 text-slate-100">Online</p>
          ) : (
            <p className="ml-1 text-slate-100">Last seen {lastSeenDate}</p>
          )}
        </div>
      </div>
      <div className="grid w-12 h-12 bg-gray-200 rounded-full place-items-center">
        <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  );
};
