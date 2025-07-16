import { useState } from "react";
import { Textbox } from "./Textbox";
import { SubmitButton } from "./SubmitButton";
import Title from "./Title";

export function InputLayout() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8000/generate-schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      setResponse(data.response);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="bg-zinc-100 rounded-xl flex flex-col gap-4 p-10">
      <Title />
      <Textbox value={input} onChange={setInput} />
      <SubmitButton onClick={handleSubmit} disabled={!input.trim()} />
      {response && (
        <div className="mt-4 p-2 border rounded whitespace-pre-wrap">
          {response}
        </div>
      )}
    </div>
  );
}