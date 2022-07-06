import React from "react";
import EduItem from './EduItem'

function EducationalExperience(props) {
  const eduItems = props.education.map(item => {
    return (
      <EduItem
        key={item.id}
        dataForItem={item}
        onInputsChange={(event) => props.onInputsChange(event, item.id, 'education')}
        onDeleteFields={() => props.onDeleteFields(item.id, 'education')}
      />
    )
  })

  return (
    <div className="Info">
      <h2>Educational experience</h2>
      {eduItems}
      <button onClick={() => props.onAddFields('education')}>
        Add
      </button>
    </div>
  )

}

export default EducationalExperience;