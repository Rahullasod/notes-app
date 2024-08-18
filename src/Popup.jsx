import React, { useEffect, useRef, useState } from "react";
import "./Popup.css";

const Popup = ({ onClose, onCreateGroup }) => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#B38BFA"); // Default to first color

  const popupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose(); // Close the popup if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateGroup({ title, color });
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup" ref={popupRef}>
        <h2>Create New Notes Group</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Group Name</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Choose Color</label>
            <div className="color-options">
              <label>
                <input
                  className="radio-hide"
                  type="radio"
                  value="#B38BFA"
                  checked={color === "#B38BFA"}
                  onChange={(e) => setColor(e.target.value)}
                />
                <span className="color-swatch" style={{ backgroundColor: "#B38BFA" }}></span>
               
              </label>
              <label>
                <input
                  className="radio-hide"
                  type="radio"
                  value="#FF79F2"
                  checked={color === "#FF79F2"}
                  onChange={(e) => setColor(e.target.value)}
                />
                <span className="color-swatch" style={{ backgroundColor: "#FF79F2" }}></span>
                
              </label>
              <label>
                <input
                  className="radio-hide"
                  type="radio"
                  value="#43E6FC"
                  checked={color === "#43E6FC"}
                  onChange={(e) => setColor(e.target.value)}
                />
                <span className="color-swatch" style={{ backgroundColor: "#43E6FC" }}></span>
               
              </label>
              <label>
                <input
                  className="radio-hide"
                  type="radio"
                  value="#F19576"
                  checked={color === "#F19576"}
                  onChange={(e) => setColor(e.target.value)}
                />
                <span className="color-swatch" style={{ backgroundColor: "#F19576" }}></span>
          
              </label>
              <label>
                <input
                  className="radio-hide"
                  type="radio"
                  value="#0047FF"
                  checked={color === "#0047FF"}
                  onChange={(e) => setColor(e.target.value)}
                />
                <span className="color-swatch" style={{ backgroundColor: "#0047FF" }}></span>
           
              </label>
              <label>
                <input
                  className="radio-hide"
                  type="radio"
                  value="#6691FF"
                  checked={color === "#6691FF"}
                  onChange={(e) => setColor(e.target.value)}
                />
                <span className="color-swatch" style={{ backgroundColor: "#6691FF" }}></span>
              
              </label>
            </div>
          </div>
          <button type="submit" className="create-group-button">
            Create Group
          </button>
          <button
            type="button"
            className="close-popup-button"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
