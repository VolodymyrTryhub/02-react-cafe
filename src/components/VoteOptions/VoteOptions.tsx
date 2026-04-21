import styles from "./VoteOptions.module.css";

type Props = {
  onVote: (type: "good" | "neutral" | "bad") => void;
  onReset: () => void;
  total: number;
};

function VoteOptions({ onVote, onReset, total }: Props) {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => onVote("good")}>
        Good
      </button>
      <button className={styles.button} onClick={() => onVote("neutral")}>
        Neutral
      </button>
      <button className={styles.button} onClick={() => onVote("bad")}>
        Bad
      </button>

      {total > 0 && (
        <button className={styles.reset} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default VoteOptions;
