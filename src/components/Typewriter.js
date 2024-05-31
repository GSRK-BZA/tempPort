import React, { useState, useEffect } from 'react';
import './Typewriter.css'; // Ensure to create a CSS file for the cursor animation

const Typewriter = ({heading}) => {
  const headings = heading;
  const [currentHeading, setCurrentHeading] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % headings.length;
      const fullText = headings[current];

      setCurrentHeading(isDeleting ? fullText.substring(0, currentHeading.length - 1) : fullText.substring(0, currentHeading.length + 1));

      setTypingSpeed(isDeleting ? 30 : 250);

      if (!isDeleting && currentHeading === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentHeading === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentHeading, isDeleting, loopNum, headings, typingSpeed]);

  return (
    <div className="typewriter">
      <h1>Hi This is Siva</h1>
      <h1>
        {currentHeading}
        <span className="cursor">|</span>
      </h1>
    </div>
  );
};

export default Typewriter;
