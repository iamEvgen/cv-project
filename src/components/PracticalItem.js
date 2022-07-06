import React from "react";

function PracticalItem(props) {
  return (
    <div className="Info">
      <input 
        type='text'
        placeholder="Company"
        name="company"
        onChange={props.onInputsChange}
        value={props.dataForItem.company}
      />
      <input 
        type='text'
        placeholder="Position"
        name="position"
        onChange={props.onInputsChange}
        value={props.dataForItem.position}
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
        className="deleteButton"
        onClick={props.onDeleteFields}
      >
        Delete
      </button>
    </div>
  )
}

export default PracticalItem;