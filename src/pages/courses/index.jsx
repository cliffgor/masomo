import { useEffect, useState } from 'react';
import supabase, { getCourse } from '../../lib/supabase';
import CourseCard from '../../components/CourseCard';
import AuthLayout from '../../components/AuthLayout';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data, error } = await supabase.from("courses").select("*")

        if (error) {
          console.error('Error fetching courses:', error);
        } else {
          setCourses(data);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return ( 
    <AuthLayout>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
    </AuthLayout>
  );
};

export default CoursesPage;
