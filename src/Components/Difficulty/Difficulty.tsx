import { useState } from "react";
import { useTasksStore } from "../../store";
import "./Difficulty.scss";
import { Difficulties } from "../../Services/services";

const Difficulty = () => {
  const difficulties = ["EASY", "MEDIUM", "HARD"];
  const [buttonIsActive, setButtonIsActive] = useState([false, false, false]);
  const { setDifficulties } = useTasksStore();

  const buttonHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    const buttonText = event.currentTarget.textContent!;

    if (event && difficulties.includes(buttonText as Difficulties))
      localStorage.removeItem("position");
    setDifficulties(buttonText as Difficulties);
    setButtonIsActive((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <>
      {difficulties.map((difficulty, index) => {
        return (
          <button
            key={index}
            className={buttonIsActive[index] ? "btn active" : "btn"}
            onClick={(event) => buttonHandler(event, index)}
          >
            {difficulty}
          </button>
        );
      })}
    </>
  );
};

export default Difficulty;
