'use client';
import { useEffect, useRef, useState } from 'react';
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
  const [isLoaded, setIsLoaded] = useState(false);

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

  const handleRestartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  useEffect(() => {
    const videoElement = videoRef.current;

    const handleLoadedData = () => {
      if (!isLoaded) {
        console.log('Видео загружено и готово к воспроизведению');
        setIsLoaded(true);
      }
    };

    if (videoElement) {
      // Если видео уже загружено
      if (videoElement.readyState >= 3) {
        handleLoadedData();
      } else {
        // Устанавливаем обработчик события
        videoElement.addEventListener('loadeddata', handleLoadedData);
      }
    }

    // Удаляем обработчик при размонтировании
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadeddata', handleLoadedData);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center relative">
      <div className="absolute bottom-4 right-4 flex gap-2 z-10">
        {/* <button
          onClick={handleRestartVideo}
          disabled={!isLoaded}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RotateCcw />
        </button>
        <button
          onClick={handlePlayPauseToggle}
          disabled={!isLoaded}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPlaying ? <Play /> : <Pause />}
        </button> */}
        <button
          onClick={handleMuteToggle}
          disabled={!isLoaded}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isMuted ? <Volume /> : <Volume2 />}
        </button>
      </div>
      <video
        height={500}
        className="w-full"
        ref={videoRef}
        // poster={poster}
        autoPlay={isPlaying}
        muted={isMuted}
        playsInline
        loop
      >
        <source src={src} type={type} />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
};
