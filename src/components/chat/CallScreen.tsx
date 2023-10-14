import { Mic, MicOff, PhoneOff, Video, VideoOff } from "lucide-react";
import { useState } from "react";

export interface CallScreenProps {
  onEndCallClick: () => void;
}

export const CallScreen = (props: CallScreenProps) => {
  const { onEndCallClick } = props;

  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);

  const handleOnVideoClick = () => {
    setIsVideoEnabled(!isVideoEnabled);
  };

  const handleOnAudioClick = () => {
    setIsAudioEnabled(!isAudioEnabled);
  };

  return (
    <div className="flex items-center justify-center h-full bg-[#1C1A24]">
      <div className="">
        <div className="h-[400px] w-[800px] bg-slate-950">as</div>
        <div className="flex flex-row justify-center gap-16 mt-8">
          <button
            className="grid w-16 h-16 rounded-full bg-[#2E2940] place-content-center"
            onClick={handleOnVideoClick}
          >
            {isVideoEnabled ? (
              <Video size={24} color="white" />
            ) : (
              <VideoOff size={24} color="white" />
            )}
          </button>
          <button
            className="grid w-16 h-16 rounded-full bg-[#2E2940] place-content-center"
            onClick={handleOnAudioClick}
          >
            {isAudioEnabled ? (
              <Mic size={24} color="white" />
            ) : (
              <MicOff size={24} color="white" />
            )}
          </button>
          <button
            className="grid w-16 h-16 bg-red-500 rounded-full place-content-center"
            onClick={onEndCallClick}
          >
            <PhoneOff size={24} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};
