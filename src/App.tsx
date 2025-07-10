// import { useState } from "react";
import "./App.css";
import CalendarLayout from "./components/Calendar/CalendarLayout";
import InputLayout from "./components/Input/InputLayout";

function App() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="p-10 basis-1/3 min-w-sm">
          <InputLayout />
        </div>
        <div className="p-10 basis-2/3">
          <CalendarLayout />
        </div>
      </div>
    </div>
  );
}

export default App;
