// src/components/WorkWithMe.js
import React from 'react';
import { useHistory } from 'react-router-dom';

const WorkWithMe = () => {
  const history = useHistory();

  const navigateToContact = () => {
    history.push('/contact');
  };

  return (
    <button className="btn btn-primary" onClick={navigateToContact}>
      Work with me
    </button>
  );
};

export default WorkWithMe;
