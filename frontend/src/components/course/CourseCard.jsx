import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <img
        src={course.thumbnail || '/default-course.jpg'}
        alt={course.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
      <Link
        to={`/courses/${course._id}`}
        className="text-blue-600 hover:underline"
      >
        View Course
      </Link>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default CourseCard;
