import React from "react";
import useCourses from "../../useCourses/useCourses";
import useInstructors from "../../useInstructors/useInstructors";
import CourseContainer from "../CourseContainer/CourseContainer";
import InstructorsContainer from "../InstructorsContainer/InstructorsContainer";
import "./Home.css";

const Home = () => {
  // import useCourses to load courses
  const allcourses = useCourses();

  // take only 4 from the courses
  const courses = allcourses.slice(0, 4);

  // import useInstructors to load Instructors
  const allInstructors = useInstructors();

  // take only 4 from instructors
  const instructors = allInstructors.slice(0, 4);

  return (
    <div>
      <h1 className="text-warning mt-3">Featured Courses</h1>
      <div className="course-parent">
        {/* map on courses to execute every item */}
        {courses.map((course) => (
          <CourseContainer key={courses.id} courses={course}></CourseContainer>
        ))}
      </div>
      <hr />
      <h1 className="text-warning">Featured Instructors</h1>
      <div className="course-parent">
        {/* map on instructors to execute every item */}
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
