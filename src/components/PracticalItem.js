import React from "react";

class PracticalItem extends React.Component {
  render() {
    return (
      <div className="Info">
        <input 
          type='text'
          placeholder="Company"
          name="company"
        />
        <input 
          type='text'
          placeholder="Position"
          name="position"
        />
        <input 
          type='text'
          placeholder="Start date"
          name="startDate"
        />
        <input 
          type='text'
          placeholder="End date"
          name="endDate"
        />
        <textarea
          rows="3"
          placeholder="Description"
          name="description"
        />
        <button className="deleteButton">Delete</button>
      </div>
    )
  }
}

export default PracticalItem;