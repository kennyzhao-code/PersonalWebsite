/* Imports */
import React, {useCallback, useState, useEffect} from 'react';
import Aos from "aos";
import { StaticImage } from 'gatsby-plugin-image';
import { colors } from '../globals/colors';
import styled from "styled-components";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {FaInstagram, FaStrava, FaGithub, FaTwitter, FaLinkedin, FaDiscord} from 'react-icons/fa';
import { AiOutlineCopy } from "react-icons/ai";
import AudioPlayer from 'react-modern-audio-player';
import song from '../../images/until.mp3';
import './icons.css';
import '../globals/font.css';

const playList = [
    {
      src: song,
      id: 1,
    },
];

/* Main */
const Blog = ({lightBg, id, topLine, coding, athletics, music, games, academics, personality}) => {


    //controls fade in animation time 
    useEffect(() => {
        Aos.init({duration: 1000}); 
    }, []); 
    
    
    //functions to make copied text dissapear 
    const [isAlertVisibleGit, setIsAlertVisibleGit] = useState(false);
    const handleButtonClickGit = () => {
        setIsAlertVisibleGit(true); 
    };

    setTimeout(() => {
        setIsAlertVisibleGit(false);}, 4000);

    const [isAlertVisibleMac, setIsAlertVisibleMac] = useState(false);
    const handleButtonClickMac = () => {
        setIsAlertVisibleMac(true); 
    };

    setTimeout(() => {
        setIsAlertVisibleMac(false);}, 4000);

    const [isAlertVisibleInsta, setIsAlertVisibleInsta] = useState(false);
    const handleButtonClickInsta = () => {
        setIsAlertVisibleInsta(true); 
    };

    setTimeout(() => {
        setIsAlertVisibleInsta(false);}, 4000);

        
    const [isAlertVisibleGuitar, setIsAlertVisibleGuitar] = useState(false);
    const handleButtonClickGuitar = () => {
        setIsAlertVisibleGuitar(true); 
    };

    setTimeout(() => {
        setIsAlertVisibleGuitar(false);}, 4000);

    const [isAlertVisibleTwitter, setIsAlertVisibleTwitter] = useState(false);
    const handleButtonClickTwitter = () => {
        setIsAlertVisibleTwitter(true); 
    };

    setTimeout(() => {
        setIsAlertVisibleTwitter(false);}, 4000);

    const [isAlertVisibleDiscord, setIsAlertVisibleDiscord] = useState(false);
    const handleButtonClickDiscord = () => {
        setIsAlertVisibleDiscord(true); 
    };

    setTimeout(() => {
        setIsAlertVisibleDiscord(false);}, 4000);

    const [isAlertVisibleLinkedin, setIsAlertVisibleLinkedin] = useState(false);
    const handleButtonClickLinkedin = () => {
        setIsAlertVisibleLinkedin(true); 
    };

    setTimeout(() => {
        setIsAlertVisibleLinkedin(false);}, 4000);

    //copy clipboard functions 
    const [valueGit] = useState("kennyzhao-code");
    const [valueInsta] = useState("kennyzhao_"); 
    const [valueGuitar] = useState("kennyzhao_guitar");
    const [valueTwitter] = useState("KennyZhao20");
    const [valueInstaMac] = useState("mcmastersports");
    const [valueDiscord] = useState("REALLY!?#4206");
    const [valueLinkedin] = useState("Kenny Zhao");

    const [copied, setCopied] = useState(false);
    const onCopy = useCallback(() => {
        setCopied(true);
    }, []);


    return (
        <BlogContainer name = 'hobbies' id ={id} lightBg = {lightBg}>
            <BlogSecondaryContainer>

                <BlogH1 data-aos-once='true' data-aos="fade-up">{topLine}</BlogH1>

                    <BlogWrapper data-aos-once='true' data-aos="fade-up">

                        {/* Column 1 */}
                        <BlogSection>

                            {/* Coding */}
                            <BlogSectionDiv mainHeight = "550px" mainWidth = "720px" 
                                   mainHeight1 = "550px" mainWidth1 = "580px"
                                   mainHeight2 = "620px" mainWidth2 = "510px"
                                   mainHeight3 = "620px" mainWidth3 = "480px"
                                   mainHeight4 = "520px" mainWidth4 = "350px" 
                                   isScaled={false}>
                                <TitleSocialDiv mainHeight = "460px" mainWidth = "620px" 
                                   mainHeight1 = "460px" mainWidth1 = "500px"
                                   mainHeight2 = "530px" mainWidth2 = "400px"
                                   mainHeight3 = "530px" mainWidth3 = "400px"
                                   mainHeight4 = "460px" mainWidth4 = "320px" 
                                   
                                   codingSocialTitle={true}
                                   personalitySocialTitle={false}
                                   athleticsSocialTitle={false}
                                   gamesSocialTitle={false}
                                   academicsSocialTitle={false}
                                   musicSocialTitle={false}
                                   >

                                    <h1>Coding <span>(duh)</span></h1>
                                    <p>{coding}</p>
                                    
                                    <SocialDivMain mainHeight = "150px" mainWidth = "620px" 
                                                   mainHeight1 = "130px" mainWidth1 = "500px"
                                                   mainHeight2 = "100px" mainWidth2 = "400px"
                                                   mainHeight3 = "100px" mainWidth3 = "400px"
                                                   mainHeight4 = "100px" mainWidth4 = "320px" 
                                                   >
                                        <SocialDiv mainHeight = "auto" mainWidth = "500px" 
                                                   mainHeight1 = "auto" mainWidth1 = "470px"
                                                   mainHeight2 = "auto" mainWidth2 = "380px"
                                                   mainHeight3 = "auto" mainWidth3 = "380px"
                                                   mainHeight4 = "auto" mainWidth4 = "310px" 

                                                   codingSocial = {true}
                                                   personalitySocial = {false}
                                                   athleticsSocial = {false}
                                                   gamesSocial = {false}       
                                                   academicsSocial = {false}                                                                                                                                                                                                                
                                                   >
                                            <SocialIconDiv color = 'white' backgroundColor = 'black' rel="noreferrer" target="_blank" href = "https://github.com/kennyzhao-code">
                                                <FaGithub className = "icon"/>
                                            </SocialIconDiv>
                                            <h1>kennyzhao-code</h1>
                                            <div className = 'copy'>
                                                <CopyToClipboard onCopy={onCopy} text={valueGit}>
                                                    <CopyIcon  onClick={handleButtonClickGit}/>
                                                </CopyToClipboard>
                                                {copied && isAlertVisibleGit ? 
                                                <div>
                                                    <div class="bubble">Copied</div>
                                                    <div class="pointer"></div>
                                                </div>
                                                    : null} 
                                            </div> 
                                        </SocialDiv>
                                    </SocialDivMain>
                                </TitleSocialDiv>
                            </BlogSectionDiv>
                            
                            {/* Music */}
                            <BlogSectionDiv mainHeight = "800px" mainWidth = "720px" 
                                   mainHeight1 = "800px" mainWidth1 = "580px"
                                   mainHeight2 = "900px" mainWidth2 = "510px"
                                   mainHeight3 = "900px" mainWidth3 = "480px"
                                   mainHeight4 = "770px" mainWidth4 = "350px" 
                                   isScaled={true}
                                   
                                   style = {{marginTop: '2rem'}}>
                                 <TitleSocialDiv mainHeight = "720px" mainWidth = "620px" 
                                   mainHeight1 = "720px" mainWidth1 = "500px"
                                   mainHeight2 = "830px" mainWidth2 = "400px"
                                   mainHeight3 = "830px" mainWidth3 = "400px"
                                   mainHeight4 = "690px" mainWidth4 = "320px" 
                                   
                                   codingSocialTitle={false}
                                   personalitySocialTitle={false}
                                   athleticsSocialTitle={false}
                                   gamesSocialTitle={false}
                                   academicsSocialTitle={false}
                                   musicSocialTitle={true}
                                   >
                                    <h1>Music <span>:3</span></h1>
                                    <h2>{music}</h2>
                                    <p>My current favorite song!</p>
                                    
                                    <SocialDivMain mainHeight = "325px" mainWidth = "620px" 
                                                   mainHeight1 = "310px" mainWidth1 = "500px"
                                                   mainHeight2 = "310px" mainWidth2 = "400px"
                                                   mainHeight3 = "310px" mainWidth3 = "400px"
                                                   mainHeight4 = "270px" mainWidth4 = "320px"     
                                                   style = {{ paddingTop: '1rem', paddingLeft: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch' }}>

                                      
                                            <StaticImage
                                                src= '../../images/song.jpg'
                                                alt="goneAlbum"
                                                placeholder="blurred"
                                                formats={["auto", "webp"]}
                                                className = "albumCover"
                                                imgStyle = {{borderRadius: '10px'}}
                                            />  
 
                                        <MusicDetails>
                                            <h3>Until I Found You</h3>
                                            <h4>Stephen Sanchez & Em Beihold</h4>

                                        <div>

                                        {typeof window !== 'undefined' && AudioPlayer && 
                                             <AudioPlayer
                                                rootContainerProps={{colorScheme: "dark"}}                                                
                                                playList={playList}
                                                audioInitialState={{
                                                volume: 0.5,
                                                curPlayId: 1,
                                                }}
                                                placement={{
                                                interface: {
                                                    templateArea: {
                                                    trackTimeDuration: "row1-5",
                                                    progress: "row1-1",
                                                    playButton: "row2-1",
                                                    repeatType: "row2-2",
                                                    volume: "row1-8",
                                                    },
                                                },
                                                }}
                                                activeUI={{
                                                progress: true,
                                                trackTimeDuration: false,
                                                playButton: true,
                                                repeatType: false,
                                                volume: false,
                                                prevNnext: true,
                                                }}
                                            /> 

                                        } </div>
                                            <h5>@kenny-zhao on <a href = "https://open.spotify.com/user/kennyzhao2004" target = "_blank" rel='noreferrer' style = {{color: '#1DB954'}}>spotify</a></h5>

                                        </MusicDetails>
                                    
                                    </SocialDivMain>

                                </TitleSocialDiv>
                            </BlogSectionDiv>
                            
                            {/* Academics */}
                            <BlogSectionDiv mainHeight = "510px" mainWidth = "720px" 
                                   mainHeight1 = "490px" mainWidth1 = "580px"
                                   mainHeight2 = "550px" mainWidth2 = "510px"
                                   mainHeight3 = "550px" mainWidth3 = "480px"
                                   mainHeight4 = "490px" mainWidth4 = "350px" 
                                   isScaled={false}
                                   
                                   style = {{marginTop: '2rem'}}>
                                 <TitleSocialDiv mainHeight = "430px" mainWidth = "620px" 
                                   mainHeight1 = "430px" mainWidth1 = "500px"
                                   mainHeight2 = "490px" mainWidth2 = "400px"
                                   mainHeight3 = "490px" mainWidth3 = "400px"
                                   mainHeight4 = "430px" mainWidth4 = "320px" 
                                   
                                   codingSocialTitle={false}
                                   personalitySocialTitle={false}
                                   athleticsSocialTitle={false}
                                   gamesSocialTitle={false}
                                   academicsSocialTitle={true}
                                   musicSocialTitle={false}
                                   >
                                        <h1>Academics <span>&gt;:)</span></h1>
                                        <p>{academics}</p>
                                        
                                        <SocialDivMain mainHeight = "150px" mainWidth = "620px" 
                                                   mainHeight1 = "130px" mainWidth1 = "500px"
                                                   mainHeight2 = "100px" mainWidth2 = "400px"
                                                   mainHeight3 = "100px" mainWidth3 = "400px"
                                                   mainHeight4 = "100px" mainWidth4 = "320px" 
                                                   >
                                            <SocialDiv mainHeight = "auto" mainWidth = "500px" 
                                                   mainHeight1 = "auto" mainWidth1 = "470px"
                                                   mainHeight2 = "auto" mainWidth2 = "380px"
                                                   mainHeight3 = "auto" mainWidth3 = "380px"
                                                   mainHeight4 = "auto" mainWidth4 = "310px" 

                                                   codingSocial = {false}
                                                   personalitySocial = {false}
                                                   athleticsSocial = {false}
                                                   gamesSocial = {false}       
                                                   academicsSocial = {true}                                                                                                                                                                                                                
                                                   >
                                                <SocialIconDiv color = 'white' backgroundColor = '#0077B5' rel="noreferrer" target="_blank" href = "https://www.discord.com">
                                                    <FaLinkedin className = "icon"/>
                                                </SocialIconDiv>                                                
                                                <h1>Kenny Zhao</h1>
                                                <div className = 'copy'>
                                                    <CopyToClipboard onCopy={onCopy} text={valueLinkedin}>
                                                        <CopyIcon  onClick={handleButtonClickLinkedin}/>
                                                    </CopyToClipboard>
                                                    {copied && isAlertVisibleLinkedin ? 
                                                    <div>
                                                        <div class="bubble">Copied</div>
                                                        <div class="pointer"></div>
                                                    </div>
                                                        : null} 
                                                </div>                                             
                                            </SocialDiv>
                                        </SocialDivMain>
                                    </TitleSocialDiv>
                            </BlogSectionDiv>

                        </BlogSection>
                        
                        {/* Column 2 */}
                        <BlogSection>
                            
                            {/* Personality */}
                            <BlogSectionDiv mainHeight = "810px" mainWidth = "720px" 
                                   mainHeight1 = "790px" mainWidth1 = "580px"
                                   mainHeight2 = "850px" mainWidth2 = "510px"
                                   mainHeight3 = "730px" mainWidth3 = "480px"
                                   mainHeight4 = "610px" mainWidth4 = "350px" 
                                   isScaled={false}

                                   >
                                <TitleSocialDiv mainHeight = "720px" mainWidth = "620px" 
                                   mainHeight1 = "720px" mainWidth1 = "500px"
                                   mainHeight2 = "680px" mainWidth2 = "400px"
                                   mainHeight3 = "650px" mainWidth3 = "400px"
                                   mainHeight4 = "590px" mainWidth4 = "320px" 
                                   
                                   codingSocialTitle={false}
                                   personalitySocialTitle={true}
                                   athleticsSocialTitle={false}
                                   gamesSocialTitle={false}
                                   academicsSocialTitle={false}
                                   musicSocialTitle={false}
                                   >

                                    <h1>Personality <span>&lt;3</span></h1>
                                    <p>{personality}</p>
                                        
                                    <SocialDivMain mainHeight = "150px" mainWidth = "620px" 
                                                   mainHeight1 = "140px" mainWidth1 = "500px"
                                                   mainHeight2 = "100px" mainWidth2 = "400px"
                                                   mainHeight3 = "100px" mainWidth3 = "400px"
                                                   mainHeight4 = "100px" mainWidth4 = "320px" 

                                                   style = {{borderRadius: '15px 15px 0 0', flexDirection: 'column'}}>
                                        
                                        <SocialDiv mainHeight = "auto" mainWidth = "500px" 
                                                   mainHeight1 = "auto" mainWidth1 = "470px"
                                                   mainHeight2 = "auto" mainWidth2 = "380px"
                                                   mainHeight3 = "auto" mainWidth3 = "380px"
                                                   mainHeight4 = "auto" mainWidth4 = "310px" 

                                                   codingSocial = {false}
                                                   personalitySocial = {true}
                                                   athleticsSocial = {false}
                                                   gamesSocial = {false}
                                                   academicsSocial = {false}                                                                                                                                               
                                                   >
                                            <SocialIconDiv color = 'white' backgroundColor = '#e1306c' rel="noreferrer" target="_blank" href = "https://www.instagram.com/kennyzhao_/">
                                                <FaInstagram className = "icon"/>
                                            </SocialIconDiv>
                                            <h1>kennyzhao_</h1>
                                            <div className = 'copy'>
                                                <CopyToClipboard onCopy={onCopy} text={valueInsta}>
                                                    <CopyIcon  onClick={handleButtonClickInsta}/>
                                                </CopyToClipboard>
                                                {copied && isAlertVisibleInsta ? 
                                                <div>
                                                    <div class="bubble">Copied</div>
                                                    <div class="pointer"></div>
                                                </div>
                                                    : null}  
                                            </div>
                                        </SocialDiv>
                                    </SocialDivMain>

                                    <SocialDivMain mainHeight = "150px" mainWidth = "620px" 
                                                   mainHeight1 = "140px" mainWidth1 = "500px"
                                                   mainHeight2 = "100px" mainWidth2 = "400px"
                                                   mainHeight3 = "100px" mainWidth3 = "400px"
                                                   mainHeight4 = "100px" mainWidth4 = "320px"   
                                                   style = {{borderRadius: '0', flexDirection: 'column'}}>
                                         <SocialDiv mainHeight = "auto" mainWidth = "500px" 
                                                   mainHeight1 = "auto" mainWidth1 = "470px"
                                                   mainHeight2 = "auto" mainWidth2 = "380px"
                                                   mainHeight3 = "auto" mainWidth3 = "380px"
                                                   mainHeight4 = "auto" mainWidth4 = "310px" 

                                                   codingSocial = {false}
                                                   personalitySocial = {true}
                                                   athleticsSocial = {false}
                                                   gamesSocial = {false}
                                                   academicsSocial = {false}                                                                                                                                               
                                                   >
                                            <SocialIconDiv color = 'white' backgroundColor = '#e1306c' rel="noreferrer" target="_blank" href = "https://www.instagram.com/kennyzhao_guitar/">
                                                <FaInstagram className = "icon"/>
                                            </SocialIconDiv>
                                            <h1>kennyzhao_guitar</h1>
                                            <div className = 'copy'>
                                                <CopyToClipboard onCopy={onCopy} text={valueGuitar}>
                                                    <CopyIcon  onClick={handleButtonClickGuitar}/>
                                                </CopyToClipboard>
                                                {copied && isAlertVisibleGuitar ? 
                                                <div>
                                                    <div class="bubble">Copied</div>
                                                    <div class="pointer"></div>
                                                </div>
                                                    : null}   
                                            </div>                                       
                                        </SocialDiv>
                                    </SocialDivMain>

                                    <SocialDivMain mainHeight = "150px" mainWidth = "620px" 
                                                   mainHeight1 = "140px" mainWidth1 = "500px"
                                                   mainHeight2 = "100px" mainWidth2 = "400px"
                                                   mainHeight3 = "100px" mainWidth3 = "400px"
                                                   mainHeight4 = "100px" mainWidth4 = "320px"     
                                                   style = {{borderRadius: '0 0 15px 15px', flexDirection: 'column'}}>
                                         <SocialDiv mainHeight = "auto" mainWidth = "500px" 
                                                   mainHeight1 = "auto" mainWidth1 = "470px"
                                                   mainHeight2 = "auto" mainWidth2 = "380px"
                                                   mainHeight3 = "auto" mainWidth3 = "380px"
                                                   mainHeight4 = "auto" mainWidth4 = "310px" 

                                                   codingSocial = {false}
                                                   personalitySocial = {true}
                                                   athleticsSocial = {false}
                                                   gamesSocial = {false}
                                                   academicsSocial = {false}                                                                                                                                               
                                                   >
                                            <SocialIconDiv color = 'white' backgroundColor = '#1DA1F2' rel="noreferrer" target="_blank" href = "https://x.com/KennyZhao20">
                                                <FaTwitter className = "icon"/>
                                            </SocialIconDiv>
                                            <h1>KennyZhao20</h1>
                                            <div className = 'copy'>
                                                <CopyToClipboard onCopy={onCopy} text={valueTwitter}>
                                                    <CopyIcon  onClick={handleButtonClickTwitter}/>
                                                </CopyToClipboard>
                                                {copied && isAlertVisibleTwitter ? 
                                                <div>
                                                    <div class="bubble">Copied</div>
                                                    <div class="pointer"></div>
                                                </div>
                                                    : null} 
                                            </div>                                        
                                        </SocialDiv>
                                    </SocialDivMain>

                                        
                                </TitleSocialDiv>
                            </BlogSectionDiv>
                            
                            {/* Athletics */}
                            <BlogSectionDiv mainHeight = "490px" mainWidth = "720px" 
                                   mainHeight1 = "490px" mainWidth1 = "580px"
                                   mainHeight2 = "600px" mainWidth2 = "510px"
                                   mainHeight3 = "580px" mainWidth3 = "480px"
                                   mainHeight4 = "430px" mainWidth4 = "350px" 
                                   isScaled={false}

                                   style = {{marginTop: '2rem'}}>
                                <TitleSocialDiv mainHeight = "420px" mainWidth = "620px" 
                                   mainHeight1 = "450px" mainWidth1 = "500px"
                                   mainHeight2 = "490px" mainWidth2 = "400px"
                                   mainHeight3 = "460px" mainWidth3 = "400px"
                                   mainHeight4 = "390px" mainWidth4 = "320px" 
                                   
                                   codingSocialTitle={false}
                                   personalitySocialTitle={false}
                                   athleticsSocialTitle={true}
                                   gamesSocialTitle={false}
                                   academicsSocialTitle={false}
                                   musicSocialTitle={false}
                                   >
                                        <h1>Athletics <span>:0</span></h1>
                                        <p>{athletics}</p>
                                        
                                        <SocialDivMain mainHeight = "150px" mainWidth = "620px" 
                                                   mainHeight1 = "140px" mainWidth1 = "500px"
                                                   mainHeight2 = "100px" mainWidth2 = "400px"
                                                   mainHeight3 = "100px" mainWidth3 = "400px"
                                                   mainHeight4 = "100px" mainWidth4 = "320px" 
                                                   >
                                            <SocialDiv mainHeight = "auto" mainWidth = "500px" 
                                                   mainHeight1 = "auto" mainWidth1 = "470px"
                                                   mainHeight2 = "auto" mainWidth2 = "380px"
                                                   mainHeight3 = "auto" mainWidth3 = "380px"
                                                   mainHeight4 = "auto" mainWidth4 = "310px" 

                                                   codingSocial = {false}
                                                   personalitySocial = {false}
                                                   athleticsSocial = {true}
                                                   gamesSocial = {false}
                                                   academicsSocial = {false}                                                                                                                                               
                                                   >
                                                <SocialIconDiv color = 'white' backgroundColor = '#fc4c02' rel="noreferrer" target="_blank" href = "https://www.strava.com/athletes/66606475">
                                                    <FaStrava className = "icon"/>
                                                </SocialIconDiv>
                                                <h1>Kenny Zhao</h1>
                                                <div className = 'copy'>
                                                    <CopyToClipboard onCopy={onCopy} text={valueInstaMac}>
                                                    <CopyIcon  onClick={handleButtonClickMac}/>
                                                    </CopyToClipboard>
                                                    {copied && isAlertVisibleMac ? 
                                                    <div>
                                                        <div class="bubble">Copied</div>
                                                        <div class="pointer"></div>
                                                    </div>
                                                        : null}     
                                                </div>                                         
                                            </SocialDiv>
                                        </SocialDivMain>
                                    </TitleSocialDiv>
                            </BlogSectionDiv>
                            
                            {/* Games */}
                            <BlogSectionDiv mainHeight = "560px" mainWidth = "720px" 
                                   mainHeight1 = "560px" mainWidth1 = "580px"
                                   mainHeight2 = "620px" mainWidth2 = "510px"
                                   mainHeight3 = "580px" mainWidth3 = "480px"
                                   mainHeight4 = "480px" mainWidth4 = "350px" 
                                   isScaled={false}

                                   style = {{marginTop: '2rem'}}>
                                <TitleSocialDiv mainHeight = "480px" mainWidth = "620px" 
                                   mainHeight1 = "480px" mainWidth1 = "500px"
                                   mainHeight2 = "490px" mainWidth2 = "400px"
                                   mainHeight3 = "505px" mainWidth3 = "400px"
                                   mainHeight4 = "430px" mainWidth4 = "320px" 
                                   
                                   codingSocialTitle={false}
                                   personalitySocialTitle={false}
                                   athleticsSocialTitle={false}
                                   gamesSocialTitle={true}
                                   academicsSocialTitle={false}
                                   musicSocialTitle={false}
                                   >
                                        <h1>Games <span>:P</span></h1>
                                        <p>{games}</p>
                                        
                                        <SocialDivMain mainHeight = "150px" mainWidth = "620px" 
                                                   mainHeight1 = "140px" mainWidth1 = "500px"
                                                   mainHeight2 = "100px" mainWidth2 = "400px"
                                                   mainHeight3 = "100px" mainWidth3 = "400px"
                                                   mainHeight4 = "100px" mainWidth4 = "320px" 
                                                   >
                                             <SocialDiv mainHeight = "auto" mainWidth = "500px" 
                                                   mainHeight1 = "auto" mainWidth1 = "470px"
                                                   mainHeight2 = "auto" mainWidth2 = "380px"
                                                   mainHeight3 = "auto" mainWidth3 = "380px"
                                                   mainHeight4 = "auto" mainWidth4 = "310px" 

                                                   codingSocial = {false}
                                                   personalitySocial = {false}
                                                   athleticsSocial = {false}
                                                   gamesSocial = {true}     
                                                   academicsSocial = {false}                                                                                                                                               
                                                   >
                                                <SocialIconDiv color = 'white' backgroundColor = '#738adb' rel="noreferrer" target="_blank" href = "https://www.discord.com">
                                                    <FaDiscord className = "icon"/>
                                                </SocialIconDiv>
                                                <h1>REALLY!?#4206</h1>
                                                <div className = 'copy'>
                                                    <CopyToClipboard onCopy={onCopy} text={valueDiscord}>
                                                    <CopyIcon  onClick={handleButtonClickDiscord}/>
                                                    </CopyToClipboard>
                                                    {copied && isAlertVisibleDiscord ? 
                                                    <div>
                                                        <div class="bubble">Copied</div>
                                                        <div class="pointer"></div>
                                                    </div>
                                                        : null}   
                                                </div>                                          
                                            </SocialDiv>
                                        </SocialDivMain>
                                    </TitleSocialDiv>
                            </BlogSectionDiv>

                        </BlogSection>

                    </BlogWrapper>
            </BlogSecondaryContainer>

        </BlogContainer>
    );
};

export default Blog;

/* styles */
//main container 
const BlogContainer = styled.div`
    height: 2150px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${({lightBg}) => (lightBg ? '#F8FCFF' : 'black')};
    justify-content: center;
    align-items: center;
    transition: 0.375s;

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        height: 2360px;
    }

    @media screen and (max-width: 1100px){
        transition: 0.375s;
        height: 4470px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        height: 3660px;
    }
`;

//secondary container
const BlogSecondaryContainer = styled.div`
    height: 100%;
    width: 1510px;
    transition: 0.375s;

    @media screen and (max-width: 1700px){
        transition: 0.375s;
        width: 1200px;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 1050px;
    }

    @media screen and (max-width: 1100px){
        transition: 0.375s;
        width: 480px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 350px;
    }
`;

const BlogH1 = styled.h1`
    color: #897CBF; 
    font-size: 60px; 
    position: relative;
    font-weight: 700; 
    width: 100%;
    letter-spacing: 1.4px; 
    font-style: italic;
    display: flex;
    font-family: 'Raleway', sans-serif;
    transition: 0.375s;

    @media screen and (max-width: 480px){
        font-size: 35px;
        transition: 0.375s;
    }
`;

//grid-template-columns: 1fr, the amount of fr will determine the items in each row
const BlogWrapper = styled.div`
    margin: 0 auto; 
    margin-top: 2rem;
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-column-gap: 4rem;
    grid-row-gap: 1.5rem;
    align-items: center; 
    padding: 0 50px;     
    justify-content: center;
    transition: 0.375s;


    @media screen and (max-width: 1700px){
        grid-column-gap: 2rem;
        transition: 0.375s;

    }

    @media screen and (max-width: 1100px){
        grid-template-columns: 1fr;
        grid-row-gap: 10.5rem;
        transition: 0.375s;

    }

`;

//all sections to blog 
const BlogSection = styled.div`
    height: 2000px;
    transition: 0.375s;

    @media screen and (max-width: 480px){
        height: 1710px;
    }

`;
const BlogSectionDiv = styled.div`
    height: ${(props) => props.mainHeight || '0px'}; 
    width: ${(props) => props.mainWidth || '0px'}; 
    background: ${colors.mainPurple};
    border-radius: 15px;
    display: flex; 
    align-items: center;
    justify-content: center;
    transition: 0.375s;

    &:hover{
        transition: 0.375s;
        scale: 1.02;

        ${({ isScaled }) => isScaled &&
        `.rm-audio-player-provider {
                transform: scale(1.01);
                transition: 0.375s;
            }`
        }
    }

    @media screen and (max-width: 1700px){
        height: ${(props) => props.mainHeight1 || '0px'}; 
        width: ${(props) => props.mainWidth1 || '0px'}; 
        transition: 0.375s;
    }

    @media screen and (max-width: 1350px){
        height: ${(props) => props.mainHeight2 || '0px'}; 
        width: ${(props) => props.mainWidth2 || '0px'}; 
        transition: 0.375s;
    }

    @media screen and (max-width: 1100px){
        height: ${(props) => props.mainHeight3 || '0px'}; 
        width: ${(props) => props.mainWidth3 || '0px'}; 
        transition: 0.375s;
    }

    @media screen and (max-width: 480px){
        height: ${(props) => props.mainHeight4 || '0px'}; 
        width: ${(props) => props.mainWidth4 || '0px'}; 
        transition: 0.375s;

        &:hover{
            scale: 1;

            ${({ isScaled }) => isScaled &&
            `.rm-audio-player-provider {
                    transform: scale(1);
                    transition: 0.375s;
                }`
            }
        }
    }
`;

//copy icon 
const CopyIcon = styled(AiOutlineCopy)`
    color: white;
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: fixed;
    
    &:hover{
        scale: 1.1;
        transition: 0.3s ease;
    }
`;

const SocialIconDiv = styled.a`
    width: 75px;
    height: 75px;
    z-index: 10;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: ${(props) => props.backgroundColor || '#000'}; 
    color: ${(props) => props.color || '#000'}; 
    cursor: pointer;

    .icon{
        width: 40px;
        height: 40px;
    }

    &:hover{
        scale: 1.1;
        transition: 0.3s ease;
    }
`

const TitleSocialDiv = styled.div`
    height: ${(props) => props.mainHeight || '0px'}; 
    width: ${(props) => props.mainWidth || '0px'}; 
    transition: 0.375s;


    ${({ codingSocialTitle }) => codingSocialTitle &&
        `h1{
            font-family: "Raleway", sans-serif;
            font-weight: 700;
            color: white;

            span{
                font-family: "Raleway", sans-serif;
                font-weight: 400;
            }
        }

        p{
            color: white;
            font-family: "Raleway", sans-serif;
            font-weight: 400;
            font-size: 1.7rem;
            line-height: 1.6;
            transition: 0.375s;


            @media screen and (max-width: 480px){
                font-size: 1.3rem;
                transition: 0.375s;
            }
        }`
    }

    ${({ personalitySocialTitle }) => personalitySocialTitle &&
        `h1{
            font-family: "Raleway", sans-serif;
            font-weight: 700;
            color: white;

            span{
                font-family: "Raleway", sans-serif;
                font-weight: 400;
            }
        }

        p{
            color: white;
            font-family: "Raleway", sans-serif;
            font-weight: 400;
            font-size: 1.7rem;
            line-height: 1.6;
            transition: 0.375s;


            @media screen and (max-width: 480px){
                font-size: 1.3rem;
                transition: 0.375s;

            }
        }`
    }
    
    ${({ athleticsSocialTitle }) => athleticsSocialTitle &&

        `h1{
                font-family: "Raleway", sans-serif;
                font-weight: 700;
                color: white;

                span{
                    font-family: "Raleway", sans-serif;
                    font-weight: 400;
                }

            }

        p{
            color: white;
            font-family: "Raleway", sans-serif;
            font-weight: 400;
            font-size: 1.7rem;
            line-height: 1.6;
            transition: 0.375s;

            @media screen and (max-width: 480px){
                font-size: 1.3rem;
                transition: 0.375s;
            }
        }`
    }

    ${({ gamesSocialTitle }) => gamesSocialTitle &&
    
        `h1{
            font-family: "Raleway", sans-serif;
            font-weight: 700;
            color: white;

            span{
                font-family: "Raleway", sans-serif;
                font-weight: 400;
            }
        }

        p{
            color: white;
            font-family: "Raleway", sans-serif;
            font-weight: 400;
            font-size: 1.7rem;
            line-height: 1.6;
            transition: 0.375s;

            @media screen and (max-width: 480px){
                font-size: 1.3rem;
                transition: 0.375s;
            }
        }`
    }

    ${({ academicsSocialTitle }) => academicsSocialTitle &&

        `h1{
            font-family: "Raleway", sans-serif;
            font-weight: 700;
            color: white;

            span{
                font-family: "Raleway", sans-serif;
                font-weight: 400;
            }

        }

        p{
            color: white;
            font-family: "Raleway", sans-serif;
            font-weight: 400;
            font-size: 1.7rem;
            line-height: 1.6;

            @media screen and (max-width: 480px){
                font-size: 1.3rem;
                transition: 0.375s;
            }   
        }`
    }

    ${({ musicSocialTitle }) => musicSocialTitle &&
        `h1{
            font-family: "Raleway", sans-serif;
            color: white;
            font-weight: 700;

            span{
                font-family: "Raleway", sans-serif;
                font-weight: 400;
            }
        }

        h2{
            font-family: "Raleway", sans-serif;
            font-weight: 400;
            color: white;
            font-size: 1.7rem;
            line-height: 2.9rem;
            transition: 0.375s;

            @media screen and (max-width: 480px){
                font-size: 1.3rem;
                transition: 0.375s;
                line-height: 2.2rem;
            }
        }

        p{
            color: ${colors.secondaryPurple};
            font-family: "Raleway", sans-serif;
            font-weight: 400;
            font-size: 1.7rem;

            @media screen and (max-width: 480px){
                font-size: 1.3rem;
                transition: 0.375s;
            }
        }`
    }

    @media screen and (max-width: 1700px){
        height: ${(props) => props.mainHeight1 || '0px'}; 
        width: ${(props) => props.mainWidth1 || '0px'}; 
        transition: 0.375s;
    }

    @media screen and (max-width: 1350px){
        height: ${(props) => props.mainHeight2 || '0px'}; 
        width: ${(props) => props.mainWidth2 || '0px'}; 
        transition: 0.375s;
    }

    @media screen and (max-width: 1100px){
        height: ${(props) => props.mainHeight3 || '0px'}; 
        width: ${(props) => props.mainWidth3 || '0px'}; 
        transition: 0.375s;
    }

    @media screen and (max-width: 480px){
        height: ${(props) => props.mainHeight4 || '0px'}; 
        width: ${(props) => props.mainWidth4 || '0px'}; 
        transition: 0.375s;
    }
`;

const SocialDivMain = styled.div`
    height: ${(props) => props.mainHeight || '0px'}; 
    width: ${(props) => props.mainWidth || '0px'}; 
    border-radius: 15px;
    background: ${colors.secondaryPurple};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.375s;


    @media screen and (max-width: 1700px){
        height: ${(props) => props.mainHeight1 || '0px'}; 
        width: ${(props) => props.mainWidth1 || '0px'}; 
        transition: 0.375s;
    }

    @media screen and (max-width: 1350px){
        height: ${(props) => props.mainHeight2 || '0px'}; 
        width: ${(props) => props.mainWidth2 || '0px'}; 
        transition: 0.375s;
    }

    @media screen and (max-width: 1100px){
        height: ${(props) => props.mainHeight3 || '0px'}; 
        width: ${(props) => props.mainWidth3 || '0px'}; 
        transition: 0.375s;
    }

    @media screen and (max-width: 480px){
        height: ${(props) => props.mainHeight4 || '0px'}; 
        width: ${(props) => props.mainWidth4 || '0px'}; 
        transition: 0.375s;
    }
`;

const SocialDiv = styled.div`
    height: ${(props) => props.mainHeight || '0px'}; 
    width: ${(props) => props.mainWidth || '0px'}; 
    position: absolute;
    display: flex;
    align-items: center;
    transition: 0.375s;
    
    ${({ codingSocial }) => codingSocial &&
        `h1{
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
            position: relative;
            margin-left: 2rem;
            top: 0.7rem;
            transition: 0.375s;

            @media screen and (max-width: 1350px){
                font-size: 1.6rem;
                transition: 0.375s;
            }

            @media screen and (max-width: 480px){
                font-size: 1.3rem;
                margin-left: 1rem;
                transition: 0.375s;

            }
        }`
    }

    ${({ personalitySocial }) => personalitySocial &&
        `h1{
            font-family: 'Raleway', sans-serif;
            position: relative;
            margin-left: 2rem;
            top: 0.7rem;
            font-weight: 400;
            transition: 0.375s;

            @media screen and (max-width: 1350px){
                font-size: 1.6rem;
                transition: 0.375s;
            }

            @media screen and (max-width: 480px){
                font-size: 1.3rem;
                margin-left: 1rem;
                transition: 0.375s;

            }
        }`
    }
    ${({ athleticsSocial }) => athleticsSocial &&
        `h1{
            font-family: 'Raleway', sans-serif;
            position: relative;
            margin-left: 2rem;
            top: 0.7rem;
            font-weight: 400;
            transition: 0.375s;

            @media screen and (max-width: 1350px){
                font-size: 1.6rem;
                transition: 0.375s;

            }

            @media screen and (max-width: 480px){
                font-size: 1.3rem;
                margin-left: 1rem;
                transition: 0.375s;
            }
        }`
    }

    ${({ gamesSocial }) => gamesSocial &&
        `h1{
            font-family: 'Raleway', sans-serif;
            position: relative;
            margin-left: 2rem;
            top: 0.7rem;
            font-weight: 400;
            transition: 0.375s;

            @media screen and (max-width: 1350px){
                font-size: 1.6rem;
                margin-left: 1rem;
                transition: 0.375s;
            }

            @media screen and (max-width: 480px){
                font-size: 1.1rem;
                margin-left: 1rem;
                transition: 0.375s;
            }
        }`
    }

    ${({ academicsSocial }) => academicsSocial &&
        `h1{
                font-family: 'Raleway', sans-serif;
            position: relative;
            margin-left: 2rem;
            top: 0.7rem;
            font-weight: 400;

            @media screen and (max-width: 1350px){
                font-size: 1.6rem;
            }

            @media screen and (max-width: 480px){
                font-size: 1.3rem;
                margin-left: 1rem;
                transition: 0.375s;
            }
        }`
    }

    @media screen and (max-width: 1700px){
        height: ${(props) => props.mainHeight1 || '0px'}; 
        width: ${(props) => props.mainWidth1 || '0px'}; 
        transition: 0.375s;
    }

    @media screen and (max-width: 1350px){
        height: ${(props) => props.mainHeight2 || '0px'}; 
        width: ${(props) => props.mainWidth2 || '0px'}; 
        transition: 0.375s;
    }

    @media screen and (max-width: 1350px){
        height: ${(props) => props.mainHeight3 || '0px'}; 
        width: ${(props) => props.mainWidth3 || '0px'}; 
        transition: 0.375s;
    }

    @media screen and (max-width: 480px){
        height: ${(props) => props.mainHeight4 || '0px'}; 
        width: ${(props) => props.mainWidth4 || '0px'}; 
        transition: 0.375s;
    }
`;

/* For the music section */
const MusicDetails = styled.div`
    width: 290px;
    height: 290px;
    padding-top: 1rem;
    padding-left: 0.5rem;
    transition: 0.375s;


    h3{
        font-family: "Raleway", sans-serif;
        font-weight: 400;
        color: white;
        font-size: 1.4rem;
        margin-top: 2rem;
        padding-left: 0.8rem;
        transition: 0.375s;

        @media screen and (max-width: 1700px){
            margin-top: 0;
            transition: 0.375s;
        }

        @media screen and (max-width: 480px){
            font-size: 1rem;
            transition: 0.375s;
        }
    }

    h4{
        font-family: "Raleway", sans-serif;
        color: ${colors.mainPurple};
        font-weight: 400;
        font-size: 1.1rem;
        position: relative;
        padding-top: 0;
        bottom: 1.1rem;
        padding-left: 0.8rem;
        transition: 0.375s;

        @media screen and (max-width: 1350px){
            font-size: 1rem;
            transition: 0.375s;
        }

        @media screen and (max-width: 480px){
            font-size: 0.8rem;
            transition: 0.375s;
        }
    }

    h5{
        font-family: "Raleway", sans-serif;
        color: ${colors.mainPurple};
        font-weight: 400;
        font-size: 1.3rem;
        padding-left: 0.8rem;

        a{
            text-decoration: none;
        }

        @media screen and (max-width: 1700px){
            position: relative;
            font-size: 1.1rem;
        }
        
        @media screen and (max-width: 1350px){
            position: relative;
            font-size: 1rem;
        }

        @media screen and (max-width: 480px){
            font-size: 0.9rem;
            line-height: 1.2;
        }
    }

    @media screen and (max-width: 1700px){
        transition: 0.375s;
        width: 190px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 130px;
        height: 130px;
    }
`;

