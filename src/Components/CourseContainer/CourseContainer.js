import React from "react";
import "./CourseContainer.css";

const CourseContainer = (props) => {
  const { name, img, duration, rating, instructor } = props.courses;
  return (
    <div className="m-3 shadow">
      <div className="card course h-100">
        <img src={img} className="img-fluid" alt="thumbnail" />
        <h3>{name}</h3>
        <h4>By: {instructor}</h4>
        <p>Duration: {duration}</p>
        <p>{rating}</p>
        <button className="btn btn-warning mx-4">Enroll</button>
      </div>
    </div>
  );
};

export default CourseContainer;
