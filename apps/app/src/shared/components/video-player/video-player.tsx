'use client';
import { useRef, useState } from 'react';
import { Play, Volume2, Pause, Volume, RotateCcw } from 'lucide-react';

interface Props {
  src: string;
  type: string;
  poster: string;
}

export const VideoPlayer = ({ src, type, poster }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleMuteToggle = () => {
    if (videoRef.current) {
      const newMuteState = !videoRef.current.muted;
      videoRef.current.muted = newMuteState;
      setIsMuted(newMuteState);
    }
  };
  const handlePlayPauseToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleLoadVideo = () => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  };

  return (
    <div className="flex justify-center items-center relative">
      <div className="absolute top-10 left-4 flex gap-2 z-10">
        <button onClick={handleLoadVideo}>
          <RotateCcw />
        </button>
        <button onClick={handlePlayPauseToggle}>
          {isPlaying ? <Play /> : <Pause />}
        </button>
        <button onClick={handleMuteToggle}>
          {isMuted ? <Volume /> : <Volume2 />}
        </button>
      </div>
      <video
        className="w-full"
        ref={videoRef}
        poster={poster}
        autoPlay={isPlaying}
        muted={isMuted}
      >
        <source src={src} type={type} />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
};
