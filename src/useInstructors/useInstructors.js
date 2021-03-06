import { useEffect, useState } from "react";

const useInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("instructors.JSON")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return instructors;
};

export default useInstructors;
