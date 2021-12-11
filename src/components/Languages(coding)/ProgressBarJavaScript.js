import React, {useState, useEffect} from 'react';
import CountUp from 'react-countup'


import {PBarContainer, PBarJavaScript} from './LanguageElements.js'


const ProgressBarJavaScript= ({done}) => {


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
      <PBarJavaScript style={style} />
      <p>JavaScript → <CountUp end={60} duration={3}/>%</p>
    </PBarContainer>
  ) 
}

export default ProgressBarJavaScript



