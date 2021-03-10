import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize'

const AddTechModal = () => {
  //add component level state 
  //log message , attentian value and the tecnitian

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')



  const onSubmit = () => {
    if (lastName === '' || firstName === '') {
      M.toast({ html: 'Please enter the first and last name' })
    } else {
      console.log(firstName, lastName);
      setFirstName('')
      setLastName('')
    }
  }
  return (
    <div id='add-tech-modal' className='modal'>
      <div className="modal-content">
        <h4>New technician</h4>
        <div className="row">
          <div className="input-field">
            <input className='input-field' type="text" name='firstName' value={firstName} onChange={e => setFirstName(e.target.value)} />
            <label htmlFor="firstName" className='active'>First Name</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input className='input-field' type="text" name='lastName' value={lastName} onChange={e => setLastName(e.target.value)} />
            <label htmlFor="lastName" className='active'>Last Name</label>
          </div>
        </div>


      </div>
      <div className="modal-footer">
        <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue btn">Enter</a>
      </div>
    </div>
  )
}

// const modalStyle = {
//   width: '75%',
//   height: '75%'
// }

export default AddTechModal