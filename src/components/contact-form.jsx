"use client";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";
import MusicPlayer from "./music-player";

const ContactForm = () => {
  const [message, setmessage] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [iphoneTime, setIphoneTime] = useState("");
  const [spotifyOpen, setspotifyOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      minutes = String(minutes).padStart(2, "0");
      const currentTime = `${hours}:${minutes}`;
      setIphoneTime(currentTime);
      const secondsUntilNextMinute = 60 - now.getSeconds();
      setTimeout(updateTime, secondsUntilNextMinute * 1000);
    };
    updateTime();
    return () => clearTimeout();
  }, []);

  const handleEmail = async (e) => {
    e.preventDefault();
    if (!message.trim() || !name.trim() || !email.trim()) {
      return toast({
        title: "Error",
        description: "Fill all the inputs",
      });
    }
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({ message, name, email }),
      });
      if (!res.ok) {
        return toast({
          title: "Error",
          description: "Error sending email, please try again.",
        });
      }
      toast({
        title: "Success",
        description: "Email sent successfully",
      });
      setmessage("");
      setname("");
      setemail("");
    } catch (error) {
      return toast({
        title: "Error",
        description: "Error sending email, please try again.",
      });
    }
  };

  return (
    <>
      <div className="lg:w-auto w-full">
        <div className="w-[420px] hidden lg:block text-white max-lg:w-full">
          <h2 className="text-6xl font-semibold">Contact now</h2>
          <p className="mt-2 text-sm text-gray-400">Send email now</p>
        </div>

        <form onSubmit={handleEmail} className="mt-2 w-[400px] max-lg:w-full">
          <label className="text-white text-xs">Name</label>
          <Input
            autoComplete="off"
            placeholder="Name"
            onChange={(e) => setname(e.target.value)}
            value={name}
            className="text-white mt-1 mb-4 border-gray-500"
          />
          <label className="text-white text-xs ">Email</label>
          <Input
            autoComplete="off"
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            className="text-white mt-1 mb-4 border-gray-500"
          />
          <div className="flex flex-1 flex-col w-full mt-4">
            <label className="text-white text-xs ">Message</label>
            <Textarea
              name="message"
              onChange={(e) => setmessage(e.target.value)}
              value={message}
              placeholder="Message"
              className="border text-white border-gray-500 pt-3 pl-4 pr-4 pb-3 resize-none w-full max-h-24 rounded-lg bg-transparent overflow-y-auto mt-1 focus:border-[#FCDC4D] focus:border-2"
              cols="30"
              rows="10"
            />
          </div>
          <Button
            type="submit"
            variant="bordered"
            className="rounded-lg mt-6 bg-[#FCDC4D] border-none text-black font-medium w-full hover:bg-[#cab454]"
          >
            Send
          </Button>
        </form>
      </div>
      <div className="w-[290px] max-lg:hidden h-[600px] iphone flex items-start overflow-hidden">
        <div className="bg-black w-[92%] h-[96%] m-auto mb-[13px] rounded-[35px] flex flex-col relative">
          <div className="flex justify-between mt-3 ml-5 mr-8">
            <p className="text-white text-sm">{iphoneTime}</p>
            <Image
              width={70}
              height={16}
              src="/phone/iphoneIcons.webp"
              className="object-cover"
              alt="Icons"
            />
          </div>
          <div
            className={`${
              spotifyOpen
                ? "w-[250px] h-[140px] rounded-3xl opacity-100"
                : "w-[150px] h-[28px] rounded-3xl opacity-0 spotifyanimation"
            } z-50 hover:cursor-pointer border transition-all top-2 absolute left-0 right-0 opacity-0 mx-auto border-1 border-gray-700 h-7 bg-black flex items-center justify-center px-2`}
          >
            {spotifyOpen ? (
              <MusicPlayer
                setspotifyOpen={setspotifyOpen}
                spotifyOpen={spotifyOpen}
              />
            ) : (
              <div
                onClick={() => setspotifyOpen(!spotifyOpen)}
                className="flex z-[100] items-center justify-between w-full"
              >
                <Image
                  width={16}
                  height={16}
                  src="/phone/spotify.webp"
                  alt="Spotify Quevedo"
                />
                <div className="spotifyContainer">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </div>
            )}
          </div>
          <div className="bg-gray-100/60 w-11/12 rounded-tl-lg mt-6 rounded-tr-lg h-2 m-auto relative z-10"></div>
          <div className="bg-white flex-1 rounded-b-[35px] rounded-t-lg px-4 chat pb-5 overflow-y-auto z-20 relative">
            <div className="w-8 h-1 bg-gray-400/80 rounded-md m-auto mt-2" />
            <p
              className="text-blue-700 text-sm hover:cursor-pointer"
              title="Cancel"
            >
              Cancel
            </p>
            <div className="flex items-center justify-between mt-4">
              <h5 className="font-bold text-2xl">New message</h5>
              <div className="w-8 h-8 bg-blue-500 hover:cursor-pointer flex justify-center items-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  width={13}
                >
                  <path
                    fill="#fff"
                    d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z"
                  />
                </svg>
              </div>
            </div>

            <div className="w-full border-b-2 text-xs border-gray-300 pb-2 flex mt-4">
              <p className="text-gray-800">To:</p>
              <span className="text-blue-500 ml-1">Rusher</span>
            </div>

            <div className="w-full border-b-2 text-xs border-gray-300 pb-2 mt-2">
              <p title={email} className="text-gray-800 truncate">
                {email === "From:" ? "" : `From: ${email}`}
              </p>
            </div>

            <div className="w-full border-b-2 text-xs border-gray-300 pb-2 mt-2">
              <p className="text-gray-800 truncate">
                Subject:
                <span className={`text-gray-600 font-medium ml-1 `}>
                  Message for rusher
                </span>
              </p>
            </div>

            <div className="mt-2">
              <p
                className={`${
                  message === "" ? "text-gray-500" : "text-black"
                } break-words text-sm`}
              >
                {message === "" ? "Type a message" : message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
