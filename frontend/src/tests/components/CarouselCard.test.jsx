import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CourseCard from '../../components/course/CourseCard';

describe('CourseCard', () => {
  const course = {
    _id: '1',
    title: 'Test Course',
    description: 'Test Description',
    thumbnail: '/test.jpg',
  };

  test('renders course title and description', () => {
    render(
      <MemoryRouter>
        <CourseCard course={course} />
      </MemoryRouter>
    );
    expect(screen.getByText('Test Course')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  test('renders link to course', () => {
    render(
      <MemoryRouter>
        <CourseCard course={course} />
      </MemoryRouter>
    );
    expect(screen.getByText('View Course')).toHaveAttribute('href', '/courses/1');
  });
});
