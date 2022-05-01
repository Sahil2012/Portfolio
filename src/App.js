import './App.scss';
import TopBar from './Component/TopBar/TopBar';
import Introduction from './Component/Introduction/Introduction';
import Testimonial from './Component/Testimonial/Testimonial';
import Contact from './Component/Contact/Contact';
import Works from './Component/Works/Works';
import React, { useState } from 'react';
import Menu from './Component/Menu/Menu';
import DSA from './Component/DSA/DSA';

function App() {

  const [active,setAction] = useState(false);

  return (
    <div className="App" >
      <TopBar active = {active} setAction={setAction}/>
      <Menu active={active} setAction={setAction}/>
      <div className='section'>
        <React.StrictMode>
        <Introduction />
        </React.StrictMode>
        <Works />
        <Testimonial />
        <DSA />
        <Contact />
      </div>

    </div>
  );
}

export default App;
