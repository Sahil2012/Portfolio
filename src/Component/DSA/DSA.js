import React from 'react'
import './DSA.scss'
import geeksforgeeks from '../Assest/geeksforgeeks.png'
import hackerrank from '../Assest/hackerrank.png'
import leetcode from '../Assest/leetcode.png'

export default function DSA() {


  const data = [
    {
      id: 1,
      icon: geeksforgeeks,
      go:"https://auth.geeksforgeeks.org/user/sahilhsgupta7/practice/",
      desc:
        "Solved over 310+ Data Structures and Algorithm problems on GeeksForGeeks.",
    },
    {
      id: 2,
      icon: hackerrank,
      go:"https://www.hackerrank.com/sahilhsgupta7?hr_r=1",
      desc:
        "5 Star Problem Solver at Hackerrank and also having multiple badges in multiple categorey.",
      featured: true,
    },
    {
      id: 3,
          icon: leetcode,
          go: "https://leetcode.com/sahilhsgupta/",
      desc:
        "Solved over 120+ Data Structures and Algorithm problems on LeetCode.",
    },
  ];
  return (
    <div className='DSA' id='DSA'>

        <h1>Coding Profiles</h1>
        <div className='container'>
          {data.map((d) => {
            return (
              <div className={'card ' + (d.featured && 'featured')}>
              <img src={d.icon} alt='' />
              <p>{d.desc} </p>
              <a href={d.go} target='_blank' rel="noreferrer">Profile</a>
            </div>
            )
          })}
         
        </div>
    </div>
  )
}
