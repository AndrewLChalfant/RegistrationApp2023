import React, { useState, useEffect } from 'react';
import { StudentForm } from './components/StudentForm.tsx';
import { RosterTable } from './components/RosterTable.tsx';
import { mockData } from './constants.ts';
import './App.css';

const App = () => {
  const [studentData, setStudentData] = useState([]);
  const [showRoster, setShowRoster] = useState(false);

  // on page load hit API and store student data in state
  useEffect(() => {
    setStudentData(mockData);
  }, []);

  // add form submission to student state
  const appendStudents = (x) => {
    const copyStudents = [...studentData, x];
    setStudentData(copyStudents);
  }

  const showButtonTitle = showRoster ? "Hide Roster" : "Show Roster";

  return (
    <div className="App">
      <h1>Student Registration Site</h1>
      <StudentForm 
        onSubmit={(x) => appendStudents(x)}
      />
      <button 
        className="btn btn-dark"
        onClick={() => setShowRoster((showRoster) => !showRoster)}>
          {showButtonTitle}
      </button>
      {showRoster &&
        <RosterTable
          data={[...studentData]}
        />
      }
    </div>
  );
}

export default App;
