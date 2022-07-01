import React from "react";

class RenderPractice extends React.Component {
  render() {
    return (
      <div className="practice">
        {this.props.practice.length > 0 && <h3>Practice</h3>}
        {this.props.practice.map((item) => {
          return (
            <div key={item.id} className="cvItem">
              <div className="cvHeader">
                <div className="cvTitle">{item.position}</div>
                <div className="cvMoreInfo">{item.company} | {item.startDate} - {item.endDate}</div>
              </div>
              <div className="cvDescription">{item.description}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default RenderPractice;