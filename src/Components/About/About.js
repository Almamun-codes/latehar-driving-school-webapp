import React from "react";

const About = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="w-50 pt-3 border m-2 bg-light">
          <h1 className="text-warning">Latehar Motor</h1>
          <p>
            Latehar Motor has been serving the people of America for 12 years
            now.
          </p>
          <p>
            We provide the best service in entire America.<br></br>
            We spreaded 20 different branches all over the country.
          </p>
          <p>
            We also provide best instructors over all the cities and all the
            instructors are very qualified.
          </p>
        </div>
        <div className="w-50">
          <img src="./logo.png" className="w-50" alt="logo" />
        </div>
      </div>
      <div>
        <hr />
        <h1 className="text-warning">Address</h1>
        <hr />
        <p>343,street name, city, country</p>
        <p>phone: 0123456789</p>
        <p>mail: somethin@gmail.com</p>
      </div>
    </div>
  );
};

export default About;
