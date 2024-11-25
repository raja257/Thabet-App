"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const AllchatContent = () => {
  const router = useRouter();

  const text =
    "Thank you for the update. I’ll make sure Sarah reviews her notes.";

  const chats = [
    {
      id: "parent-class-4b",
      name: "Amira Khalid (Sarah's Father)",
      role: "Parent - Class 4B",
      time: "2 Mins ago",
      image: "/chat/dp.svg",
      unread: 6,
    },
    {
      id: "student-class-4b",
      name: "Alex Khalid",
      role: "Student - Class 4B",
      time: "2 Mins ago",
      image: "/chat/student2-dp.svg",
      unread: 6,
    },
    {
      id: "student",
      name: "Ella Khalid",
      role: "Student",
      time: "2 Mins ago",
      image: "/chat/student3-dp.svg",
      unread: 6,
    },
  ];

  const handleCardClick = (chatId) => {
    router.push(`/chats/${chatId}`);
  };

  return (
    <div className="w-full">
      <div className="w-full mt-5">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="card mb-[16px] w-full flex justify-between items-center cursor-pointer"
            onClick={() => handleCardClick(chat.id)}
          >
            <div className="flex gap-3">
              <div className="flex justify-center items-center w-[56px] h-[56px] rounded-[16px] text-[#768B82] font-bold bg-[#E1E6E4]">
                <Image
                  src={chat.image}
                  alt={chat.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover rounded-[16px]"
                />
              </div>
              <div className="flex flex-col">
                <div className="w-full flex justify-between items-center mb-6px">
                  <span className="text-[#2C8D38] text-[10px] font-medium">
                    {chat.role}
                  </span>
                  <h3 className="text-[#5C7069] text-[10px] font-normal">
                    {chat.time}
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <h2 className="text-[#000000] text-[16px] font-medium">
                    {chat.name}
                  </h2>
                </div>
                <span className="flex gap-1 text-[#000000] text-[12px] font-medium">
                  <div className="bg-[#C7110E] w-[18px] h-[18px] rounded-full flex justify-center items-center">
                    <h6 className="text-[#FFFFFF] text-[12px] font-bold">
                      {chat.unread}
                    </h6>
                  </div>{" "}
                  {text.slice(0, 30)}...
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllchatContent;
