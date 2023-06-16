import React from 'react'
import { useState, useEffect } from 'react'

{/* Main function that controls everything */}
function Information(props) {

  {/* Object for holding all input values for inputs associated with the personal section and education section of resume maker*/}
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

  {/* Holds the number of job experiences, by default it is 1 since there is already 1 predetermined one, but it can change*/}
  const [numOfJobs, setNumOfJobs] = useState([1])

  {/* Holds the new inputs whenever a user presses "add job experience". Grows everytime user presses the button*/}
  const [newInputs, setNewInputs] = useState()

  {/* Object for holding all the job experiences. This object grows and changes whenever the user clicks "add new job experience" */}
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

  {/* This handles all the input changes for the personal and education inputs on the left side of the resume maker. All of those inputs have an onChange function which when there is an input change, it will fire at this function. This function takes an event, and based on the name attribute (which is the same one found in personalEducatino object) will assign the value of it to that property. This allows the user to see live changes whenever they type in the input. */}
  function handleChange(event) {
    setPersonalEducation(prevArray => {
      return {
        ...prevArray,
        [event.target.name] : event.target.value
      }
    })
  }

  {/* Same thing as above but only for job changes. Kept it separate since there is the potential for multiple job changes and didn't want it to get messy. */}
  function handleJobChanges(event) {
    setJobExperiences(prevArray => {
      return {
        ...prevArray,
        [event.target.name] : event.target.value
      }
    })
  }



  function handleJobExperiences() {
    {/* setJobExperiences will take the previous already existing array in JobExperiences and add another set of duplicate properties, except the number will be 1 higher. This is to correspond the inputs (setNewInputs) function with setJobExperiences below*/}
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
    
    {/* setNewInputs will make a duplicate version of the job inputs, but change the "name" attribute of the input to match the number of job experiences. So if the user presses "add job experience" for the third time, identical job experiences inputs will be created, but the name attribute would be something like "employer3" or "title3" or "location3". This helps correspond inputs with their corresponding section on preview*/}

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

    {/* Adds one to the current number of job experiences the user has. Default is 0. */}
    setNumOfJobs(prevNumOfJobs => [...prevNumOfJobs, prevNumOfJobs.length + 1])

  }



  return (
    <>
      <div className="information--holder"> 

        {/* PERSONAL INFORMATION HOLDER - Holds the necessary inputs for the personal/about me section of the resume maker*/}
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

        {/* JOB EXPERIENCES HOLDER - Holds the necessary inputs for the "Job Experiences" parts of the resume maker*/}
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

          {/* Whenever a user clicks on the "add job experience" button down below, a new set of idential Job inputs are added to the newInputs state variable and rendered here. You can see how it's added in the setNewInputs function*/}
          {newInputs}
          <button className="add--button button" onClick={handleJobExperiences}>Add Job Experience</button>

        </div>

        {/* EDUCATION HOLDER - Holds the necessary inputs for the "education" part of the resume maker*/}
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

      {/* .preview--holder holds the entire resume preview on the right side of the screen.*/}
      <div className="preview--holder"> 
        <div className="preview--modal">

          {/* PERSONAL PREVIEW SECTION - This is the "About me/Personal details" section on the resume preview  */}

          <div className="personal--preview preview--section">

            <h1 className="name--holder info-holder" style={{borderBottom: personalEducation.firstname !== "" ? "4px solid grey" : "0px solid grey"}}>{personalEducation.firstname} {personalEducation.lastname} </h1>

            <div className="email-phone-holder info-holder">{personalEducation.email} {personalEducation.email !== "" && ","} {personalEducation.phone}</div>

            {personalEducation.summary !== "" && <h2 className="info-holder summary-title">About Me:</h2>}
            
            <div className="summary-holder info-holder" style={{borderTop: personalEducation.summary !== "" ? "4px solid grey" : "0px solid grey"}}>{personalEducation.summary}</div>

          </div>

          {/* JOB PREVIEW SECTION - This is the "Experiences/Job Experiences" section on the resume preview */}
          <div className="jobs--preview preview--section">
          {jobExperiences.employer0 && <h2 className="name--holder info-holder" style={{marginBottom: "0.25em"}}>Experiences:</h2>}

          <div className="info-holder">{jobExperiences.employer0} {jobExperiences.employer0 !== "" && "|"} {jobExperiences.location0}</div>
          <div className="info-holder">{jobExperiences.role0} {jobExperiences.role0 !== "" && ","} {jobExperiences.from0} {jobExperiences.from0 !== "" && "-"} {jobExperiences.to0}</div>

          {jobExperiences.responsibilites0 !== "" && <h3 className="info-holder" style={{marginTop: "0.5em"}}>Job Responsibilities:</h3>}
          <div className="info-holder">{jobExperiences.responsibilites0}</div>

          {/*This will take a look at the number of job experiences the user added in numOfJobs variable, and map out each section correspondingly. Code looks messy since there's a lot of conditional rendering going on. It's pretty simple overall.*/}
          {numOfJobs.map(item => <>
          <br />
          {jobExperiences[`employer${item}`] && <h1 className="info-holder" style={{marginBottom: "0.25em"}}>Experience #{item + 1}</h1>}
          <div className="info-holder">{jobExperiences[`employer${item}`]} {jobExperiences[`employer${item}`] !== undefined && "|"} {jobExperiences[`location${item}`]}</div>
          <div className="info-holder">{jobExperiences[`role${item}`]} {jobExperiences[`role${item}`] !== undefined && ","} {jobExperiences[`from${item}`]} {jobExperiences[`from${item}`] !== undefined && "-"} {jobExperiences[`to${item}`]}</div>

          {jobExperiences[`responsibilites${item}`] !== undefined && <h3 className="info-holder" style={{marginTop: "0.5em"}}>Job Responsibilities:</h3>}
          <div className="info-holder">{jobExperiences[`responsibilites${item}`]}</div></>)}
          </div>

          {/* EDUCATION PREVIEW SECTION - This is the "Education" section on the resume preview*/}
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