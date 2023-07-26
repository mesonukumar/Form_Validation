import React from 'react'
import { useState } from 'react'
function MyForm() {
//DEclare varibale Associate nam
// Declare variable associate Id
// Declare varible project id
// Declare varible for location
// Declare varible Skill
// Declare Vriable Skills
// Declare Vriable for upload profile picture
// Declare Variable for comments
    const [comments, setComments] = useState('');
    const [commentsError, setCommentsError] = useState('');
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedSkillsError, setSelectedSkillsError] = useState('');
    const [location, setLocation] = useState('');
    const [selectedOptionError,setSelectedOptionError]=useState('')
    const [associateName, setAssociateName] = useState('');
    const [associateNameError, setAssociateNameError] = useState('');
    const [associateId, setAssociateId] = useState('');
    const [associateIdError, setAssociateIdError] = useState('');
    const [projectId, setProjectId] = useState('');
    const [projectIdError, setProjectIdError] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [profilePictureError, setProfilePictureError] = useState('');
    // Handle Input Change and Validate Associate Name
    const handleAssociateNameChange=(event)=>{
        const name=event.target.value;
        setAssociateName(name)
         };
        //  Handle Input Change and Validate Associate Id
         const handleAssociateIdChange=(event)=>{
            const id=event.target.value;
            setAssociateId(id)
             };
    //  Handle Input Change and Validate Project Id
    const handleProjectIdChange=(event)=>{
        const pid=event.target.value;
        setProjectId(pid);
    }
    //  Handle Input Change Location
    const handleLocationChange = (event) => {
        const selectedLocation=event.target.value
        setLocation(selectedLocation);
      };
    //   Handle profile picture
      const handleProfilePictureChange = (event) => {
        const selectedFile = event.target.files[0];
    
        if (selectedFile.name) {
            console.log(selectedFile.name);
          setProfilePicture(selectedFile.name);
        
        }
      };

      //Handle input checkbox
      const handleSkillChange = (event) => {
        const selectedSkill = event.target.value;
        const isChecked = event.target.checked;
    
        // Add or remove the selected skill from the array
        setSelectedSkills((prevSkills) => {
          if (isChecked) {
            return [...prevSkills, selectedSkill];
          } else {
            return prevSkills.filter((skill) => skill !== selectedSkill);
          }
        });
      };
      // Handle comments
      const handleCommentsChange = (event) => {
        const message = event.target.value;
        setComments(message);
      };
