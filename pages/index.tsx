import React from "react";
import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsTwitter } from "react-icons/bs";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid h-screen w-screen grid-cols-12 px-56">
        <div className="col-span-3 pt-8">
          <div className="h-fit w-fit cursor-pointer rounded-full p-2 text-4xl transition-all hover:bg-gray-800">
            <BsTwitter />
          </div>

          {/* sidebar */}
          <div className="mt-4 px-4 text-2xl">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  key={item.title}
                  className="flex w-fit cursor-pointer items-center justify-start gap-4 rounded-full px-5 py-2 hover:bg-gray-800"
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 px-3">
              <button className="w-full rounded-full bg-[#1C9BEF] p-4 text-lg font-semibold">
                Tweet
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-6 border-l-[1px] border-r-[1px] border-gray-400"></div>

        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
