import { useState } from "react";
export function SideMenu() {
  // Which Game is open (bf-1,4,5,haroline)
  const [open, setOpen] = useState(4);
  const handleClick = (index) => {
    setOpen(index); // Set the open value to the index of the clicked image
  };
  return (
    <div className="w-auto h-dvh flex flex-col justify-between pt-20  border-white border-r-2 border-opacity-20">
      <div className="h-auto">
        <div className="w-[58px] h-[240px] flex flex-col justify-between items-end">
          <div className="group relative flex justify-between w-[58px] h-[48px]">
            {open === 5 ? (
              <div className="bg-orange-600 w-[2px] h-[50px]" />
            ) : (
              <div></div>
            )}
            <img
              src="side-menu__bf-5.png"
              width={"40px"}
              height={"48px"}
              className={
                open === 5 ? "opacity-100" : "opacity-50 hover:opacity-100"
              }
              onClick={() => handleClick(5)} // Click sets open to 5
            />
            <span className="mx-4 my-4 p-1 font-Rajdhani w-auto bg-black absolute left-[50px] top-0 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              BATTLEFIELD5
            </span>
          </div>

          <div className=" group relative flex justify-between w-[58px] h-[48px]">
            {open === 1 ? (
              <div className=" bg-orange-600 w-[2px] h-[50px]" />
            ) : (
              <div></div>
            )}
            <img
              src="side-menu__bf-1.png"
              width={"40px"}
              height={"48px"}
              className={
                open === 1 ? "opacity-100" : "opacity-50 hover:opacity-100"
              }
              onClick={() => handleClick(1)} // Click sets open to 1
            />
            <span className="mx-4 my-4 p-1 font-Rajdhani w-auto bg-black absolute left-[50px] top-0 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              BATTLEFIELD1
            </span>
          </div>

          <div className="group relative flex justify-between w-[58px] h-[48px]">
            {open === 4 ? (
              <div className=" bg-orange-600 w-[2px] h-[50px]" />
            ) : (
              <div></div>
            )}
            <img
              src="side-menu__bf-4.png"
              width={"40px"}
              height={"48px"}
              className={
                open === 4 ? "opacity-100" : "opacity-50 hover:opacity-100"
              }
              onClick={() => handleClick(4)} // Click sets open to 4
            />
            <span className="z-20 mx-4 my-4 p-1 font-Rajdhani w-auto bg-black absolute left-[50px] top-0 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              BATTLEFIELD4
            </span>
          </div>

          <div className="group relative flex justify-between w-[58px] h-[48px]">
            {open === 2015 ? (
              <div className=" bg-orange-600 w-[2px] h-[50px]" />
            ) : (
              <div></div>
            )}
            <img
              src="side-menu__bf-haroline.png"
              width={"40px"}
              height={"48px"}
              className={
                open === 2015 ? "opacity-100" : "opacity-50 hover:opacity-100"
              }
              onClick={() => handleClick(2015)} // Click sets open to 2015 haroline
            />
            <span className="z-20 mx-4 my-4 p-1 font-Rajdhani w-auto bg-black absolute left-[50px] top-0 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 tracking-wider">
              BATTLEFIELD HAROLINE
            </span>
          </div>
        </div>
        <div className="w-[80px] h-[163px] flex flex-col justify-between items-center pt-8">
          <div className="group relative pt-5">
            <img
              src="side-menu__career.png"
              width={"40px"}
              height={"40px"}
              className="opacity-50 hover:opacity-100"
            />
            <span className="mx-2 p-1 font-Rajdhani w-auto bg-black absolute left-[40px] -top-1 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 tracking-wider">
              CARRER
            </span>
          </div>
          <div className="group relative pt-5">
            <img
              src="side-menu__Vector.png"
              width={"40px"}
              height={"40px"}
              className="opacity-50 hover:opacity-100"
            />

            <span className="mx-2 p-1 font-Rajdhani w-auto bg-black absolute left-[40px] -top-1 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 tracking-wider">
              WATCH
            </span>
          </div>
          <div className="group relative pt-5">
            <img
              src="side-menu__news.png"
              width={"40px"}
              height={"40px"}
              className="opacity-50 hover:opacity-100"
            />
            <span className="mx-2 p-1 font-Rajdhani w-auto bg-black absolute left-[40px] -top-1 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 tracking-wider">
              NEWS
            </span>
          </div>
        </div>
      </div>{" "}
      <div className="pb-20">
        <div className="w-[50px] h-[70px] flex flex-col justify-between items-end ">
          <div className="group relative ">
            <img
              src="side-menu__help.png"
              width={"22px"}
              height={"22px"}
              className="opacity-50 hover:opacity-100"
            />
            <span className="mx-2 p-1 font-Rajdhani w-auto bg-black absolute left-[30px] -top-1 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 tracking-wider">
              HELP
            </span>
          </div>
          <div className="group relative ">
            <img
              src="side-menu__quit.png"
              width={"22px"}
              height={"22px"}
              className="opacity-50 hover:opacity-100"
            />
            <span className="mx-2 p-1 font-Rajdhani w-auto bg-black absolute left-[30px] -top-1 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 tracking-wider">
              QUIT
            </span>
          </div>
        </div>
        {/* <div className="w-[1px] left-[87px] bg-black bg-gradient-to-b from-[rgba(255, 255, 255, 1)] to-[rgba(255, 255, 255, 0)]"></div> */}
      </div>
    </div>
  );
}

export default SideMenu;
