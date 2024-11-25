"use client";
import React from 'react';
import { FiHome } from "react-icons/fi";
import { CiGrid42 } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiChat3Line } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Header = () => {
  const pathname = usePathname();
  const data = [
    { name: "Home", path: "/profile", icon: <FiHome />, href: "/profile" },
    { name: "Grade", path: "/grade", icon: <CiGrid42 />, href: "/grade" },
    { name: "Calendar", path: "/calendar", icon: <FaRegCalendarAlt />, href: "/calendar" },
    { name: "Chats", path: "/chats", icon: <RiChat3Line />, href: "/chats" },
    { name: "Profile", path: "#", icon: <GoPerson />, href: "#" },
  ];
  return (
    <>
          <div className="w-full py-5 bg-[#FFFFFF] px-5 fixed bottom-0">
            <div className="flex items-center justify-between">
              {data.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={index} href={link.href || ""}>
                    <h4
                      className={`flex flex-col items-center gap-2 text-[12px] font-medium pb-2 popin hover:text-[#2C8D38] ${
                        isActive
                          ? "text-[#2C8D38] "
                          : "text-[#4C4D52]"
                      }`}
                    >
                      <span className={`text-[20px] ${
                        isActive
                          ? "text-[#2C8D38] "
                          : "text-[#768B82]"
                      }`}>{link.icon}</span>
                      {link.name}
                    </h4>
                  </Link>
                );
              })}
            </div>
          </div>
    </>
  );
};
export default Header;
