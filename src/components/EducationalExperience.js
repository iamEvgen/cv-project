import React from "react";
import EduItem from './EduItem'

class EducationalExperience extends React.Component {
  render() {
    const eduItems = this.props.education.map(item => {
      return (
        <EduItem
          key={item.id}
          dataForItem={item}
          onInputsChange={(event) => this.props.onInputsChange(event, item.id, 'education')}
          onDeleteFields={() => this.props.onDeleteFields(item.id, 'education')}
        />
      )
    })

    return (
      <div className="Info">
        <h2>Educational experience</h2>
        {eduItems}
        <button onClick={() => this.props.onAddFields('education')}>
          Add
        </button>
      </div>
    ) 
  }
}

export default EducationalExperience;