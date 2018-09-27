import React from 'react'

const ShowNumber = ({count, onClose}) => (
  <div className="show-number">
      <p>Modal is clicked {count} number of times.</p>
      <button onClick={onClose}>Close</button>
  </div>
)

export default ShowNumber
