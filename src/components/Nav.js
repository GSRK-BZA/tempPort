import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faConciergeBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="Ul">
        <li className="Li">
          <a href="#">
            <FontAwesomeIcon icon={faHome} /> Home
          </a>
        </li>
        <li className="Li">
          <a href="#">
            <FontAwesomeIcon icon={faInfoCircle} /> About
          </a>
        </li>
        <li className="Li">
          <a href="#">
            <FontAwesomeIcon icon={faConciergeBell} /> Services
          </a>
        </li>
        <li className="Li">
          <a href="#">
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
