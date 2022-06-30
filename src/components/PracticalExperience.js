import React from "react";
import PracticalItem from './PracticalItem'

class PracticalExperience extends React.Component {
  render() {
    const practiceItems = this.props.practice.map((item) => {
      return (
        <PracticalItem
          key={item.id}
          dataForItem={item}
          onInputsChange={(event) => this.props.onInputsChange(event, item.id, 'practice')}
          onDeleteFields={() => this.props.onDeleteFields(item.id, 'practice')}
        />
      )
    })

    return (
      <div className="Info">
        <h2>Practical experience</h2>
        {practiceItems}
        <button onClick={() => this.props.onAddFields('practice')}>
          Add
        </button>
      </div>
    )
  }
}

export default PracticalExperience;