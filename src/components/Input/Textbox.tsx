interface TextboxProps {
  value: string;
  onChange: (value: string) => void;
}

export function Textbox({ value, onChange }: TextboxProps) {
  return (
    <textarea
      className="flex justify-center w-full rounded-xl p-4 outline-1 outline-zinc-200 resize-none"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter your tasks or schedule prompt here..."
    />
  );
}