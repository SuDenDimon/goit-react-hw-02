export default function Options({ onClickFeedback }) {
  return (
    <>
      <button onClick={() => onClickFeedback('good')}>Goods</button>
      <button onClick={() => onClickFeedback('neutral')}>Neutral</button>
      <button onClick={() => onClickFeedback('bad')}>Bad</button>
    </>
  );
}
