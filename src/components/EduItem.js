import React from "react";

class EduItem extends React.Component {
  render() {
    return (
      <div className="Info">
        <input 
          type='text'
          placeholder="Course / Program"
          name="course"
          onChange={this.props.onEduChange}
          value={this.props.dataForItem.course}
        />
        <input 
          type='text'
          placeholder="University"
          name="university"
          onChange={this.props.onEduChange}
          value={this.props.dataForItem.university}
        />
        <input 
          type='text'
          placeholder="Start date"
          name="startDate"
          onChange={this.props.onEduChange}
          value={this.props.dataForItem.startDate}
        />
        <input 
          type='text'
          placeholder="End date"
          name="endDate"
          onChange={this.props.onEduChange}
          value={this.props.dataForItem.endDate}
        />
        <textarea
          rows="3"
          placeholder="Description"
          name="description"
          onChange={this.props.onEduChange}
          value={this.props.dataForItem.description}
        />
        <button onClick={this.props.onDeleteEducation} className="deleteButton">Delete</button>
      </div>
    )
    
  }
}

export default EduItem;