// Validate Comments

 const validateComments=()=>{
    const regex = /^[A-Za-z!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~\s]+$/;
;
    if(!comments.trim()){
        setCommentsError("Please Enter Comments")
    }else if(!regex.test(comments)){
        setCommentsError('Invalid Comments')

 }else{
    setCommentsError("");
 }
}
// Validate selected skills
      const validateSelectedSkills = () => {
        if (selectedSkills.length < 5) {
          setSelectedSkillsError('Please select at least 5 skills');
          return false;
        }
    
        setSelectedSkillsError('');
        return true;
      };
      // Validate selected Location
      const validateSelectedLocation=()=>{
        if(!location){
            setSelectedOptionError('Please Select the Loaction')
            return false;
        }
        setSelectedOptionError('')
        return true;
      }
      // Validate Associate Name
         const validateAssociateName=()=>{
             const regex=/^[A-Za-z\s]+$/;
             if(!associateName){
                 setAssociateNameError('Plaease Enter Associate Name')
     
             }else if(!regex.test(associateName)){
                 setAssociateNameError('Only alphabets spaces are allowed');
     
             }else if(associateName.length<5 || associateName.length>30){
                 setAssociateNameError("Please enter a valid name between 5 to 30 characters");
             }else{
                 setAssociateNameError('')
             }
         };
        //  Validte Associate Id

         const validateAssociateId=()=>{
            const regex=/^\d{6}$/;
            if (!associateId ) {
                setAssociateIdError('Please enter Associate ID');
            }else if(!regex.test(associateId)){
                setAssociateIdError('Invalid Associate ID')
            }else {
               setAssociateIdError('')
            }
         }
  // ValiDate project Id
         const vlidateProjectId=()=>{
            const regex= /^[a-zA-Z0-9]{12}$/;
            if (!projectId) {
                setProjectIdError('Please Enter Project ID ');
            }else if(!regex.test(projectId)){
               setProjectIdError('Invalid Project Id')
            }else{
                setProjectIdError('');
            }

         }
        //  Validate profile picture
         const validateProfilePicture=()=>{
           
            console.log("called");
             if(!profilePicture){
                setProfilePictureError('Please Upload pofile')
                
             }else{
                setProfilePictureError("");
             }
              }
              
    //  handle Submit
         const handleSubmit=(event)=>{
        
             event.preventDefault();
             validateAssociateName();
             validateAssociateId();
             vlidateProjectId();
             validateSelectedLocation();
             validateSelectedSkills();
             validateComments();
             validateProfilePicture();
             if((!associateNameError) &&(!associateIdError)&&(!projectIdError) &&(!selectedOptionError) &&(!selectedSkillsError)&&(!commentsError) &&(!profilePictureError)){
                 console.log('form submitted successfully')
             }
         }
        //  Resest the data
        const handleReset = () => {
            setAssociateName('');
            setAssociateNameError('');
            setAssociateId('');
            setAssociateIdError('');
            setProjectId('');
            setProjectIdError('');
            setLocation('');
            setSelectedSkills([]);
            setSelectedSkillsError('');
            setComments('');
            setCommentsError('');
            setProfilePicture('');
            setProfilePictureError('');
          };
     
  return (
    <div className='container margin-auto  border mt-2 px-5'>

      {/* Form Validation */}
      <h1>Form Validation <span className='text-danger'>*</span></h1>

    {/* Form */}

    <form className='w-75' onSubmit={handleSubmit}>
        {/* Associate Name */}

  <div className="mb-3">
  {associateNameError ? (
    <input
      type="text"
      className="form-control is-invalid"
      value={associateName}
      name="associateName"
      placeholder="Associate Name"
      onChange={handleAssociateNameChange}
    />
  ) : (
    <input
      type="text"
      className="form-control"
      value={associateName}
      name="associateName"
      placeholder="Associate Name"
      onChange={handleAssociateNameChange}
    />
  )}
    {associateNameError && <div className="error"><p className='text-danger'>{associateNameError}</p></div>} 
  </div>
 
  {/* Associate Id */}

  <div className="mb-3">
  {associateIdError ? (
    <input
      type="text"
      className="form-control is-invalid"
      value={associateId}
      name="associateId"
      placeholder="Associate ID"
      onChange={handleAssociateIdChange}
    />
  ) : (
    <input
      type="text"
      className="form-control"
      value={associateId}
      name="associateId"
      placeholder="Associate Id"
      onChange={handleAssociateIdChange}
    />
  )}
    {associateIdError && <div className="error"><p className='text-danger'>{associateIdError}</p></div>} 
  </div>

  {/* Project ID */}

  <div className="mb-3">
  {projectIdError ? (
    <input
      type="text"
      className="form-control is-invalid"
      value={projectId}
      name="projectId"
      placeholder="Project ID"
      onChange={handleProjectIdChange}
    />
  ) : (
    <input
      type="text"
      className="form-control"
      value={projectId}
      name="projectId"
      placeholder="Project Id"
      onChange={handleProjectIdChange}
    />
  )}
    {projectIdError && <div className="error"><p className='text-danger'>{projectIdError}</p></div>} 
  </div>

  {/* Radio button */}

<div className='mb-3'>
<label>
  <input 
  type="radio" 
  name="location" 
  value="offshore" 
  checked={location==='offshore'} 
  onChange={handleLocationChange}
  /> 
  Offshore
</label>
<label>
  <input type="radio" name="location" value="onshore" checked={location==='onshore'} onChange={handleLocationChange}/> Onshore
</label>
<br/><br/>
{location ==='offshore' &&(
    <div id="offshoreOptions">
  <label className='w-100'>
  <select class="form-select" name='offshoreLocation'>
  <option selected>Select Location</option>
      <option value="Chennai">Chennai</option>
      <option value="Bangalore">Bangalore</option>
      <option value="Hyderabad">Hyderabad</option>
      <option value="Pune">Pune</option>
      <option value="Kochi">Kochi</option>
    </select>
  </label>
</div>
)}

{location ==='onshore' &&(
    <div id="onshoreOptions">
  <label class="w-100">
    <select class="form-select" name="onshoreLocation">
    <option selected>Select Location</option>
      <option value="US">US</option>
      <option value="Non-US">Non-US</option>
    </select>
  </label>
</div>
)}
{selectedOptionError && <div className="error"><p className='text-danger'>{selectedOptionError}</p></div>}
</div>

{/* Check button skills */}

<div>
        <div className='d-flex justify-content-between flex-wrap'>
          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              <input
                className="form-check-input"
                type="checkbox"
                name='skill'
                value="HTML"
                onChange={handleSkillChange}
              />
              HTML5,CSS3,JS
            </label>
          </div>
        
          <div className="form-check form-check-inline ">
  <label className="form-check-label" htmlFor="inlineCheckbox1">
  <input className="form-check-input" type="checkbox" name='skill' value="Angular" onChange={handleSkillChange}/>
   Angular8
    </label>
</div>
<div className="form-check form-check-inline ">
  <label className="form-check-label" htmlFor="inlineCheckbox1">
  <input className="form-check-input" type="checkbox" name='skill' value="Expressjs" onChange={handleSkillChange}/>
   Express JS
    </label>
</div>
        </div>
        <div className='d-flex justify-content-between flex-wrap'>
          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              <input
                className="form-check-input"
                type="checkbox"
                name='skill'
                value="SASS"
                onChange={handleSkillChange}
              />
              SASS
            </label>
          </div>
        
          <div className="form-check form-check-inline ">
  <label className="form-check-label" htmlFor="inlineCheckbox1">
  <input className="form-check-input" type="checkbox" name='skill' value="ReactJs" onChange={handleSkillChange}/>
   React Js
    </label>
</div>
<div className="form-check form-check-inline ">
  <label className="form-check-label" htmlFor="inlineCheckbox1">
  <input className="form-check-input" type="checkbox" name='skill' value="NodeJs" onChange={handleSkillChange}/>
   Node Js
    </label>
</div>
        </div>
        <div className='d-flex justify-content-between flex-wrap'>
          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              <input
                className="form-check-input"
                type="checkbox"
                name='skill'
                value="ES5"
                onChange={handleSkillChange}
              />
              ES5,ES6,ES7...
            </label>
          </div>
          
          <div className="form-check form-check-inline ">
  <label className="form-check-label" htmlFor="inlineCheckbox1">
  <input className="form-check-input" type="checkbox" name='skill' value="VueJs" onChange={handleSkillChange}/>
   Vue Js
    </label>
</div>
<div className="form-check form-check-inline ">
  <label className="form-check-label" htmlFor="inlineCheckbox1">
  <input className="form-check-input" type="checkbox" name='skill' value=" MangoDb" onChange={handleSkillChange}/>
  Mango Db
    </label>
</div>
        </div>
        <div className='d-flex justify-content-between flex-wrap'>
          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              <input
                className="form-check-input"
                type="checkbox"
                name='skill'
                value="Bootstrap"
                onChange={handleSkillChange}
              />
             Bootstrap 4
            </label>
          </div>
        
          <div className="form-check form-check-inline ">
  <label className="form-check-label" htmlFor="inlineCheckbox1">
  <input className="form-check-input" type="checkbox" name='skill' value="Typescript" onChange={handleSkillChange}/>
   Typescript
    </label>
</div>

        </div>
        
        {selectedSkillsError && <div className="error"><p className='text-danger'>{selectedSkillsError}</p></div>}
        </div>
        <br/><br/>
{/* profile picture */}
<div className="mb-3">
    <p>Upload Profile</p>
          {profilePictureError ? (
            
              <input
                type="file"
                name="profilePicture"
                className="form-control is-invalid"
                required
                onChange={handleProfilePictureChange}
              />
              
          
          ) : (
            <input
              type="file"
              name="profilePicture"
              className="form-control "
              required
              onChange={handleProfilePictureChange}
            />
          )}
           {profilePictureError && <div className="error"><p className='text-danger'>{profilePictureError}</p></div>} 
        </div>

        {/* Comments */}

        <div className="mb-3">
  {commentsError ? (
    <textarea
      type="text"
      className="form-control is-invalid"
      value={comments}
      name="associateId"
      placeholder="comments"
      onChange={handleCommentsChange }
    />
  ) : (
    <textarea
      type="text"
      className="form-control"
      value={comments}
      name="comments"
      placeholder="comments"
      onChange={handleCommentsChange }
    />
  )}
    {commentsError && <div className="error"><p className='text-danger'>{commentsError}</p></div>} 
  </div>
  
<button type='submit' className="btn btn-primary me-3">Submit</button>
<button type='submit' className="btn btn-danger me-3" onClick={handleReset}>Reset</button>
</form>
    </div>
  )
}

export default MyForm;
