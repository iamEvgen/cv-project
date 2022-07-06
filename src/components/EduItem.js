import React from "react";

function EduItem(props) {
  return (
    <div className="Info">
        <input 
          type='text'
          placeholder="Course / Program"
          name="course"
          onChange={props.onInputsChange}
          value={props.dataForItem.course}
        />
        <input 
          type='text'
          placeholder="University"
          name="university"
          onChange={props.onInputsChange}
          value={props.dataForItem.university}
        />
        <input 
          type='text'
          placeholder="Start date"
          name="startDate"
          onChange={props.onInputsChange}
          value={props.dataForItem.startDate}
        />
        <input 
          type='text'
          placeholder="End date"
          name="endDate"
          onChange={props.onInputsChange}
          value={props.dataForItem.endDate}
        />
        <textarea
          rows="3"
          placeholder="Description"
          name="description"
          onChange={props.onInputsChange}
          value={props.dataForItem.description}
        />
        <button 
          onClick={props.onDeleteFields}
          className="deleteButton"
        >
          Delete
        </button>
      </div>
  )
}

export default EduItem;