import React from 'react'
import "./Works.scss"
import {featuredPortfolio} from '../data.js'

export default function Works() {

  return (
<div className='works' id='works'>
        
        <h1>Projects</h1>
        <div className='container' >

          {featuredPortfolio.map((d) => {
            return  (<a href={d.go} target='_blank' rel='noreferrer'>
            <div key={d.id} className='item'>
            <img src= {d.img} alt=''/>
            <h3>{d.title}</h3>
          </div></a>);
          })}
        

         
        </div>
    </div>  )
}
