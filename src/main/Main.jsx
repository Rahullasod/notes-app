import "./Main.css"
import React from 'react';
function Main({ activeNote, onUpdateNote }) {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) return (
    <div className="no-active-note">
         <div className="noactiveimg">  </div>
         <h1 className="noactiveh1" >Pocket Notes</h1>
         <p className="noactivep" >Send and receive messages without keeping your phone online.
         Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p> 
         <div className="endnoactive" >
           <span className="lockimg" ></span>
           <h1 className="endline">end-to-end encrypted</h1>
         </div>
    </div>
  );
    return ( <div className="app-main">
    <div className="app-main-note-edit">
      {/* <input
        type="text"
        id="title"
        placeholder="Note Title"
        value={activeNote.title}
        onChange={(e) => onEditField("title", e.target.value)}
        autoFocus
      /> */}


      {/* Header */}
      <div className="Main-header">
        <div className="note-initials-container" >
          <div className="note-initials">
            {activeNote.title.split(" ").map(word => word.charAt(0)).join("").toUpperCase()};
          </div >
        </div>
      <h1 className="preview-title">{activeNote.title}</h1>
      </div>

      {/* Main Body */}

      <div className="app-main-note-preview">
        <div className="note-preview-container">
            <h1 className="preview-title">{activeNote.title}</h1>
            <div className="preview">
              {activeNote.body}
            </div>
        </div>
            
      </div>
      

       {/* Main Footer  */}

      <div className="Main-Footer" >
        <textarea
          id="body"
          placeholder="Enter your text here..........."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
        
    </div>
        
    </div>
    );
};

export default Main;