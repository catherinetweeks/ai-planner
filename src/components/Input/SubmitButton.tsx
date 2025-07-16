interface SubmitButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export function SubmitButton({ onClick, disabled }: SubmitButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-white flex justify-center w-full p-3 rounded-xl cursor-pointer mt-3"
    >
      Submit
    </button>
  );
}