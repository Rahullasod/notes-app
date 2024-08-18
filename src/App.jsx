// import { useEffect, useState } from "react";
// import uuid from "react-uuid";
// import "./App.css";
// import Main from "./main/Main";
// import Sidebar from "./sidebar/Sidebar";

// function App() {
//   const [notes, setNotes] = useState(
//     localStorage.notes ? JSON.parse(localStorage.notes) : []
//   );
//   const [activeNote, setActiveNote] = useState(false);

//   useEffect(() => {
//     localStorage.setItem("notes", JSON.stringify(notes));
//   }, [notes]);

//   const onAddNote = () => {
//     const newNote = {
//       id: uuid(),
//       title: "Untitled Note",
//       body: "",
//       lastModified: Date.now(),
//     };

//     setNotes([newNote, ...notes]);
//     setActiveNote(newNote.id);
//   };

//   const onDeleteNote = (noteId) => {
//     setNotes(notes.filter(({ id }) => id !== noteId));
//   };

//   const onUpdateNote = (updatedNote) => {
//     const updatedNotesArr = notes.map((note) => {
//       if (note.id === updatedNote.id) {
//         return updatedNote;
//       }

//       return note;
//     });

//     setNotes(updatedNotesArr);
//   };

//   const getActiveNote = () => {
//     return notes.find(({ id }) => id === activeNote);
//   };

//   return (
//     <div className="App">
//       <Sidebar
//         notes={notes}
//         onAddNote={onAddNote}
//         onDeleteNote={onDeleteNote}
//         activeNote={activeNote}
//         setActiveNote={setActiveNote}
//       />
//       <Main 
//       activeNote={getActiveNote()} 
//       onUpdateNote={onUpdateNote} 
//       />
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";
import Popup from "./Popup"; // Adjust the import path as needed

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(true); // Popup shows on first load

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    setIsPopupOpen(true); // Show the popup instead of creating a note directly
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }
      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  const handleCreateGroup = (group) => {
    // Create the new group
    const newNote = {
      id: uuid(),
      title: group.title || "Untitled Note",
      body: [],
      lastModified: Date.now(),
      color: group.color, // Use selected color
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
    setIsPopupOpen(false); // Close the popup after creating the group
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main 
        activeNote={getActiveNote()} 
        onUpdateNote={onUpdateNote} 
      />
      {isPopupOpen && (
        <Popup
          onClose={() => setIsPopupOpen(false)}
          onCreateGroup={handleCreateGroup}
        />
      )}
    </div>
  );
}

export default App;

