import { Phone, Video } from "lucide-react";

export interface CallButtonsProps {
  onCallClick: () => void;
  onVideoClick: () => void;
}

export const CallButtons = (props: CallButtonsProps) => {
  const { onCallClick, onVideoClick } = props;

  return (
    <div className="flex justify-end gap-4 mt-8">
      <button
        className="w-12 h-12 rounded-full bg-[#2E2940] grid place-content-center"
        onClick={onCallClick}
      >
        <Phone color="#fff" size={24} />
      </button>
      <button
        className="w-12 h-12 rounded-full bg-[#2E2940] grid place-content-center"
        onClick={onVideoClick}
      >
        <Video color="#fff" size={24} />
      </button>
    </div>
  );
};
