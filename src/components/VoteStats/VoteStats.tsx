import styles from "./VoteStats.module.css";

type Props = {
  votes: {
    good: number;
    neutral: number;
    bad: number;
  };
  total: number;
};

function VoteStats({ votes, total }: Props) {
  const positivePercentage =
    total === 0 ? 0 : Math.round((votes.good / total) * 100);

  return (
    <div className={styles.container}>
      <p>Good: {votes.good}</p>
      <p>Neutral: {votes.neutral}</p>
      <p>Bad: {votes.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
}

export default VoteStats;
