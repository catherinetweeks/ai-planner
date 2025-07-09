// import { useState } from "react";
import Sidebar from './components/Sidebar/Sidebar.tsx';
import DayTimeline from './components/Calendar/DayTimeline.tsx';
import "./App.css";

function App() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex basis-1/3">
          <Sidebar/>
        </div>
        <div className="flex basis-2/3">
          <DayTimeline/>
        </div>
      </div>
    </div>
  );
}

export default App;
