import React, { useState } from 'react'
import "./Contact.scss"
import shake from '../Assest/shake.svg'



export default function Contact() {

  const [mail,setMail] = useState('');
  const [msg,setMsg] = useState('');
  const [message,setMessage] = useState(false);

  let handleSubmit = (e) => {
  
    e.preventDefault();
  
    setMessage(true);
    setMail('');
    setMsg('');
  
  }

  let handleMail = (e) => {
    setMail(e.target.value);
  }

  let handleMessage = (e) => {
    setMsg(e.target.value);
  }


  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src={shake} alt='' />
      </div>
      <div className='right'>
        <h1 id='ms'>Contact.</h1>
        <form onSubmit={handleSubmit}>
          <input value={mail} onChange={handleMail} type='text' placeholder='Email' />
          <textarea value={msg} onChange={handleMessage} placeholder='Message'></textarea>
          <button type='submit'>Submit</button>

          {message && <span>I will get back to you ASAP :)</span>}
        </form>
      </div>
    </div>  
)}
