import PropTypes from 'prop-types';

const LessonPlayer = ({ lesson }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">{lesson.title}</h2>
      {lesson.videoUrl && (
        <video
          controls
          className="w-full h-64 mb-4 rounded-md"
          src={lesson.videoUrl}
        >
          Your browser does not support the video tag.
        </video>
      )}
      <div className="prose max-w-none">
        <p>{lesson.content}</p>
      </div>
      {lesson.resources && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
          <ul className="list-disc pl-5">
            {lesson.resources.map((resource, index) => (
              <li key={index}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

LessonPlayer.propTypes = {
  lesson: PropTypes.shape({
    title: PropTypes.string.isRequired,
    videoUrl: PropTypes.string,
    content: PropTypes.string,
    resources: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default LessonPlayer;
