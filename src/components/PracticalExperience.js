import React from "react";
import PracticalItem from './PracticalItem'

class PracticalExperience extends React.Component {
  render() {
    return (
      <div className="Info">
        <h2>Practical experience</h2>
        <PracticalItem />
        <button>Add</button>
      </div>
    )
  }
}

export default PracticalExperience;