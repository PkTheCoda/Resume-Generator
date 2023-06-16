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

  const [numOfJobs, setNumOfJobs] = useState([1])
  const [newInputs, setNewInputs] = useState()
  const [newJobBlocks, setNewJobBlocks] = useState()
  
  const [jobExperiences, setJobExperiences] = useState(
    {
      employer0 : "",
      role0: "",
      from0: "",
      to0: "",
      location0: "",
      responsibilites0: ""
    }
  )

  function handleChange(event) {
    setPersonalEducation(prevArray => {
      return {
        ...prevArray,
        [event.target.name] : event.target.value
      }
    })
  }

  function handleJobChanges(event) {
    setJobExperiences(prevArray => {
      return {
        ...prevArray,
        [event.target.name] : event.target.value
      }
    })
  }

  function handleJobExperiences() {
    setJobExperiences(prevArray => {
      return {
        ...prevArray,
        [`employer${numOfJobs.length}`] : "",
        [`role${numOfJobs.length}`] : "",
        [`from${numOfJobs.length}`] : "",
        [`to${numOfJobs.length}`] : "",
        [`location${numOfJobs.length}`] : "",
        [`responsibilites${numOfJobs.length}`] : ""
      }
    })
    
    setNewInputs(prevInputs => prevInputs ? [...prevInputs, <><input 
      type="text"
      placeholder="Employer"
      onChange={handleJobChanges}
      name={`employer${numOfJobs.length}`}
    />

    <input 
      type="text"
      placeholder="Role or Job Title" 
      onChange={handleJobChanges}
      name={`role${numOfJobs.length}`}
    />

    <div className="label-input-pair">
      <label htmlFor="from-job">From:</label>
      <input 
        className="label-input"
        id="from-job"
        type="date" 
        onChange={handleJobChanges}
        name={`from${numOfJobs.length}`}
      />
    </div>

    <div className="label-input-pair">
      <label htmlFor="to-job">To:</label>
      <input 
        className="label-input"
        id="to-job"
        type="date" 
        onChange={handleJobChanges}
        name={`to${numOfJobs.length}`}
      />
    </div>

    <input 
      type="text"
      placeholder="Job Location"
      onChange={handleJobChanges}
      name={`location${numOfJobs.length}`}
    />

    <textarea 
      type="text"
      placeholder="What were your responsibilities and accomplishments?"
      onChange={handleJobChanges}
      name={`responsibilites${numOfJobs.length}`}
    /></>] : [<><input 
      type="text"
      placeholder="Employer"
      onChange={handleJobChanges}
      name={`employer${numOfJobs.length}`}
    />

    <input 
      type="text"
      placeholder="Role or Job Title" 
      onChange={handleJobChanges}
      name={`role${numOfJobs.length}`}
    />

    <div className="label-input-pair">
      <label htmlFor="from-job">From:</label>
      <input 
        className="label-input"
        id="from-job"
        type="date" 
        onChange={handleJobChanges}
        name={`from${numOfJobs.length}`}
      />
    </div>

    <div className="label-input-pair">
      <label htmlFor="to-job">To:</label>
      <input 
        className="label-input"
        id="to-job"
        type="date" 
        onChange={handleJobChanges}
        name={`to${numOfJobs.length}`}
      />
    </div>

    <input 
      type="text"
      placeholder="Job Location"
      onChange={handleJobChanges}
      name={`location${numOfJobs.length}`}
    />

    <textarea 
      type="text"
      placeholder="What were your responsibilities and accomplishments?"
      onChange={handleJobChanges}
      name={`responsibilites${numOfJobs.length}`}
    /></>]);


    

    console.log(numOfJobs.length + "BEFORE")


    setNumOfJobs(prevNumOfJobs => [...prevNumOfJobs, prevNumOfJobs.length + 1])
    
    console.log(numOfJobs.length + "AFTER")
    console.log(jobExperiences)
  }

  console.log(jobExperiences[`employer${numOfJobs.length - 1}`])



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
            onChange={handleJobChanges}
            name="employer0"
          />

          <input 
            type="text"
            placeholder="Role or Job Title" 
            onChange={handleJobChanges}
            name="role0"
          />

          <div className="label-input-pair">
            <label htmlFor="from-job">From:</label>
            <input 
              className="label-input"
              id="from-job"
              type="date" 
              onChange={handleJobChanges}
              name="from0"
            />
          </div>

          <div className="label-input-pair">
            <label htmlFor="to-job">To:</label>
            <input 
              className="label-input"
              id="to-job"
              type="date" 
              onChange={handleJobChanges}
              name="to0"
            />
          </div>

          <input 
            type="text"
            placeholder="Job Location"
            onChange={handleJobChanges}
            name="location0"
          />

          <textarea 
            type="text"
            placeholder="What were your responsibilities and accomplishments?"
            onChange={handleJobChanges}
            name="responsibilites0"
          />

          {newInputs}
          <button className="add--button button" onClick={handleJobExperiences}>Add Job Experience</button>

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
              className="label-input"
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

          {/* PERSONAL PREVIEW SECTION */}

          <div className="personal--preview preview--section">

            <h1 className="name--holder info-holder" style={{borderBottom: personalEducation.firstname !== "" ? "4px solid grey" : "0px solid grey"}}>{personalEducation.firstname} {personalEducation.lastname} </h1>

            <div className="email-phone-holder info-holder">{personalEducation.email} {personalEducation.email !== "" && ","} {personalEducation.phone}</div>

            {personalEducation.summary !== "" && <h2 className="info-holder summary-title">About Me:</h2>}
            
            <div className="summary-holder info-holder" style={{borderTop: personalEducation.summary !== "" ? "4px solid grey" : "0px solid grey"}}>{personalEducation.summary}</div>

          </div>

          {/* JOB PREVIEW SECTION */}
          <div className="jobs--preview preview--section">
          {jobExperiences.employer0 && <h2 className="name--holder info-holder" style={{marginBottom: "0.25em"}}>Experiences:</h2>}

          <div className="info-holder">{jobExperiences.employer0} {jobExperiences.employer0 !== "" && "|"} {jobExperiences.location0}</div>
          <div className="info-holder">{jobExperiences.role0} {jobExperiences.role0 !== "" && ","} {jobExperiences.from0} {jobExperiences.from0 !== "" && "-"} {jobExperiences.to0}</div>

          {jobExperiences.responsibilites0 !== "" && <h3 className="info-holder" style={{marginTop: "0.5em"}}>Job Responsibilities:</h3>}
          <div className="info-holder">{jobExperiences.responsibilites0}</div>

          {newJobBlocks}
          </div>

          {/* EDUCATION PREVIEW SECTION */}
          <div className="education--preview preview--section">

            {personalEducation.school && <h2 className="info-holder education--title">Education:</h2>}

            <div className="school-location-holder info-holder">{personalEducation.school} {personalEducation.school !== "" && ","} {personalEducation.field} {personalEducation.gradDate}</div>

            <div className="location--holder info-holder">{personalEducation.location}</div>

           {personalEducation.achievements && <h3 className="info-holder achievement--title" >Achievements:</h3>}
            <div className="info-holder">{personalEducation.achievements}</div>
          </div>         


        </div>
      </div>
  </>
  )
}

export default Information