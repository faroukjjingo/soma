import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import { submitQuiz } from '../../services/quizApi';

const QuizPlayer = ({ quiz }) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnswer = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
  };

  const handleSubmit = async () => {
    try {
      const response = await submitQuiz(quiz._id, answers);
      setResult(response);
      setSubmitted(true);
    } catch (err) {
      alert('Failed to submit quiz');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{quiz.title}</h2>
      {!submitted ? (
        <>
          {quiz.questions.map((question, index) => (
            <div key={question._id} className="mb-6">
              <p className="font-semibold mb-2">
                {index + 1}. {question.text}
              </p>
              <div className="space-y-2">
                {question.options.map((option, idx) => (
                  <label key={idx} className="flex items-center">
                    <input
                      type="radio"
                      name={question._id}
                      value={option}
                      checked={answers[question._id] === option}
                      onChange={() => handleAnswer(question._id, option)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <Button onClick={handleSubmit} disabled={Object.keys(answers).length !== quiz.questions.length}>
            Submit Quiz
          </Button>
        </>
      ) : (
        <div>
          <h3 className="text-xl font-semibold mb-4">Quiz Results</h3>
          <p>Score: {result.score}/{quiz.questions.length}</p>
          <p>Percentage: {(result.score / quiz.questions.length * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

QuizPlayer.propTypes = {
  quiz: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default QuizPlayer;
