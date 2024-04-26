import { useEffect, useState } from "react";
import { MdPause } from "react-icons/md";
import { MdPlayArrow } from "react-icons/md";

const NoteTimer = () => {
  const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let intervalId;
    if (!isPaused) {
      intervalId = setInterval(() => {
        // console.log("interval running");
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const handlePauseClick = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="flex flex-row justify-normal">
      <h1>Time elapsed: {count}s</h1>
      <span onClick={handlePauseClick} className="ml-4 border-solid border-2 border-gray-800 rounded">
        {isPaused ? <MdPlayArrow /> : <MdPause />}
      </span>
    </div>
  );
};

export default NoteTimer;
