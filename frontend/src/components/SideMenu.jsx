export function SideMenu() {
  return (
    <div className="w-[120px] h-dvh">
      <MenuGames />
      <Other />
      <Misc />
      <div className="absolute h-full w-[1px] left-[87px] bg-black bg-gradient-to-b from-[rgba(255, 255, 255, 1)] to-[rgba(255, 255, 255, 0)]"></div>
    </div>
  );
}

function MenuGames() {
  return (
    <div className="absolute top-[207.92px] left-[3.03px] w-[58px] h-[240px] flex flex-col justify-between items-end ">
      <div className="absolute left-0 bg-orange-500 w-[2px] h-[50px]" />
      <img src="side-menu__bf-5.png" width={"40px"} height={"48px"} className="opacity-50 hover:opacity-100"/>
      <img src="side-menu__bf-1.png" width={"40px"} height={"48px"} className="opacity-50 hover:opacity-100"/>
      <img src="side-menu__bf-4.png" width={"40px"} height={"48px"} className="opacity-50 hover:opacity-100"/>
      <img src="side-menu__bf-haroline.png" width={"40px"} height={"48px"} className="opacity-50 hover:opacity-100"/>
    </div>
  );
}

function Other() {
  return (
    <div className="absolute top-[468.37px] left-[21.33px] w-[40px] h-[163px] flex flex-col justify-between items-center ">
      <img src="side-menu__career.png" width={"40px"} height={"40px"} className="opacity-50 hover:opacity-100"/>
      <img src="side-menu__Vector.png" width={"32.5px"} height={"32.5px"} className="opacity-50 hover:opacity-100"/>
      <img src="side-menu__news.png" width={"32.5px"} height={"32.5px"} className="opacity-50 hover:opacity-100"/>
    </div>
  );
}
function Misc() {
  return (
    <div className="absolute bottom-[27.53px] left-[33.41px] w-[90px] h-[70px] flex flex-col justify-between items-start">
      <img src="side-menu__help.png" width={"22px"} height={"22px"} className="opacity-50 hover:opacity-100"/>
      <img src="side-menu__quit.png" width={"22px"} height={"22px"} className="opacity-50 hover:opacity-100"/>
    </div>
  );
}

export default SideMenu;
