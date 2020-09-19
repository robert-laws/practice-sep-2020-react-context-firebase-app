import React from 'react';
import { useParams } from 'react-router-dom';

export const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            voluptate, tenetur similique libero deleniti laudantium omnis
            quaerat iste voluptates ipsum!
          </p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div>Posted by Bob Cobb</div>
          <div>19th September, 9am</div>
        </div>
      </div>
    </div>
  );
};
