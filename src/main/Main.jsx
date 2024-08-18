import "./Main.css";
import React, { useState } from "react";

function Main({ activeNote, onUpdateNote }) {
  const [tempContent, setTempContent] = useState("");

  const onEditField = (key, value) => {
    setTempContent(value);
  };

  const handleSend = () => {
    const newEntry = {
      text: tempContent,
      timestamp: Date.now(),
    };

    onUpdateNote({
      ...activeNote,
      body: [...(activeNote.body || []), newEntry],
      lastModified: Date.now(),
    });

    setTempContent("");
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).toUpperCase();
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  if (!activeNote)
    return (
      <div className="no-active-note">
        <div className="noactiveimg"></div>
        <h1 className="noactiveh1">Pocket Notes</h1>
        <p className="noactivep">
          Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4
          linked devices and 1 mobile phone
        </p>
        <div className="endnoactive">
          <span className="lockimg"></span>
          <h1 className="endline">end-to-end encrypted</h1>
        </div>
      </div>
    );

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        {/* Header */}
        <div className="Main-header">
          <div className="note-initials-container">
            <div className="note-initials">
              {activeNote.title
                .split(" ")
                .map((word) => word.charAt(0))
                .join("")
                .toUpperCase()}
            </div>
          </div>
          <h1 className="preview-title">{activeNote.title}</h1>
        </div>

        {/* Main Body */}
        <div className="app-main-note-preview">
          <div className="note-preview-container">
            {activeNote.body && activeNote.body.map((entry, index) => (
              <div key={index} className="note-entry">
                <small className="note-meta">
                  <div>{formatTime(entry.timestamp)}</div>
                  <div>{formatDate(entry.timestamp)}</div>
                </small>
                <div className="entry-text">{entry.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer */}
        <div className="Main-Footer">
          <textarea
            id="body"
            placeholder="Enter your text here..........."
            value={tempContent}
            onChange={(e) => onEditField("body", e.target.value)}
          />
          <button className="send-button" onClick={handleSend}></button>
        </div>
      </div>
    </div>
  );
}

export default Main;
