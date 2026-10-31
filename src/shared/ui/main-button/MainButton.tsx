import './MainButton.css'

export function MainButton({
  text,
  handleStart,
}: {
  text: string;
  handleStart?: () => void;
}) {
  return (
    <button onClick={handleStart} className="main_btn">
      {text}
    </button>
  );
}
