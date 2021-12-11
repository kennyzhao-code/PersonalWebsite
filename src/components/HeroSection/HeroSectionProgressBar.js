import React, {useState, useEffect} from 'react';

import {HeroPBarContainer, HeroPBar} from './HeroElements.js';


const ProgressBar= ({done}) => {
  const[style, setStyle] = useState({});

  useEffect(() =>{

    const bar = setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`
      }
        setStyle(newStyle); 
      }, 1000); 

      return () => clearTimeout(bar);
      }, [done]); 

  return (
    <HeroPBarContainer>
      <HeroPBar style={style} />
    </HeroPBarContainer>
  ) 
}



export default ProgressBar
