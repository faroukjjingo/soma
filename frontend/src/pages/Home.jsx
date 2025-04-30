import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Soma</h1>
        <p className="text-lg text-gray-600 mb-6">
          Your ultimate platform for online learning and education.
        </p>
        <Link to="/courses">
          <Button>Explore Courses</Button>
        </Link>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Learn Anytime</h2>
          <p className="text-gray-600">
            Access courses 24/7 from anywhere in the world.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Expert Instructors</h2>
          <p className="text-gray-600">
            Learn from industry professionals and educators.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Track Progress</h2>
          <p className="text-gray-600">
            Monitor your learning progress with detailed analytics.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;