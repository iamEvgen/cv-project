import React from "react";

class PracticalItem extends React.Component {
  render() {
    return (
      <div className="Info">
        <input 
          type='text'
          placeholder="Company"
          name="company"
          onChange={this.props.onInputsChange}
          value={this.props.dataForItem.company}
        />
        <input 
          type='text'
          placeholder="Position"
          name="position"
          onChange={this.props.onInputsChange}
          value={this.props.dataForItem.position}
        />
        <input 
          type='text'
          placeholder="Start date"
          name="startDate"
          onChange={this.props.onInputsChange}
          value={this.props.dataForItem.startDate}
        />
        <input 
          type='text'
          placeholder="End date"
          name="endDate"
          onChange={this.props.onInputsChange}
          value={this.props.dataForItem.endDate}
        />
        <textarea
          rows="3"
          placeholder="Description"
          name="description"
          onChange={this.props.onInputsChange}
          value={this.props.dataForItem.description}
        />
        <button
          className="deleteButton"
          onClick={this.props.onDeleteFields}
        >
          Delete
        </button>
      </div>
    )
  }
}

export default PracticalItem;