import { useState, useEffect } from "react";
import "./History.css";

export default function History() {
  const [goalHistory, setGoalHistory] = useState([]);

  useEffect(() => {
    getHistory();
    console.log(goalHistory);
  }, []);

  function getHistory() {
    const loadedGoals = JSON.parse(localStorage.getItem("goalsHistory"));
    setGoalHistory(loadedGoals);
    console.log(loadedGoals);
  }

  return (
    <div className="history">
      <div className="historywrapper">
        {goalHistory.map((goal) => {
          return <div key={goal.name} className="historygoal"></div>;
        })}
      </div>
    </div>
  );
}
