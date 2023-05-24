import { useEffect, useState } from 'react';
import supabase from '../lib/supabase';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase.from('courses').select('*');

      if (error) {
        console.error('Error fetching courses:', error);
      } else {
        setCourses(data);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Course List</h2>
      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <p>Category: {course.category}</p>
          <p>Price: ${course.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CourseList;
