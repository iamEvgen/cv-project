import React from "react";
import PracticalItem from './PracticalItem'

function PracticalExperience(props) {
  const practiceItems = props.practice.map((item) => {
    return (
      <PracticalItem
        key={item.id}
        dataForItem={item}
        onInputsChange={(event) => props.onInputsChange(event, item.id, 'practice')}
        onDeleteFields={() => props.onDeleteFields(item.id, 'practice')}
      />
    )
  })

  return (
    <div className="Info">
      <h2>Practical experience</h2>
      {practiceItems}
      <button onClick={() => props.onAddFields('practice')}>
        Add
      </button>
    </div>
  )
}

export default PracticalExperience;