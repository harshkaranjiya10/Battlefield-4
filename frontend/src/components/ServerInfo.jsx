import { useEffect, useState } from "react";
import axios from "axios";

// Reusable Component for displaying key-value pairs
function InfoSection({ title, data }) {
  return (
    <div className="w-auto h-auto pr-5 ">
      <div className="font-semibold text-[18px] pb-5 px-5 ">{title}</div>
      <div className="font-medium text-[16px] ">
        {data.map((item, index) => (
          <div key={index} className="w-auto h-[25.95px] border-white border-b-2 border-opacity-10 hover:bg-white hover:text-black">
            <div className="flex justify-between">
              <div className="px-5">{item.label}</div>
              <div className="px-5">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ServerInfo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://battlefield-4.vercel.app/api/v1/server-Info/");
        setData(res.data);
      } catch (error) {
        console.error("Error fetching server info:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }
  const { stats, advanced, setting, rules } = data;

  const settingData = [
    { label: "REGION", value: setting[0].region },
    { label: "PUNKBUSTER", value: setting[0].punkbuster },
    { label: "FAIRFIGHT", value: setting[0].fairfight },
    { label: "PASSWORD", value: setting[0].password },
    { label: "PRESET", value: setting[0].preset },
  ];

  const advancedData = [
    { label: "MINIMAP", value: advanced[0].minimap },
    { label: "ONLY SQUAD LEADER SPAWN", value: advanced[0].squad },
    { label: "VEHICLES", value: advanced[0].vehicles },
    { label: "TEAM BALANCE", value: advanced[0].balance },
    { label: "MINIMAP SPOTTIN", value: advanced[0].minimapS },
    { label: "HUD", value: advanced[0].hud },
    { label: "3P VEHICLE CAM", value: advanced[0].vehicleCam },
    { label: "REGENERATIVE HEALTH", value: advanced[0].regenrate },
    { label: "KILL CAM", value: advanced[0].killcam },
    { label: "FRIENDLY FIRE", value: advanced[0].friendly },
    { label: "3D SPOTTING", value: advanced[0].spotting },
    { label: "ENEMY NAME TAGS", value: advanced[0].enmy },
  ];

  const rulesData = [
    { label: "TICKETS", value: rules[0].tickers },
    { label: "VEHICLE SPAWN DELAY", value: rules[0].vehicleS },
    { label: "BULLET DAMAGE", value: rules[0].bullet },
    { label: "KICK AFTER TEAM KILLS", value: rules[0].kickT },
    { label: "PLAYER HEALTH", value: rules[0].health },
    { label: "PLAYER RESPAWN TIME", value: rules[0].respawn },
    { label: "KICK AFTER IDLE", value: rules[0].kickI },
    { label: "BAN AFTER KICKS", value: rules[0].ban },
  ];

  return (
    <div className="flex flex-col px-10">
      {/* Browser Breadcrumb */}
      <div className=" w-auto h-[85.06] font-Rajdhani font-semibold text-white flex flex-col pt-5 pb-10">
        <div className="flex text-[18px] w-auto h-[31px] leading-8">
          <div className="opacity-50 pr-[20px]">{"<"}</div>
          <div className="px-[10px]">MULTIPLAYER</div>
          <div className="px-[10px]">/</div>
          <div className="px-[10px]">SERVER BROWSER</div>
          <div className="px-[10px]">/</div>
        </div>
        <div className="text-[46px] w-auto h-[59px] leading-auto">
          SERVER INFO
        </div>
      </div>

      {/* Server Info */}
      <div className=" w-[1162px] md:w-[800px] h-auto flex flex-col pb-10">
        <div className="font-Rajdhani font-semibold text-[36px] md:text-[20px] w-auto text-white ">
          #1| NASA | Noobs Welcome | Conquest 40Hz
        </div>
        <div className="font-Rajdhani font-semibold opacity-80 w-auto text-[18px] md:text-[12px] leading-auto tracking-wider flex text-white">
          <img
            src="main__germany-flag.png"
            width={"30px"}
            height={"6.98px"}
            alt=""
            className="mr-2"
          />{" "}
          CONQUEST LARGE - SIEGE OF SHANGHAI - NORMAL - 40 HZ
        </div>
        <div className="font-Rajdhani font-semibold w-auto opacity-80 text-[18px] md:text-[12px] leading-auto tracking-wider text-white">
          Server protected by The_K-50 AntiCheat. Vip !Rules, Questions,
          Request, Appeal, Visit us: www.epg.gg | Discord
          https://discord.gg/3r5NK4d
        </div>
      </div>

      {/* Buttons */}
      <div className="md:w-[1100px h-[56px] md:h-auto flex justify-between font-Rajdhani font-semibold text-white text-[18px] md:text-[15px] pb-5">
        <div className="w-[324px] md:w-[280px] h-[56px] border-solid border-2 border-white border-opacity-20 flex justify-center items-center mr-[10px] hover:text-black hover:bg-white">
          JOIN
        </div>
        <div className="w-[324px] md:w-[280px] h-[56px] border-solid border-2 border-white border-opacity-20 flex justify-center items-center mr-[10px]  hover:text-black hover:bg-white">
          SPECTATE
        </div>
        <div className="w-[324px] md:w-[280px] h-[56px] border-solid border-2 border-white border-opacity-20 flex justify-center items-center mr-[10px]  hover:text-black hover:bg-white">
          JOIN AS COMMANDER
        </div>
        <div className="w-[166px] md:w-[150px] h-[56px] border-solid border-2 border-white border-opacity-20 flex justify-center items-center hover:text-black hover:bg-white">
          <img src="main__favorite.png" className="mr-[5px]" alt="" />
          13672
        </div> 
      </div>

      {/* Current Stats */}
      <div className="w-[508.5px] md:w-[550px] h-auto flex font-Rajdhani font-semibold text-white justify-between tracking-widest pb-2">
        <div>
          <div className="text-[18px] md:text-[12px]">PLAYERS</div>
          <div className="text-[30px] md:text-[23px]">{stats[0].players}/64</div>
        </div>
        <div>
          <div className="text-[18px] md:text-[12px]">PING</div>
          <div className="text-[30px] md:text-[23px]">{stats[0].ping}ms</div>
        </div>
        <div>
          <div className="text-[18px] md:text-[12px]">TICKRATE</div>
          <div className="text-[30px] md:text-[23px]">{stats[0].tickrate} HZ</div>
        </div>
      </div>

      {/* Settings, Advanced, Rules */}
      <div className="w-[1127px] md:w-[1000px] flex font-Rajdhani text-white justify-between tracking-wide pr-[5px] ">
        <InfoSection title="SETTINGS" data={settingData} />
        <InfoSection title="ADVANCED" data={advancedData} />
        <InfoSection title="RULES" data={rulesData} />
      </div>
    </div>
  );
}

export default ServerInfo;
