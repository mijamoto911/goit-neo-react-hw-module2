const Options = ({ setFeedback }) => {
  const handleFeedback = (type) => {
    setFeedback((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  return (
    <div className="btn">
      <button onClick={() => handleFeedback('good')}>Good</button>
      <button onClick={() => handleFeedback('neutral')}>Neutral</button>
      <button onClick={() => handleFeedback('bad')}>Bad</button>
      <button onClick={() => setFeedback({ good: 0, neutral: 0, bad: 0 })}>
        Reset
      </button>
    </div>
  );
};

export default Options;
