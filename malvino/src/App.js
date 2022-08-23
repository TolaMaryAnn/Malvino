
import React from 'react';
import Navbar from "./components/Navbar.js"
import Section1 from "./components/Section1"
import UseSticky from "./hooks/UseSticky.js"
import Section2 from "./components/Section2"
import Section3 from './components/Section3'
import Section4 from './components/Section4.js';
import Section5 from './components/Section5.js';
import Section6 from './components/Section6.js';
import uikit from "uikit"
import Section7 from './components/Section7.js';
import Section8 from './components/Section8.js';

function App() {
  const { isSticky,element} = UseSticky()



  return (
    <>
    
      
      <Navbar sticky={isSticky}/>
      <Section1 />
      
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
    </>
  );
}

export default App;
// bradley hand,cursive
// sans-serif