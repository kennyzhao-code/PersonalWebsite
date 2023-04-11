import React, {useState, useEffect} from 'react';
import CountUp from 'react-countup';


import {PBarContainer, PBarJavaScript} from './LanguageElements.js';


const ProgressBarJavaScript= ({done}) => {


  const[style, setStyle] = useState({});

  useEffect(() =>{


  const bar = setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`
    };
      setStyle(newStyle); 
    }, 1200); 

    return () => clearTimeout(bar);
  }, [done]); 


  return (
    <PBarContainer>
      <PBarJavaScript style={style} />
      <p>javascript <span style={{position: 'absolute', right: '0'}}> <CountUp end={68} duration={3}/>% </span> </p>
    </PBarContainer>
  ); 
};

export default ProgressBarJavaScript;



