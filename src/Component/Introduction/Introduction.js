import React from 'react'
import "./Introduction.scss"
import man from '../Assest/man.png'
import down from '../Assest/down.png'
import Typewriter from 'typewriter-effect';


export default function Introduction() {


  console.log("Hello")

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='container'>
          <img src={man} alt="" />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hey there, I'm</h2>
          <h1>Sahil Gupta</h1>
          <h3>
            <Typewriter
              options={{
                strings: ['Android Developer', 'React Developer'],
                autoStart: true,
                loop: true,
              }}

            />
          </h3>

        </div>
        <a href='#works'>
          <img src={down} alt='' />
        </a>
      </div>
    </div>
  )
}
