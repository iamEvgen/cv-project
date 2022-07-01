import React from "react";

class RenderEducation extends React.Component {
  render() {
    return (
      <div className="education">
        {this.props.education.length > 0 && <h3>Education</h3>}
        {this.props.education.map((item) => {
          return (
            <div key={item.id} className="cvItem">
              <div className="cvHeader">
                <div className="cvTitle">{item.course}</div>
                <div className="cvMoreInfo">{item.university} | {item.startDate} - {item.endDate}</div>
              </div>
              <div className="cvDescription">{item.description}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default RenderEducation;