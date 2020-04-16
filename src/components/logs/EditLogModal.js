import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize'

const EditLogModal = () => {
  //add component level state 
  //log message , attentian value and the tecnitian

  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState('')

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech' })
    } else {
      console.log(message, tech, attention);
      //clear fields
      setMessage('')
      setTech('')
      setAttention(false)

    }

  }
  return (
    <div id='edit-log-modal' className='modal'>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input className='input-field' type="text" name='message' value={message} onChange={e => setMessage(e.target.value)} />
            <label htmlFor="message" className='active'>Log Message</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select name="tech" value={tech} className='browser-default' onChange={e => setTech(e.target.value)} >
              <option value="" disabled>
                Select Technician
             </option>
              <option value="John Doe">John Doe</option>
              <option value="Tommy Harwood">Tommy Harwood</option>
              <option value="Jimmy Quarantino">Jimmy Quarantino</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input type="checkbox" className='filled-in' checked={attention} value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
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

export default EditLogModal
