export function SideMenu() {
  return (
    <div className="w-auto h-dvh flex flex-col justify-between pt-20  border-white border-r-2 border-opacity-20">
      <div className="h-auto">
        <div className="w-[58px] h-[240px] flex flex-col justify-between items-end">
          {/* <div className="bg-orange-500 w-[2px] h-[50px]" /> */}
          <img
            src="side-menu__bf-5.png"
            width={"40px"}
            height={"48px"}
            className="opacity-50 hover:opacity-100"
          />
          <img
            src="side-menu__bf-1.png"
            width={"40px"}
            height={"48px"}
            className="opacity-50 hover:opacity-100"
          />
          <img
            src="side-menu__bf-4.png"
            width={"40px"}
            height={"48px"}
            className="opacity-50 hover:opacity-100"
          />
          <img
            src="side-menu__bf-haroline.png"
            width={"40px"}
            height={"48px"}
            className="opacity-50 hover:opacity-100"
          />

        </div>
          <div className="w-[80px] h-[163px] flex flex-col justify-between items-center pt-8">
            <img
              src="side-menu__career.png"
              width={"40px"}
              height={"40px"}
              className="opacity-50 hover:opacity-100"
            />
            
            <img
              src="side-menu__Vector.png"
              width={"32.5px"}
              height={"32.5px"}
              className="opacity-50 hover:opacity-100"
            />
            <img
              src="side-menu__news.png"
              width={"32.5px"}
              height={"32.5px"}
              className="opacity-50 hover:opacity-100"
            />
            
          </div>
      </div>
      <div className=" pb-20">
        <div className="w-[50px] h-[70px] flex flex-col justify-between items-end ">
          <img
            src="side-menu__help.png"
            width={"22px"}
            height={"22px"}
            className="opacity-50 hover:opacity-100"
          />
          <img
            src="side-menu__quit.png"
            width={"22px"}
            height={"22px"}
            className="opacity-50 hover:opacity-100"
          />
        </div>
        {/* <div className="w-[1px] left-[87px] bg-black bg-gradient-to-b from-[rgba(255, 255, 255, 1)] to-[rgba(255, 255, 255, 0)]"></div> */}
      </div>
    </div>
  );
}

export default SideMenu;
