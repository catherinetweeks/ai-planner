// import { useState } from "react";
import "./App.css";
import CalendarLayout from "./components/Calendar/CalendarLayout";
import InputLayout from "./components/Input/InputLayout";

function App() {
  return (
    <div>
      <div className="flex flex-col">
        <InputLayout />
        <CalendarLayout />
      </div>
    </div>
  );
}

export default App;
