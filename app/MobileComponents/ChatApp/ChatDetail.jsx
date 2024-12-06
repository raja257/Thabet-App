"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

const ChatDetail = () => {
  // const params = useParams();
  const [reciever, setReciever] = useState('');

  
  console.log(reciever,"recieverrr")
  const chatName = reciever;
  const other_user = chatName;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  console.log(messages,"hello mesg")
  const [userData, setUserData] = useState(null);
  const [logged_in_user, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setUserData(storedData);
      setLoggedInUser(storedData._id); // Extract and set logged-in user ID
    }
  }, []);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      const newMessage = { text: message, timestamp: new Date().toLocaleTimeString() };
      setMessages([...messages, newMessage]);
      console.log(newMessage, "Sent Message");
      createChat(newMessage);
      setMessage("");
    }
  };

  const createChat = async (data) => {
    try {
      const response = await fetch("http://localhost:8000/chat/new_chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message:data.text, other_user, logged_in_user }),
      });

      if (!response.ok) {
        throw new Error("Failed to create chat");
      }

      const result = await response.json();
      console.log("API Response (createChat):", result);
    } catch (error) {
      console.error("Error creating chat:", error.message);
      alert("There was an error creating the chat. Please try again.");
    }
  };

  const getChat = async (other_user) => {
    try {
      const response = await fetch("http://localhost:8000/chat/get_chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ logged_in_user, other_user }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch chats");
      }

      const result = await response.json();
      console.log("API Response (getChat):", result.data);
      setMessages(result.data)
    } catch (error) {
      console.error("Error fetching chats:", error.message);
      alert("There was an error fetching chats. Please try again.");
    }
  };

  // Call getChat only when logged_in_user is set
  useEffect(() => {
     // Ensure window is defined (to avoid errors during SSR)
     if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const recieverValue = params.get('reciever');
      setReciever(recieverValue); // Update state with the reciever value
      if (logged_in_user) {
        getChat(recieverValue);
      }
    }

  }, [logged_in_user]);

  return (
    <>
      <div className="w-full bg-[#0B2810] rounded-bl-[20px] rounded-br-[20px] py-5 px-5">
        <div className="main-profile-bell w-full flex items-center justify-between">
          <div className="flex items-center text-[#FFFF] gap-2">
            <Link href="/chats">
              <FaArrowLeft className="text-[22px] text-[#C2CDC8]" />
            </Link>
            <div className="flex gap-3">
              <Image src="/chat/dp.svg" alt="" width={40} height={40} className="w-[40px] h-[40px] rounded-[12px]" />
              <div>
                <h2 className="text-[#FFFFFF] text-[14px] font-medium">Amira Khalid</h2>
                <span className="text-[12px] text-[#C4EEC9] font-medium">Parent</span>
              </div>
            </div>
          </div>
          <BiPhoneCall className="text-[#FFFFFF] text-[24px]" />
        </div>
      </div>

      <div className="w-full flex items-center gap-5 px-5 py-4 border-b-[1px] border-[#E1E6E4]">
        <div className="flex items-center gap-3">
          <Image src="/chat/student3-dp.svg" alt="" width={40} height={40} className="w-[40px] h-[40px] rounded-[12px]" />
          <div>
            <h2 className="text-[#000000] text-[14px] font-medium">Sarah Khalid</h2>
          </div>
        </div>
        <button className="text-[12px] text-[#5C7069] font-medium px-4 py-2 border-[1px] border-[#E1E6E4] bg-[#F6F7F7] rounded-full">
          Class 4A
        </button>
      </div>

      <div className="chat-part w-full h-[550px] overflow-y-scroll py-10 px-5">
        <h1 className="text-[#B6BBB8] text-[14px] font-semibold text-center">Today</h1>
        {messages?.map((msg, index) => (
          <div key={index} className={`mt-[12px] ${index % 2 === 0 ? "text-left" : "text-right"}`}>
            <div
              className={`inline-flex gap-3 py-4 px-3 rounded-[12px] ${
                index % 2 === 0 ? "bg-[#E1E6E4] rounded-br-[12px]" : "bg-[#262C2A] rounded-bl-[12px]"
              }`}
            >
              <h3
                className={`text-[16px] font-medium break-words ${
                  index % 2 === 0 ? "text-[#262C2A]" : "text-[#FFFFFF]"
                }`}
              >
                {msg.messages}
              </h3>
              <span className="text-[#768B82] text-[8px] font-semibold whitespace-nowrap pt-1">
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Send Message Area */}
      <div className="flex justify-center items-end">
        <div className="w-full flex items-center px-4 py-3 border-t-[1px] border-[#E5E5E8] bg-[#FFFFFF]">
          <button className="flex justify-center items-center w-[40px] h-[40px] rounded-[12px] bg-[#43A047] mr-2">
            <FaPlus className="text-[#FFFF] font-semibold text-[20px]" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type here..."
            className="flex-grow px-4 py-2 border-[1px] border-[#E1E6E4] rounded-[8px] bg-white outline-none text-[#262C2A]"
          />
          <FiSend
            onClick={handleSendMessage}
            className="text-[#3C4945] text-[24px] cursor-pointer ml-3 mt-1"
          />
        </div>
      </div>
    </>
  );
};

export default ChatDetail;
