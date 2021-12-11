import React, {useState, useEffect} from 'react';
import CountUp from 'react-countup'


import {PBarContainer, PBarJava} from './LanguageElements.js'


const ProgressBarJava= ({done}) => {


  const[style, setStyle] = useState({});

  useEffect(() =>{


   const bar = setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`
    }
      setStyle(newStyle); 
    }, 1200); 


    return () => clearTimeout(bar);
    }, [done]); 


  return (
    <PBarContainer>
      <PBarJava style={style} />
      <p>Java → <CountUp end={80} duration={3}/>%</p>
    </PBarContainer>
  ) 
}

export default ProgressBarJava



