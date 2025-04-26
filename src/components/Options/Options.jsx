export default function Options({
  onClickFeedback,
  resetFeedback,
  totalFeedback,
}) {
  return (
    <>
      <button onClick={() => onClickFeedback('good')}>Goods</button>
      <button onClick={() => onClickFeedback('neutral')}>Neutral</button>
      <button onClick={() => onClickFeedback('bad')}>Bad</button>

      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </>
  );
}
