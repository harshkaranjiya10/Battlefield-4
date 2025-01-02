import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

export function Invite() {
  return (
    <div className="group font-Rajdhani text-white text-[12px] font-semibold pt-10 pr-10 h-screen w-auto hover:w-[220px] transition-all duration-500 ease-in-out bg-opacity-0 hover:bg-black hover:bg-opacity-70 overflow-hidden">
      <div className="w-[52px] h-auto flex flex-col justify-between pl-[20px]">
        {/* Line before Squad */}
        <div className="w-screen border-t border-gray-600  opacity-0 group-hover:opacity-100" />

        {/* Squad Section */}
        <div className="w-[40px] h-auto py-5" >
          <div className="flex flex-row-reverse justify-center items-center transition-opacity duration-500">
            <div className="px-2  opacity-0 group-hover:opacity-100">SQUAD</div>
            <img src="invite__Squad.png" className="w-auto" />
          </div>
          <div className="hover:bg-white hover:text-black w-[220px] h-auto flex justify-start items-center relative">
            <div className="w-[46px] h-auto text-black hover:bg-black hover:text-white bg-white ">
              <AiOutlinePlus className="text-xs w-[46px] h-[50px]  hover:bg-black" />
            </div>
            <div className="px-2 opacity-0 group-hover:opacity-100">
              <div className="hover:text-black">MaryJane</div>
              <div className="w-[220px] h-[20px] group-hover:opacity-50">Online</div>
            </div>
          </div>
        </div>

        {/* Line before Friend 1 */}
        <div className="w-screen border-t border-gray-600  opacity-0 group-hover:opacity-100" />

        {/* Friend 1 */}
        <div className="w-[40px] h-auto py-5" >
          <div className="flex flex-row-reverse justify-center items-center transition-opacity duration-500">
            <div className="px-2  opacity-0 group-hover:opacity-100">ONLINE</div>
            <img src="invite__online.png" className="w-[10px] h-[10px]" />
          </div>
          <div className="hover:bg-white hover:text-black w-[220px] h-auto flex justify-start items-center relative  border-l-[3px] border-solid border-green-500">
            <img
              src="invite__home-friend-profile1.png"
              width={46}
              height={50}
            />
            <div className="px-2 opacity-0 group-hover:opacity-100">
              <div className="hover:text-black">MaryJane</div>
              <div className="w-[220px] h-[20px] group-hover:opacity-50">Online</div>
            </div>
          </div>
        </div>

        {/* Line before Friend 2 */}
        <div className="w-screen border-t border-gray-600  opacity-0 group-hover:opacity-100" />

        {/* Friend 2 */}
        <div className="w-[40px] h-auto pt-5">
          <div className="flex flex-row-reverse justify-center items-center transition-opacity duration-500">
            <div className="px-2  opacity-0 group-hover:opacity-100">OFFLINE</div>
            <img src="invite__offline.png" className="w-[10px] h-[10px]" />
          </div>
          <div className="hover:bg-white hover:text-black w-[220px] h-auto flex justify-start items-center relative  border-l-[3px] border-solid border-orange-500">
            <img
              src="invite__home-friend-profile2.png"
              width={46}
              height={50}
            />
            <div className="px-2 opacity-0 group-hover:opacity-100">
              <div className="hover:text-black">420</div>
              <div className="w-[220px] h-[20px] group-hover:opacity-50">Offline</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invite;
