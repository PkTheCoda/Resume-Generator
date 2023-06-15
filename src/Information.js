import React from 'react'
import { useState } from 'react'

function Information(props) {

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



  return (
    <>
      <div className="information--holder"> 

        {/* PERSONAL INFORMATION HOLDER */}
        <div className="personal--holder holder">
          <h3 className="content--title">Personal Info:</h3>

          <input 
            type="text"
            placeholder="First Name" 
          />

          <input 
            type="text"
            placeholder="Last Name" 
          />

          <input 
            type="email"
            placeholder="Your Email" 
          />

          <input 
            type="email"
            placeholder="Address" 
          />

          <input 
            type="text"
            placeholder="Phone #" 
          />

        <textarea 
            type="textarea"
            placeholder="A nice description of yourself . . ." 
          />

        </div>

        {/* JOB EXPERIENCES HOLDER */}
        <div className="experience--holder holder">
          <h3 className="content--title">Job Experience:</h3>

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
          />

          <input 
            type="text"
            placeholder="Field of Study" 
          />

          <div className="label-input-pair">
            <label htmlFor="grad--date">Graduation Date:</label>
            <input 
              class="label-input"
              type="date"
              placeholder="Graduation Date" 
              id="grad--date"
            />
          </div>

          <input 
            type="text"
            placeholder="Location" 
          />

          <textarea
            placeholder="What are your academic achievements?"
          />

        </div>

      </div>

      <div className="preview--holder"> 
        Hi
      </div>
  </>
  )
}

export default Information