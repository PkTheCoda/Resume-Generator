import React from 'react'
import { useState, useEffect } from 'react'

function Information(props) {

  const [personalEducation, setPersonalEducation] = useState(
    {
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      phone: "",
      summary: "",
      school: "",
      field: "",
      gradDate: "",
      location: "",
      achievements: ""
    }
  )



  const [jobExperiences, setJobExperiences] = useState([
    {
      employer: "",
      role: "",
      from: "",
      to: "",
      location: "",
      responsibilites: ""
    }
  ])

  function handleChange(event) {
    setPersonalEducation(prevArray => {
      return {
        ...prevArray,
        [event.target.name] : event.target.value
      }
    })
  }



  return (
    <>
      <div className="information--holder"> 

        {/* PERSONAL INFORMATION HOLDER */}
        <div className="personal--holder holder">
          <h3 className="content--title">Personal Info:</h3>

          <input 
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstname" 
          />

          <input 
            type="text"
            placeholder="Last Name" 
            onChange={handleChange}
            name="lastname"
          />

          <input 
            type="email"
            placeholder="Your Email" 
            onChange={handleChange}
            name="email"
          />

          <input 
            type="text"
            placeholder="Address" 
            onChange={handleChange}
            name="address"
          />

          <input 
            type="text"
            placeholder="Phone #" 
            onChange={handleChange}
            name="phone"
          />

        <textarea 
            type="textarea"
            placeholder="A nice description of yourself . . ." 
            onChange={handleChange}
            name="summary"
          />

        </div>

        {/* JOB EXPERIENCES HOLDER */}
        <div className="experience--holder holder">
          <h3 className="content--title">Job Experience(s):</h3>

          <input 
            type="text"
            placeholder="Employer" 
          />

          <input 
            type="text"
            placeholder="Role or Job Title" 
          />

          <div className="label-input-pair">
            <label htmlFor="from-job">From:</label>
            <input 
              class="label-input"
              id="from-job"
              type="date" 
            />
          </div>

          <div className="label-input-pair">
            <label htmlFor="to-job">To:</label>
            <input 
              class="label-input"
              id="to-job"
              type="date" 
            />
          </div>

          <input 
            type="text"
            placeholder="Job Location"
          />

          <textarea 
            type="text"
            placeholder="What were your responsibilities and accomplishments?"
          />

          <button className="add--button button">Add Job Experience</button>

        </div>

        {/* EDUCATION HOLDER */}
        <div className="education--holder holder">
          <h3 className="content--title">Relevant Education:</h3>

          <input 
            type="text"
            placeholder="School/University" 
            onChange={handleChange}
            name="school"
          />

          <input 
            type="text"
            placeholder="Field of Study" 
            onChange={handleChange}
            name="field"
            
          />

          <div className="label-input-pair">
            <label htmlFor="grad--date">Graduation Date:</label>
            <input 
              class="label-input"
              type="date"
              placeholder="Graduation Date" 
              id="grad--date"
              onChange={handleChange}
              name="gradDate"
            />
          </div>

          <input 
            type="text"
            placeholder="Location" 
            onChange={handleChange}
            name="location"
          />

          <textarea
            placeholder="What are your academic achievements?"
            onChange={handleChange}
            name="achievements"
          />

        </div>

      </div>

      <div className="preview--holder"> 
        <div className="preview--modal">

          <div className="personal--preview preview--section">

            <h1 className="name--holder info-holder" style={{borderBottom: personalEducation.firstname !== "" ? "4px solid grey" : "0px solid grey"}}>{personalEducation.firstname} {personalEducation.lastname} </h1>

            <div className="email-phone-holder info-holder">{personalEducation.email} {personalEducation.phone}</div>

            {personalEducation.summary !== "" && <h2 className="info-holder summary-title">Summary:</h2>}
            
            <div className="summary-holder info-holder" style={{borderTop: personalEducation.summary !== "" ? "4px solid grey" : "0px solid grey"}}>{personalEducation.summary}</div>



          </div>

          <div className="jobs--preview preview--section">

          </div>

          <div className="education--preview preview--section">

            <h2 className="info-holder education--title">Education:</h2>

            <div className="school-location-holder info-holder">{personalEducation.school}, {personalEducation.field} {personalEducation.gradDate}</div>

            <div className="location--holder info-holder">{personalEducation.location}</div>

            <h3 className="info-holder achievement--title" style={{margin: "0.5em 0em 0.5em 0em", paddingBottom: "1em"}}>Achievements:</h3>
            <div className="info-holder">{personalEducation.achievements}</div>
          </div>


          


        </div>
      </div>
  </>
  )
}

export default Information