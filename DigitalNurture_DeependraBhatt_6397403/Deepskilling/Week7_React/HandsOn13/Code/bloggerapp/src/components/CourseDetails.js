import React from 'react';

function CourseDetails({ courses }) {
  // Conditional Rendering: if-else using variable
  
  let content;
  if (courses.length === 0) {
    content = <p>No courses available.</p>;
  } else {
    content = courses.map((course) => (
      <div key={course.id}>
        <h2>{course.name}</h2>
        <p>{course.date}</p>
      </div>
    ));
  }

  return (
    <div className="column">
      <h1>Course Details</h1>
      {content}
    </div>
  );
}

export default CourseDetails;
