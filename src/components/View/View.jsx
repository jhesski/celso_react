import React from 'react';
import './View.css';

function View({children}) {
  return (
    <div className="View">
      {children}
    </div>
  );
}

export default View;
