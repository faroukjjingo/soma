import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuizPlayer from '../components/quiz/QuizPlayer';
import { getQuizById } from '../services/quizApi';

const QuizPage = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await getQuizById(id);
        setQuiz(response);
      } catch (err) {
        console.error('Failed to fetch quiz:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, [id]);

  return (
    <div className="container mx-auto p-6">
      {loading ? (
        <p>Loading...</p>
      ) : quiz ? (
        <QuizPlayer quiz={quiz} />
      ) : (
        <p>Quiz not found.</p>
      )}
    </div>
  );
};

export default QuizPage;
