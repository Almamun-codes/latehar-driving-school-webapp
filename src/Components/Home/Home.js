import React from "react";
import useCourses from "../../useCourses/useCourses";
import useInstructors from "../../useInstructors/useInstructors";
import CourseContainer from "../CourseContainer/CourseContainer";
import InstructorsContainer from "../InstructorsContainer/InstructorsContainer";
import "./Home.css";

const Home = () => {
  const allcourses = useCourses();
  const courses = allcourses.slice(0, 4);
  const allInstructors = useInstructors();
  const instructors = allInstructors.slice(0, 4);

  return (
    <div>
      <h1 className="text-warning mt-3">Featured Courses</h1>
      <div className="course-parent">
        {courses.map((course) => (
          <CourseContainer key={courses.id} courses={course}></CourseContainer>
        ))}
      </div>
      <hr />
      <h1 className="text-warning">Featured Instructors</h1>
      <div className="course-parent">
        {instructors.map((instructor) => (
          <InstructorsContainer
            key={instructor.id}
            instructors={instructor}
          ></InstructorsContainer>
        ))}
      </div>
    </div>
  );
};

export default Home;
