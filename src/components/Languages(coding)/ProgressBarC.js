import React, {useState, useEffect} from 'react';
import CountUp from 'react-countup';


import {PBarContainer, PBarC} from './LanguageElements.js';


const ProgressBarC= ({done}) => {


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
      <PBarC style={style} />
      <p>C/C++ <span style={{position: 'absolute', right: '0'}}> <CountUp end={56} duration={3}/>%</span> </p>
    </PBarContainer>
  );
};

export default ProgressBarC;



