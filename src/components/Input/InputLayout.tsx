import Title from "./Title.tsx";
import Textbox from "./Textbox.tsx";
import SubmitButton from "./SubmitButton.tsx";

function InputLayout() {
  return (
    <div>
      <div 
      className="flex flex-col bg-zinc-100 rounded-xl p-10"
      >
        <Title />
        <Textbox />
        <SubmitButton />
      </div>
    </div>
  );
}

export default InputLayout;