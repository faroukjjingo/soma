import api from './api';

export const getCourses = async () => {
  const response = await api.get('/courses');
  return response.data;
};

export const getCourseById = async (id) => {
  const response = await api.get(`/courses/${id}`);
  return response.data;
};

export const createCourse = async (courseData) => {
  const response = await api.post('/courses', courseData);
  return response.data;
};

export const enrollCourse = async (courseId) => {
  const response = await api.post(`/courses/${courseId}/enroll`);
  return response.data;
};

export const getEnrolledCourses = async () => {
  const response = await api.get('/courses/enrolled');
  return response.data;
};

export const getInstructorCourses = async () => {
  const response = await api.get('/courses/instructor');
  return response.data;
};
