import React from 'react';
import './HeroSection.css';
import '../../components/globals/font.css'
import {Link as LinkS } from "react-scroll";
import styled from "styled-components";

const HeroSection = () => {

    return (
        <div name = "hero" class='body'>
            <div class='intro'>Hello!</div>
            {/*<div class='secondary'>My name is Kenny Zhao.</div>*/}
            <div class="wrapper">
                <div class="candles">
                    {/*<div class="light__wave"></div>*/}
                    <div class="candle1">
                    <div class="candle1__body">
                        <div class="candle1__eyes">
                        <span class="candle1__eyes-one"></span>
                        <span class="candle1__eyes-two"></span>
                        </div>
                        <div class="candle1__mouth"></div>
                    </div>
                    <div class="candle1__stick"></div>
                    </div>

                    {/*<div class="candle1__fire"/>*/}
                    
                    <div class="candle2">
                    <div class="candle2__body">
                        <div class="candle2__eyes">
                        <div class="candle2__eyes-one"></div>
                        <div class="candle2__eyes-two"></div>
                        </div>
                        <div class='candle2__mouth'></div>
                    </div>
                    <div class="candle2__stick"></div>
                    </div>

                    <div class="candle2__fire"/>
                    <div class="candle__smoke-one"/>
                    <div class="candle__smoke-two"/>

                </div>
                <div class="floor"/>

                <div class='endText'>My name is Kenny Zhao</div>

            </div>

            <LinkToIntro to = 'aboutMe' smooth = 'easeInCubic' duration = {500} spy = {true} exact ='true'>
                <div class="mouse"/> 
            </LinkToIntro>
            

        </div>
    )
}

export default HeroSection;


const LinkToIntro = styled(LinkS)`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 40px;
    top: 92%;
    left: 50%;
    cursor: pointer;
    transform: translate(-50%, -50%);

`