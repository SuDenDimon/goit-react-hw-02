import { useState } from 'react';
import './App.css';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <>
      <Description />
      <Options />
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
      />
    </>
  );
}
export default App;
