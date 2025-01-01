import { useEffect, useState } from "react";
import axios from "axios";

export function ServerInfo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/server-Info");
        setData(res.data);
        console.log(res.data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching server info:", error);
      }
    };

    fetchData();
  }, []);
  if(!data) {
    return <p>Loading...</p>;
  }
  const { stats, advanced, setting, rules } = data;
  return (
    <>
      {/* browser__breadcrumb */}
      <div className="absolute left-[131px] top-[36.26px] w-auto h-[85.06] font-Rajdhani font-semibold text-white flex flex-col justify-center ">
        <div className="flex text-[18px] w-auto h-[31px] leading-8">
          <div className="opacity-50 pr-[20px]">{"<"}</div>
          <div className="px-[10px]">MULTIPLAYER</div>
          <div className="px-[10px]">/</div>
          <div className="px-[10px]">SERVER BROWSER</div>
          <div className="px-[10px]">/</div>
        </div>

        <div className=" text-[46px] w-auto h-[59px] leading-auto">
          SERVER INFO
        </div>
      </div>

      {/* browser__SI-intro */}
      <div className="absolute top-[201.28px] left-[129.94px] w-[865px] h-[145.73px] flex flex-col justify-between ">
        <div className="font-Rajdhani font-semibold text-[36px] w-auto text-white">
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

      {/* browser__SI-buttons */}
      <div className="absolute w-[1162px] h-[56px] top-[380.54px] left-[131.36px] flex font-Rajdhani font-semibold text-white text-[18px]">
        <div className="w-[324px] h-[56px] border-solid border-2 border-white border-opacity-20 flex justify-center items-center mr-[10px]">
          JOIN
        </div>
        <div className="w-[324px] h-[56px] border-solid border-2 border-white border-opacity-20 flex justify-center items-center mr-[10px]">
          SPECTATE
        </div>
        <div className="w-[324px] h-[56px] border-solid border-2 border-white border-opacity-20 flex justify-center items-center mr-[10px]">
          JOIN AS COMMANDER
        </div>
        <div className="w-[324px] h-[56px] border-solid border-2 border-white border-opacity-20 flex justify-center items-center">
          <img src="main__favorite.png" className="mr-[5px]" alt="" />
          13672
        </div>
      </div>

      {/* browser__SI-current-stats */}
      <div className="absolute w-[508.5px] h-[52.05px] top-[463.75px] left-[129.94px] flex font-Rajdhani font-semibold text-white justify-between tracking-widest px-[20px]">
        <div className="">
          <div className="text-[18px]">PLAYERS</div>
          <div className="text-[30px]">{stats[0].players}/64</div>
        </div>
        <div className="">
          <div className="text-[18px]">PING</div>
          <div className="text-[30px]">{stats[0].ping}ms</div>
        </div>
        <div className=" ">
          <div className="text-[18px]">TICKRATE</div>
          <div className="text-[30px]">{stats[0].tickrate} {" HZ"} </div>
        </div>
      </div>

      {/* browser__SI-settings-w */}
      <div className="absolute left-[130px] top-[543.04px] flex font-Rajdhani text-white justify-between tracking-widest pt-[10px] px-[5px]">
        {/* browser__SI-settings */}
        <div className="w-auto h-[179.81px] ">
          <div className="font-semibold text-[18px] pb-5 px-5">SETTINGS</div>
          <div className="font-meduium text-[16px]">
            <div className="w-auto h-[25.95px] border-white border-b-2 border-opacity-10 bg-black">
              <div className="flex justify-between ">
                <div className="px-5">REGION</div>
                <div className="px-5">{setting[0].region}</div>
              </div>
            </div>
            <div className="w-auto h-[25.95px] border-white border-b-2 border-opacity-10 ">
              <div className="flex justify-between ">
                <div className="px-5">PUNKBUSTER</div>
                <div className="px-5">{setting[0].punkbuster}</div>
              </div>
            </div>
            <div className="w-auto h-[25.95px] border-white border-b-2 border-opacity-10 ">
              <div className="flex justify-between ">
                <div className="px-5">FAIRFIGHT</div>
                <div className="px-5">{setting[0].fairfight}</div>
              </div>
            </div>
            <div className="w-auto h-[25.95px] border-white border-b-2 border-opacity-10 ">
              <div className="flex justify-between ">
                <div className="px-5">PASSWORD</div>
                <div className="px-5">{setting[0].password}</div>
              </div>
            </div>
            <div className="w-auto h-[25.95px] border-white border-b-2 border-opacity-10 ">
              <div className="flex justify-between ">
                <div className="px-5">PRESET</div>
                <div className="px-5">{setting[0].preset}</div>
              </div>
            </div>
          </div>
        </div>

        {/* browser__SI-advanced */}
        <div className="w-auto h-[179.81px] ">
          <div className="font-semibold text-[18px] pb-5 px-5">ADVANCED</div>
          <div className="font-meduium text-[16px]">
            <div className="w-auto h-[25.95px] border-white border-b-2 border-opacity-10 bg-black">
              <div className="flex justify-between ">
                <div className="px-5">REGION</div>
                <div className="px-5">{advanced[0].squad}</div>
              </div>
            </div>
            <div className="w-auto h-[25.95px] border-white border-b-2 border-opacity-10 ">
              <div className="flex justify-between ">
                <div className="px-5">PUNKBUSTER</div>
                <div className="px-5">{advanced[0].squad}</div>
              </div>
            </div>
            <div className="w-auto h-[25.95px] border-white border-b-2 border-opacity-10 ">
              <div className="flex justify-between ">
                <div className="px-5">FAIRFIGHT</div>
                <div className="px-5">{advanced[0].squad}</div>
              </div>
            </div>
            <div className="w-auto h-[25.95px] border-white border-b-2 border-opacity-10 ">
              <div className="flex justify-between ">
                <div className="px-5">PASSWORD</div>
                <div className="px-5">{advanced[0].squad}</div>
              </div>
            </div>
            <div className="w-auto h-[25.95px] border-white border-b-2 border-opacity-10 ">
              <div className="flex justify-between ">
                <div className="px-5">PRESET</div>
                <div className="px-5">{advanced[0].squad}</div>
              </div>
            </div>
          </div>
        </div>


        {/* browser__SI-rules */}
        <div className="w-auto h-[179.81px] pr-10">
          <div className="font-semibold text-[18px] pb-5 px-5">RULES</div>
          <div className="font-meduium text-[16px] tracking-widest">
            <div className="w-auto h-[25.95px] border-white border-b-2 border-opacity-10 bg-black">
              <div className="flex justify-between ">
                <div className="px-5">TICKETS</div>
                <div className="px-5">{rules[0].tickers}</div>
              </div>
            </div>
            <div className="w-auto h-[25.95px] border-white border-b-2 border-opacity-10 ">
              <div className="flex justify-between ">
                <div className="px-5">VEHICLE SPAWN DELAY</div>
                <div className="px-5">{rules[0].vehicleS}</div>
              </div>
            </div>
            <div className="w-auto h-[25.95px] border-white border-b-2 border-opacity-10 ">
              <div className="flex justify-between ">
                <div className="px-5">BULLET DAMAGE</div>
                <div className="px-5">{rules[0].bullet}</div>
              </div>
            </div>
            <div className="w-auto h-[25.95px] border-white border-b-2 border-opacity-10 ">
              <div className="flex justify-between ">
                <div className="px-5">KICK AFTER TEAM KILLS</div>
                <div className="px-5">{rules[0].kickT}</div>
              </div>
            </div>
            <div className="w-auto h-[25.95px] border-white border-b-2 border-opacity-10 ">
              <div className="flex justify-between ">
                <div className="px-5">PLAYER HEALTH</div>
                <div className="px-5">{rules[0].health}</div>
              </div>
            </div>
            <div className="w-auto h-[25.95px] border-white border-b-2 border-opacity-10 ">
              <div className="flex justify-between ">
                <div className="px-5">PLAYER RESPAWN TIME</div>
                <div className="px-5">{rules[0].respawn}</div>
              </div>
            </div>
            <div className="w-auto h-[25.95px] border-white border-b-2 border-opacity-10 ">
              <div className="flex justify-between ">
                <div className="px-5">KICK AFTER IDLE</div>
                <div className="px-5">{rules[0].kickI}</div>
              </div>
            </div>
            <div className="w-auto h-[25.95px] border-white border-b-2 border-opacity-10 ">
              <div className="flex justify-between ">
                <div className="px-5">BAN AFTER KICKS</div>
                <div className="px-5">{rules[0].ban}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServerInfo;
