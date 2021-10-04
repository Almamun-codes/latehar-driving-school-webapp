import useInstructors from "../../useInstructors/useInstructors";
import InstructorsContainer from "../InstructorsContainer/InstructorsContainer";

const Instructors = () => {
  const instructors = useInstructors();

  return (
    <div className="course-parent">
      {instructors.map((instructor) => (
        <InstructorsContainer
          key={instructors.id}
          instructors={instructor}
        ></InstructorsContainer>
      ))}
    </div>
  );
};

export default Instructors;
