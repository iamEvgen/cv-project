import React from "react";

function GeneralInfo(props) {
  return (
    <div className="Info">
      <h2>General info</h2>
      <input 
        type='text'
        placeholder="Name"
        name="name"
        onChange={props.onGeneralInfoChange}
        value={props.name}
      />
      <input 
        type='text'
        placeholder="Position"
        name="position"
        onChange={props.onGeneralInfoChange}
        value={props.position}
      />
      <input 
        type='text'
        placeholder="Phone"
        name="phone"
        onChange={props.onGeneralInfoChange}
        value={props.phone}
      />
      <input 
        type='email'
        placeholder="Email"
        name="email"
        onChange={props.onGeneralInfoChange}
        value={props.email}
      />
      <input 
        type='text'
        placeholder="Location"
        name="location"
        onChange={props.onGeneralInfoChange}
        value={props.location}
      />
      <textarea
        rows="5"
        placeholder="Description"
        name="description"
        onChange={props.onGeneralInfoChange}
        value={props.description}
      />
    </div>
  )
}

export default GeneralInfo;