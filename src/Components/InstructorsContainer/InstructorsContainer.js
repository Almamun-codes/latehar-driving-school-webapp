import React from "react";

const InstructorsContainer = (props) => {
  const { name, img, teacher } = props.instructors;
  return (
    <div className="m-3 shadow">
      <div className="card course h-100 p-2">
        <img src={img} className="img-fluid" alt="thumbnail" />
        <h2>{name}</h2>
        <h4>{teacher}</h4>
      </div>
    </div>
  );
};

export default InstructorsContainer;
