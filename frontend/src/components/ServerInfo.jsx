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
        const res = await axios.get("http://localhost:5000/api/v1/server-Info");
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
    <>
      {/* Browser Breadcrumb */}
      <div className="absolute left-[131px] top-[36.26px] w-auto h-[85.06] font-Rajdhani font-semibold text-white flex flex-col justify-center">
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
      <div>
        
      </div>
      <div className="absolute top-[201.28px] left-[129.94px] w-[1162px] h-[145.73px] flex flex-col justify-between">
        <div className="font-Rajdhani font-semibold text-[36px] w-auto text-white ">
          #1| NASA | Noobs Welcome | Conquest 40Hz
        </div>
        <div className="font-Rajdhani font-semibold opacity-80 w-auto text-[18px] leading-auto tracking-wider flex pt-[4px] text-white">
          <img
            src="main__germany-flag.png"
            width={"32px"}
            height={"7.98px"}
            alt=""
            className="mr-2"
          />{" "}
          CONQUEST LARGE - SIEGE OF SHANGHAI - NORMAL - 40 HZ
        </div>
        <div className="font-Rajdhani font-semibold w-auto opacity-80 text-[18px] leading-auto tracking-wider text-white pt-[4px]">
          Server protected by The_K-50 AntiCheat. Vip !Rules, Questions,
          Request, Appeal, Visit us: www.epg.gg | Discord
          https://discord.gg/3r5NK4d
        </div>
      </div>

      {/* Buttons */}
      <div className="absolute w-[1162px] h-[56px]  top-[380.54px] left-[131.36px] flex font-Rajdhani font-semibold text-white text-[18px]">
        <div className="w-[324px] h-[56px] border-solid border-2 border-white border-opacity-20 flex justify-center items-center mr-[10px]">
          JOIN
        </div>
        <div className="w-[324px] h-[56px] border-solid border-2 border-white border-opacity-20 flex justify-center items-center mr-[10px]">
          SPECTATE
        </div>
        <div className="w-[324px] h-[56px] border-solid border-2 border-white border-opacity-20 flex justify-center items-center mr-[10px]">
          JOIN AS COMMANDER
        </div>
        <div className="w-[166px] h-[56px] border-solid border-2 border-white border-opacity-20 flex justify-center items-center">
          <img src="main__favorite.png" className="mr-[5px]" alt="" />
          13672
        </div>
      </div>

      {/* Current Stats */}
      <div className="absolute w-[508.5px] h-[52.05px] top-[463.75px] left-[129.94px] flex font-Rajdhani font-semibold text-white justify-between tracking-widest">
        <div>
          <div className="text-[18px]">PLAYERS</div>
          <div className="text-[30px]">{stats[0].players}/64</div>
        </div>
        <div>
          <div className="text-[18px]">PING</div>
          <div className="text-[30px]">{stats[0].ping}ms</div>
        </div>
        <div>
          <div className="text-[18px]">TICKRATE</div>
          <div className="text-[30px]">{stats[0].tickrate} HZ</div>
        </div>
      </div>

      {/* Settings, Advanced, Rules */}
      <div className="absolute w-[1127px] left-[130px] top-[543.04px] flex font-Rajdhani text-white justify-between tracking-wide pt-[10px] pr-[5px] overflow-y-auto max-h-[calc(100vh-543px)]">
        <InfoSection title="SETTINGS" data={settingData} />
        <InfoSection title="ADVANCED" data={advancedData} />
        <InfoSection title="RULES" data={rulesData} />
      </div>
    </>
  );
}

export default ServerInfo;
