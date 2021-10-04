import React from "react";
import useCourses from "../../useCourses/useCourses";
import CourseContainer from "../CourseContainer/CourseContainer";

const Services = () => {
  const courses = useCourses();
  return (
    <div className="course-parent">
      {courses.map((course) => (
        <CourseContainer key={courses.id} courses={course}></CourseContainer>
      ))}
    </div>
  );
};

export default Services;
