// import "./Sidebar.css"

// const Sidebar = ({
//   notes,
//   onAddNote,
//   onDeleteNote,
//   activeNote,
//   setActiveNote,
// }) => {
//   const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

//   return (
//     <div className="app-sidebar">
//       <div className="app-sidebar-header">
//         <h1 className="sideheading" >Pocket Notes</h1>
//         <button onClick={onAddNote}>Add</button>
//       </div>
//       <div className="app-sidebar-notes">
//         {sortedNotes.map(({ id, title, body, lastModified }, i) => (
//           <div
//             className={`app-sidebar-note ${id === activeNote && "active"}`}
//             onClick={() => setActiveNote(id)}
//           >
//             <div className="sidebar-note-title">
//               <strong>{title}</strong>
//               <button onClick={(e) => onDeleteNote(id)}>Delete</button>
//             </div>

//             <p>{body && body.substr(0, 100) + "..."}</p>
//             <small className="note-meta">
//               Last Modified{" "}
//               {new Date(lastModified).toLocaleDateString("en-GB", {
//                 hour: "2-digit",
//                 minute: "2-digit",
//               })}
//             </small>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import "./Sidebar.css";

const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1 className="sideheading">Pocket Notes</h1>
        <button onClick={onAddNote} className="create-notes-group-button">
          + Create Notes group
        </button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map(({ id, title, body, lastModified }, i) => (
          <div
            key={id}
            className={`app-sidebar-note ${id === activeNote && "active"}`}
            onClick={() => setActiveNote(id)}
          >
            <div className="sidebar-note-title">
              <div className="note-initials-container" >
                <div className="note-initials">
                  {title.split(" ").map(word => word.charAt(0)).join("").toUpperCase()}
                </div >
              </div>
              
              <div className="side-title-and-del">
                <strong>{title}</strong>
                { <button className="deletebtn" onClick={(e) => {
                  e.stopPropagation();
                  onDeleteNote(id);
                  }}>
                  -
                </button> }
              </div>  
            </div>
            {/* <p>{body && body.substr(0, 100) + "..."}</p> */}
            {/* <small className="note-meta">
              Last Modified{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

