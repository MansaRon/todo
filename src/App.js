import './App.css';
import React, { useState } from "react";
import './notes/Notes.js';
import './newNotes/NewNotes.js';
import NewNotes from './newNotes/NewNotes.js';
import Notes from './notes/Notes.js';

function App() {

  // Empty array that we will use to populate the list
  const to_do_list = [
    {
      task: "Finish react course",
      date: new Date(2022, 1, 15)
    }
  ];


  // State to handle the new notes being added
  const [currentNoteData, newNoteData] = useState(to_do_list);

  const submitTask = (note) => {
    newNoteData((previousNoteData) => {
      return [note, ...previousNoteData];
    });
  }

  return (
    <div>
      <NewNotes onSubmitNote={submitTask} />
      <Notes items={currentNoteData} />
    </div>
  );
}

export default App;
