import React from "react";
import EduItem from './EduItem'

class EducationalExperience extends React.Component {
  render() {
    return (
      <div className="Info">
        <h2>Educational experience</h2>
        <EduItem />
        <button>Add</button>
      </div>
    ) 
  }
}

export default EducationalExperience;