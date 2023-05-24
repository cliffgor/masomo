const CourseCard = ({ course }) => {
    const randomColorClass = ['text-red-500', 'text-green-500', 'text-blue-500', 'text-yellow-500'];
  
    const getRandomColorClass = () => {
      const randomIndex = Math.floor(Math.random() * randomColorClass.length);
      return randomColorClass[randomIndex];
    };
  
    return (
      <div className="bg-white p-4 rounded shadow">
        <div className={`h-40 bg-black flex items-center justify-center rounded-t ${getRandomColorClass()}`}>
          <h2 className="text-white text-xl font-bold">{course.title}</h2>
        </div>
        <div className="flex flex-col justify-between mt-4">
          <p className="text-gray-600">{course.description}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2">
            Enroll Now
          </button>
        </div>
      </div>
    );
  };
  
  export default CourseCard;
  