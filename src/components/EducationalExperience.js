import React from "react";
import EduItem from './EduItem'

class EducationalExperience extends React.Component {
  render() {
    const eduItems = this.props.education.map(item => {
      return (
        <EduItem
          key={item.id}
          dataForItem={item}
          onEduChange={(event) => this.props.onEduChange(event, item.id)}
          onDeleteEducation={() => this.props.onDeleteEducation(item.id)}
        />
      )
    })

    return (
      <div className="Info">
        <h2>Educational experience</h2>
        {eduItems}
        <button onClick={() => this.props.onAddEducation()}>Add</button>
      </div>
    ) 
  }
}

export default EducationalExperience;