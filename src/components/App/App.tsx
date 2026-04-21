import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";
import styles from "./App.module.css";

type Votes = {
  good: number;
  neutral: number;
  bad: number;
};

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: "good" | "neutral" | "bad") => {
    setVotes((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const handleReset = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const total = votes.good + votes.neutral + votes.bad;

  return (
    <div className={styles.container}>
      <CafeInfo />

      <VoteOptions onVote={handleVote} onReset={handleReset} total={total} />

      {total === 0 ? (
        <Notification />
      ) : (
        <VoteStats votes={votes} total={total} />
      )}
    </div>
  );
}

export default App;
