import { useState } from 'react';
import Button from '../common/Button';
import { createCourse } from '../../services/courseApi';

const CourseCreator = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    thumbnail: null,
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    if (formData.thumbnail) data.append('thumbnail', formData.thumbnail);

    try {
      await createCourse(data);
      setFormData({ title: '', description: '', thumbnail: null });
      setError('');
      alert('Course created successfully!');
    } catch (err) {
      setError(err.message || 'Failed to create course');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create Course</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="thumbnail" className="block text-gray-700">
            Thumbnail
          </label>
          <input
            type="file"
            id="thumbnail"
            name="thumbnail"
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            accept="image/*"
          />
        </div>
        <Button type="submit" className="w-full">
          Create Course
        </Button>
      </form>
    </div>
  );
};

export default CourseCreator;
