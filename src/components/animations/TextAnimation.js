import React, {useEffect, useState} from 'react'
import { useInterval} from "react-use"
import styled, { keyframes } from 'styled-components'

export default function TextAnimation()
{
    const helloArray = "Bonjour".split("")
    const welcomeArray = "Welcome".split("")
    const [items, setItems] = useState(helloArray)
    const [count, setCount] = useState(0)
    const [play, setPlay] = useState(false)

    //6000 means 4 seconds 
    useInterval
    (
        () => {
            //animate hello 
            setItems(helloArray)
            setCount(count + 1)

            //animate welcome, right after hello 
            if (count === 1)
            {
                //set count to 0 so after welcome is done, switches back to hello
                setCount(0)
                setItems(welcomeArray)
            }
        },
        play ? 6000 : null
    )

    useEffect(() => {
        const timer = setTimeout(() => {
            // animate welcome after timeout  
            setItems(welcomeArray)
            setPlay(true)
        }, 4000)

        return () => clearTimeout(timer)
    }, [])

    return (
    <Wrapper>
        {items.map((item, index) => (
        <span key={index}>{item}</span>
        ))}
    </Wrapper>
    )
}

const animation = keyframes`
  0% {opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px);  }
  25% {opacity: 1; transform: translateY(0) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px);}
  75% {opacity: 1; transform: translateY(0) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px); }
  100% {opacity: 1; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px); }
`
//the span:nth-child means it will selected the span for the letter 
const Wrapper = styled.span `
    display: inline-block; 
    span
    {
        display: inline-block; 
        opacity: 0; 
        animation-name: ${animation}; 
        animation-duration: 6s; 
        animation-fill-mode: forwards; 
        animation-iteration-count: infinite; 
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1); 
    }
    span:nth-child(1)
    {
        animation-delay: 0.1s 
    }
    span:nth-child(2)
    {
        animation-delay: 0.2s 
    }
    span:nth-child(3)
    {
        animation-delay: 0.3s 
    }
    span:nth-child(4)
    {
        animation-delay: 0.4s 
    }
    span:nth-child(5)
    {
        animation-delay: 0.5s 
    }
    span:nth-child(6)
    {
        animation-delay: 0.6s 
    }
    span:nth-child(7)
    {
        animation-delay: 0.7s 
    }
    
`