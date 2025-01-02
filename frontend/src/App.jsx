import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import SideMenu from "./components/SideMenu";
import Invite from "./components/Invite";
import ServerInfo from "./components/ServerInfo";

function App() {
  return (
    <>
      <div className="bg-menu__background bg-cover bg-center min-h-screen w-full">
        <div className="bg-[#000C13] bg-opacity-[60%] min-h-screen w-full">
          <div className='flex justify-between'>
          <div className='flex h-screen'>
            <SideMenu />
            <ServerInfo />
          </div>
          <Invite />
          </div>
        </div>        
      </div>
    </>
  );
}

export default App;
