import React from 'react';
import './Base64Sidebar.css';

function Sidebar({ history, onDelete }) {
  return (
    <div className="sidebar-container">
      <h2>History</h2>
      <ul className="sidebar-history-list">
        {history.map((item, index) => (
          <li key={index} className="sidebar-history-item">
            <strong>{item.action}:</strong> {item.text}
            <button onClick={() => onDelete(index)} className="sidebar-delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
