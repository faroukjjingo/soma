import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseDetail from '../components/course/CourseDetail';
import { getCourseById, enrollCourse } from '../services/courseApi';

const CourseDetailPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await getCourseById(id);
        setCourse(response);
      } catch (err) {
        console.error('Failed to fetch course:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  const handleEnroll = async () => {
    try {
      await enrollCourse(id);
      alert('Enrolled successfully!');
    } catch (err) {
      alert('Failed to enroll');
    }
  };

  return (
    <div className="container mx-auto p-6">
      {loading ? (
        <p>Loading...</p>
      ) : course ? (
        <CourseDetail course={course} onEnroll={handleEnroll} />
      ) : (
        <p>Course not found.</p>
      )}
    </div>
  );
};

export default CourseDetailPage;
