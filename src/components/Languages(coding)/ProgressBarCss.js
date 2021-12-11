import React, {useState, useEffect} from 'react';
import CountUp from 'react-countup'


import {PBarContainer, PBarCss} from './LanguageElements.js'

const ProgressBarCss= ({done}) => {


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
      <PBarCss style={style} />
      <p>HTML/CSS/Boostrap → <CountUp end={55} duration={3}/>%</p>
    </PBarContainer>
  ) 
}

export default ProgressBarCss



