import React, { createContext, useContext, useState } from 'react';

const TutorContext = createContext();

export const TutorProvider = ({ children }) => {
  const [selectedTutors, setSelectedTutors] = useState([]);
  const [selectedNeedTutors, setSelectedNeedTutors] = useState([]);

  const addTutor = (tutor) => {
    setSelectedTutors((prevSelectedTutors) => [...prevSelectedTutors, tutor]);
  };
  const addNeedTutor = (tutor) => {
    setSelectedNeedTutors((prevSelectedNeedTutors) => [...prevSelectedNeedTutors, tutor]);
  };

  return (
    <TutorContext.Provider value={{ selectedTutors, setSelectedTutors, selectedNeedTutors, setSelectedNeedTutors, addTutor, addNeedTutor }}>
      {children}
    </TutorContext.Provider>
  );
};

export const useTutorContext = () => useContext(TutorContext);
