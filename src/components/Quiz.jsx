import { useCallback, useRef, useState } from "react";
import QUESTIONS from "../questions2";
import Summary from "./Summary";
import Question from "./Question";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const QuizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(answer),
    [handleSelectAnswer]
  );

  if (QuizIsComplete) {
    return (
      <Summary userAnswers = {userAnswers} />
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
