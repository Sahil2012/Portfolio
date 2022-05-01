import React, { useState } from 'react'
import "./Testimonial.scss"
import mobile from '../Assest/mobile.png'
import arrow from '../Assest/arrow.png'
import Java from '../Assest/Java.jpg'
import C from '../Assest/C.jpg'

export default function Testimonial() {

  const [currentSlide,setCurrentSlide] = useState(0);

  const data = [
   
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Android Development",
      go:"https://github.com/Sahil2012",
      desc:
        "I am a Android Developer which develops the native Android Appliaction using JAVA.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        has:true,
    },
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Frontend Development",
      desc:
        "I am a Frontend Web Developer and develops the web applications by using ReactJS.",
        go:"https://github.com/Sahil2012",

      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        has:true,
      },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Java",
      desc:
        "I love to code in Java and have a sound knowledge of JVM and OOPs.",
      img:Java,
      has:false,
    
    },
    {
      id: "4",
      icon: "./assets/writing.png",
      title: "C ++",
      desc:
        "I am a C++ Programmer and have a good understanding of the behind the scenes of C++.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        has:false,

    },
    {
      id: "5",
      icon: "./assets/writing.png",
      title: "C Programming",
      desc:
        "I am a C Programmer and I am very good with pointers and pointer arithematic.",
      img:C,
      has:false,

      }
  ];


  let handleLeftClick = () => {
      // setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2);
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
  }

  let handleRightClick = () => {
    console.log(currentSlide);
    // setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    setCurrentSlide(currentSlide < data.length -1  ? currentSlide + 1 : 0)
  }


  return (

    <div className='test' id='test'>

      <div className='slider' style={{ transform: `translateX(-${(currentSlide) * 100}vw)` }}>

        {data.map((d,index) => {
          console.log(d.id + " " + index);
          return (<div key={d.id} className='container'>

          <div className='item'>

            <div className='left'>
              <div className='leftContainer'>
                <div className='imgContainer'>
                  <img src={mobile} alt='/' />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                {d.has && <a href={d.go} target='_blank' rel='noreferrer'><span>Project</span></a>}
                
              </div>
            </div>
            <div className='right'>
              <img src={d.img} alt='/' />
            </div>
          </div>
        </div>)}
        )}

      </div>

      <img className='leftArrow' src={arrow} onClick={handleLeftClick} alt='' />
      <img className='rightArrow' src={arrow} onClick={handleRightClick} alt='' />

    </div>
  )
}
