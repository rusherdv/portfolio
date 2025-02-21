"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const songs = [
  {
    name: "IGUALES",
    artist: "Quevedo",
    duration: 183,
    image: "/phone/bn.webp",
  },
  {
    name: "Gran Via",
    artist: "Quevedo",
    duration: 213,
    image: "/phone/bn.webp",
  },
  {
    name: "HALO",
    artist: "Quevedo",
    duration: 181,
    image: "/phone/bn.webp",
  },
  {
    name: "Buenas Noches",
    artist: "Quevedo",
    duration: 238,
    image: "/phone/bn.webp",
  },
  {
    name: "Columbia",
    artist: "Quevedo",
    duration: 186,
    image: "/phone/columbia.webp",
  },
  {
    name: "AHORA QUÉ",
    artist: "Quevedo",
    duration: 171,
    image: "/phone/dqe.webp",
  },
  {
    name: "LISBOA",
    artist: "Quevedo",
    duration: 156,
    image: "/phone/dqe.webp",
  },
  {
    name: "YANKEE",
    artist: "Quevedo",
    duration: 188,
    image: "/phone/dqe.webp",
  },
  {
    name: "PUNTO G",
    artist: "Quevedo",
    duration: 138,
    image: "/phone/dqe.webp",
  },
  {
    name: "BUENAS",
    artist: "Quevedo ft. Saiko",
    duration: 187,
    image: "/phone/buenas.webp",
  },
];

function MusicPlayer({ setspotifyOpen, spotifyOpen }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const intervalRef = useRef(null);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime + 1 >= currentSong.duration) {
            clearInterval(intervalRef.current);
            handleNext();
            return 0;
          }
          return prevTime + 1;
        });
      }, 1000);
    } else if (!isPlaying && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, currentSongIndex]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (currentSongIndex < songs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
      setCurrentTime(0);
      setIsPlaying(true);
    } else {
      // Si es la última canción, pausa y reinicia el tiempo
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  const handlePrev = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
      setCurrentTime(0);
      setIsPlaying(true);
    } else {
      // Si es la primera canción, reinicia al principio
      setCurrentTime(0);
      setIsPlaying(true);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = ("0" + Math.floor(time % 60)).slice(-2);
    return `${minutes}:${seconds}`;
  };

  const progressPercentage = (currentTime / currentSong.duration) * 100;

  return (
    <div className="w-11/12 relative">
      <div
        onClick={() => {
          if (spotifyOpen) {
            setspotifyOpen(false);
          }
        }}
        className={`bg-white ${
          spotifyOpen ? "block" : "hidden"
        } w-12 mx-auto mb-2 h-[2px] rounded-lg`}
      />
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <Image
            width={50}
            height={50}
            className="rounded-xl"
            src={currentSong.image || "/default.jpg"}
            alt={currentSong.name}
          />
          <div>
            <p className="text-sm text-white">{currentSong.name}</p>
            <p className="text-xs text-gray-400">{currentSong.artist}</p>
          </div>
        </div>
        <div className="spotifyContainer">
          {/* Aquí podrías agregar una animación de barras si está reproduciendo */}
          {isPlaying && (
            <div className="spotifyContainer">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center text-gray-400 mt-2 gap-2">
        <p className="text-[10px]">{formatTime(currentTime)}</p>
        <div className="h-[5px] w-full bg-gray-600 rounded-lg overflow-hidden">
          <div
            className="bg-green-500 h-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-[10px]">{formatTime(currentSong.duration)}</p>
      </div>
      <div className="flex items-center m-auto mt-2 justify-between w-6/12">
        {/* Botón de anterior */}
        <button onClick={handlePrev}>
          <svg
            width={20}
            height={20}
            className="text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3l0 41.7 0 41.7L459.5 440.6zM256 352l0-96 0-128 0-32c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-64z"
            />
          </svg>
        </button>
        {/* Botón de play/pausa */}
        <button onClick={handlePlayPause}>
          {isPlaying ? (
            <svg
              width={20}
              height={20}
              className="text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M48 64C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48h-32z"
              />
            </svg>
          ) : (
            <svg
              width={20}
              height={20}
              className="text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M361 215C375.4 224.6 384 240.2 384 256s-8.6 31.4-23 41L55 471c-10.5 7-23.7 8-35.1 2.5S0 454.4 0 440V72C0 57.6 8.6 43.9 22.9 34.5s24.6-4.4 35.1 2.5l306 178z"
              />
            </svg>
          )}
        </button>
        {/* Botón de siguiente */}
        <button onClick={handleNext}>
          <svg
            width={20}
            height={20}
            className="text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416L0 96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3l0 41.7 0 41.7L52.5 440.6zM256 352l0-96 0-128 0-32c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29l0-64z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default MusicPlayer;
