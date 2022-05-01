import React from 'react'
import './Menu.scss'

export default function Menu(props) {
  return (
    <div className={"menu " + (props.active && 'active')}>
        <ul>
            <li>
                <a href='#intro' onClick={()=>{props.setAction(false)}}>Home</a>
            </li>

            <li>
                <a href='#works' onClick={()=>{props.setAction(false)}}>Projects</a>
            </li>

            <li>
                <a href='#test' onClick={()=>{props.setAction(false)}}>Skills</a>
            </li>

            <li>
                <a href='#DSA' onClick={()=>{props.setAction(false)}}>Problem Solving</a>
            </li>

            <li>
                <a href='#contact' onClick={()=>{props.setAction(false)}}>Contact</a>
            </li>
        </ul>
      
    </div>
  )
}
