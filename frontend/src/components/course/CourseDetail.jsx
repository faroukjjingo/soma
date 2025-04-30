import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const CourseDetail = ({ course, onEnroll }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img
        src={course.thumbnail || '/default-course.jpg'}
        alt={course.title}
        className="w-full h-60 object-cover rounded-md mb-4"
      />
      <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
      <p className="text-gray-700 mb-4">{course.description}</p>
      <p className="text-gray-600 mb-4">
        Instructor: {course.instructor?.name || 'Unknown'}
      </p>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Lessons</h3>
        <ul className="list-disc pl-5">
          {course.lessons?.map((lesson) => (
            <li key={lesson._id}>
              <Link
                to={`/courses/${course._id}/lessons/${lesson._id}`}
                className="text-blue-600 hover:underline"
              >
                {lesson.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Button onClick={onEnroll}>Enroll Now</Button>
    </div>
  );
};

CourseDetail.propTypes = {
  course: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    thumbnail: PropTypes.string,
    instructor: PropTypes.shape({
      name: PropTypes.string,
    }),
    lessons: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  onEnroll: PropTypes.func.isRequired,
};

export default CourseDetail;
