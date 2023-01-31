import React, {useState, useEffect} from 'react';
import CountUp from 'react-countup'


import {PBarContainer, PBar} from './LanguageElements.js'


const ProgressBar= ({done}) => {

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
      <PBar style={style} />
      <p>python <span style={{position: 'absolute', right: '0'}}> <CountUp end={60} duration={3}/>%</span> </p>
    </PBarContainer>
  ) 
}

export default ProgressBar





