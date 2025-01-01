import React from "react";

export function Invite() {
  return (
    <div className="absolute top-[59px] right-[20px] w-[52px] h-[311px] flex flex-col justify-between">
      <div className="w-[50px] h-[80px]">
        <img src="invite__Squad.png" className="pb-[18.5px]" />
        <div className="flex justify-end items-center relative">
          <img src="home__join-default.png" width={46} height={50} />
        </div>
      </div>
      <div className="w-[50px] h-[80px]">
        <img src="invite__online.png" className="pb-[18.5px]" />
        <div className="flex justify-end items-center relative">
          <div className="absolute left-0 bg-green-500 w-[2px] h-[50px]" />
          <img src="invite__home-friend-profile1.png" width={46} height={50} />
        </div>
      </div>
      <div className="w-[50px] h-[80px]">
        <img src="invite__offline.png" className="pb-[18.5px]" />
        <div className="flex justify-end items-center relative">
          <div className="absolute left-0 bg-white w-[2px] h-[50px]" />
          <img src="invite__home-friend-profile2.png" width={46} height={50} />
        </div>
      </div>
    </div>
  );
}

export default Invite;
