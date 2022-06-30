import React from "react";

class EduItem extends React.Component {
  render() {
    return (
      <div className="Info">
        <input 
          type='text'
          placeholder="Course / Program"
          name="course"
        />
        <input 
          type='text'
          placeholder="University"
          name="university"
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

export default EduItem;