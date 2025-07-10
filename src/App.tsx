// import { useState } from "react";
import "./App.css";
import CalendarLayout from "./components/Calendar/CalendarLayout";
import InputLayout from "./components/Input/InputLayout";

function App() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="p-10 ml-10 basis-2/5 min-w-sm">
          <InputLayout />
        </div>
        <div className="p-10 mr-10 basis-3/5">
          <CalendarLayout />
        </div>
      </div>
    </div>
  );
}

export default App;
