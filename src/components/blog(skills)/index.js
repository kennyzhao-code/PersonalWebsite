import React, {useCallback, useState, useEffect} from 'react';
import Aos from "aos";
import { StaticImage } from 'gatsby-plugin-image';
import { colors } from '../globals/colors';
import styled from "styled-components";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocialIcon } from 'react-social-icons';
import { AiOutlineCopy } from "react-icons/ai";
import AudioPlayer from 'react-modern-audio-player';
import song from '../../images/doodle.mp3';
import './icons.css';
import '../globals/font.css';

const playList = [
    {
      src: song,
      id: 1,
    },
  ];

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

        
    const [isAlertVisibleSnap, setIsAlertVisibleSnap] = useState(false);
    const handleButtonClickSnap = () => {
        setIsAlertVisibleSnap(true); 
    };

    setTimeout(() => {
        setIsAlertVisibleSnap(false);}, 4000);

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
    const [valueSnap] = useState("spider_boy2004");
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

                        <BlogSection>

                            <BlogSectionCoding>
                                <TitleSocialDivCoding>
                                    <h1>Coding <span>(duh)</span></h1>
                                    <p>{coding}</p>
                                    
                                    <SocialDivMainCoding>
                                        <SocialDivCoding>
                                            <SocialIcon className = "scale" rel="noreferrer" target="_blank" url = "https://github.com/kennyzhao-code" network = "github" bgColor="black" fgColor = "white" style = {{height: 75, width: 75}} />
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
                                        </SocialDivCoding>
                                    </SocialDivMainCoding>
                                </TitleSocialDivCoding>
                            </BlogSectionCoding>

                            <BlogSectionMusic >
                                <TitleSocialDivMusic>
                                    <h1>Music <span>:3</span></h1>
                                    <h2>{music}</h2>
                                    <p>My current favorite song!</p>
                                    
                                    <SocialDivMainMusic>

                                      
                                            <StaticImage
                                                src= '../../images/doodle.jpg'
                                                alt="doodleAlbum"
                                                placeholder="blurred"
                                                formats={["auto", "webp", "avif"]}
                                                className = "albumCover"
                                                imgStyle = {{borderRadius: '10px'}}
                                            />  
 
                                        <MusicDetails>
                                            <h3>Doodle (feat. Yerin Baek)</h3>
                                            <h4>Punchnello</h4>

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
                                    
                                    </SocialDivMainMusic>


                                </TitleSocialDivMusic>
                            </BlogSectionMusic>

                            <BlogSectionAcademic >
                                <TitleSocialDivAcademics>
                                        <h1>Academics <span>&gt;:)</span></h1>
                                        <p>{academics}</p>
                                        
                                        <SocialDivMainAcademics>
                                            <SocialDivAcademics>
                                                <SocialIcon className = "scale" rel="noreferrer" target="_blank" url = "https://www.linkedin.com/in/kenny-zhao-283b73213/" network = "linkedin" fgColor = "white" style = {{height: 75, width: 75}} />
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
                                            </SocialDivAcademics>
                                        </SocialDivMainAcademics>
                                    </TitleSocialDivAcademics>
                            </BlogSectionAcademic>

                        </BlogSection>

                        <BlogSection>

                            <BlogSectionPersonality >
                                <TitleSocialDivPersonality>
                                    <h1>Personality <span>&lt;3</span></h1>
                                    <p>{personality}</p>
                                        
                                    <SocialDivMainPersonality  style = {{borderRadius: '15px 15px 0 0'}}>
                                        <SocialDivPersonality>
                                            <SocialIcon className = "scale" rel="noreferrer" target="_blank" url = "https://www.instagram.com/kennyzhao_/" network = "instagram" fgColor='white' style = {{height: 75, width: 75}} />
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
                                        </SocialDivPersonality>
                                    </SocialDivMainPersonality>



                                    <SocialDivMainPersonality  style = {{borderRadius: '0'}}>
                                        <SocialDivPersonality>
                                            <SocialIcon className = "scale" rel="noreferrer" target="_blank" url = "https://t.snapchat.com/EAyH5MmN" network = "snapchat" fgColor = 'white' style = {{height: 75, width: 75}} />
                                            <h1>spider_boy2004</h1>
                                            <div className = 'copy'>
                                                <CopyToClipboard onCopy={onCopy} text={valueSnap}>
                                                    <CopyIcon  onClick={handleButtonClickSnap}/>
                                                </CopyToClipboard>
                                                {copied && isAlertVisibleSnap ? 
                                                <div>
                                                    <div class="bubble">Copied</div>
                                                    <div class="pointer"></div>
                                                </div>
                                                    : null}   
                                            </div>                                       
                                        </SocialDivPersonality>
                                    </SocialDivMainPersonality>

                                    <SocialDivMainPersonality  style = {{borderRadius: '0 0 15px 15px'}}>
                                        <SocialDivPersonality>
                                            <SocialIcon className = "scale" rel="noreferrer" target="_blank" url = "https://twitter.com/KennyZhao20" network = "twitter" fgColor = "white" style = {{height: 75, width: 75}} />
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
                                        </SocialDivPersonality>
                                    </SocialDivMainPersonality>

                                        
                                </TitleSocialDivPersonality>
                            </BlogSectionPersonality>

                            <BlogSectionAthletic>
                                <TitleSocialDivAthletics>
                                        <h1>Athletics <span>:0</span></h1>
                                        <p>{athletics}</p>
                                        
                                        <SocialDivMainAthletics>
                                            <SocialDivAthletics>
                                                <SocialIcon className = "scale" rel="noreferrer" target="_blank" url = "https://www.instagram.com/mcmastersports/" network = "instagram" fgColor = "white" style = {{height: 75, width: 75}} />
                                                <h1>mcmastersports</h1>
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
                                            </SocialDivAthletics>
                                        </SocialDivMainAthletics>
                                    </TitleSocialDivAthletics>
                            </BlogSectionAthletic>

                            <BlogSectionGame>
                                <TitleSocialDivGames>
                                        <h1>Games <span>:P</span></h1>
                                        <p>{games}</p>
                                        
                                        <SocialDivMainGames>
                                            <SocialDivGames>
                                                <SocialIcon className = "scale" rel="noreferrer" target="_blank" url = "https://discord.com/" network = "discord" fgColor = "white" style = {{height: 75, width: 75}} />
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
                                            </SocialDivGames>
                                        </SocialDivMainGames>
                                    </TitleSocialDivGames>
                            </BlogSectionGame>

                        </BlogSection>

                    </BlogWrapper>
            </BlogSecondaryContainer>

        </BlogContainer>
    );
};

export default Blog;


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
        height: 4640px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        height: 3700px;
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

const BlogSection = styled.div`
    height: 2000px;
    transition: 0.375s;

    @media screen and (max-width: 480px){
        height: 1710px;
    }

`;

//all sections to blog 
//blog1
const BlogSectionCoding = styled.div`
    height: 550px;
    width: 720px;
    background: ${colors.mainPurple};
    border-radius: 15px;
    display: flex; 
    align-items: center;
    justify-content: center;
    transition: 0.375s;

    &:hover{
        transition: 0.375s;
        scale: 1.02;
    }

    
    @media screen and (max-width: 1700px){
        width: 580px;
        transition: 0.375s;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 510px;
        height: 620px;
    }

    @media screen and (max-width: 1100px){
        transition: 0.375s;
        width: 480px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 350px;
        height: 520px; 
    }
`;




const BlogSectionMusic = styled.div`
    height: 800px;
    width: 720px;
    background: ${colors.mainPurple};
    border-radius: 15px;
    margin-top: 2rem;
    display: flex; 
    align-items: center;
    justify-content: center;
    transition: 0.375s;

    &:hover{
       transition: 0.375s;
       scale: 1.02;

       .rm-audio-player-provider{
            transform: scale(1.01);
            transition: 0.375s;
        }
    }


    @media screen and (max-width: 1700px){
        width: 580px;
        transition: 0.375s;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 510px;
        height: 900px;
    }

    @media screen and (max-width: 1100px){
        transition: 0.375s;
        width: 480px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 350px;
        height: 770px;
    }

`;

const BlogSectionAcademic = styled.div`
    height: 490px;
    width: 720px;
    background: ${colors.mainPurple};
    border-radius: 15px;
    margin-top: 2rem;
    display: flex; 
    align-items: center;
    justify-content: center;
    transition: 0.375s;

    &:hover{
        transition: 0.375s;
        scale: 1.02;
    }


    @media screen and (max-width: 1700px){
        width: 580px;
        transition: 0.375s;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 510px;
        height: 550px;
    }
    @media screen and (max-width: 1100px){
        transition: 0.375s;
        width: 480px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 350px;
        height: 490px;
    }

`;

//blog 2

const BlogSectionPersonality = styled.div`
    height: 810px;
    width: 720px;   
    background: ${colors.mainPurple};
    border-radius: 15px;
    display: flex; 
    align-items: center;
    justify-content: center;
    transition: 0.375s;

    &:hover{
        transition: 0.375s;
        scale: 1.02;
    }


    @media screen and (max-width: 1700px){
        width: 580px;
        transition: 0.375s;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 510px;
        height: 850px;
    }

    @media screen and (max-width: 1100px){
        transition: 0.375s;
        width: 480px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 350px;
        height: 660px;
    }
`;

const BlogSectionAthletic = styled.div`
    height: 470px;
    width: 720px;
    background: ${colors.mainPurple};
    border-radius: 15px;
    margin-top: 2rem;
    display: flex; 
    align-items: center;
    justify-content: center;
    transition: 0.375s;

    &:hover{
        transition: 0.375s;
        scale: 1.02;
    }


    @media screen and (max-width: 1700px){
        width: 580px;
        transition: 0.375s;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 510px;
        height: 600px;
    }

    @media screen and (max-width: 1100px){
        transition: 0.375s;
        width: 480px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 350px;
        height: 430px;
    }

`;


const BlogSectionGame = styled.div`
    height: 560px;
    width: 720px;
    background: ${colors.mainPurple};
    border-radius: 15px;
    margin-top: 2rem;
    display: flex; 
    align-items: center;
    justify-content: center;
    transition: 0.375s;

    &:hover{
        transition: 0.375s;
        scale: 1.02;
    }


    @media screen and (max-width: 1700px){
        transition: 0.375s;
        width: 580px;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 510px;
        height: 620px;
    }

    @media screen and (max-width: 1100px){
        transition: 0.375s;
        width: 480px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 350px;
        height: 480px;
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
    }

`;


//coding boxes 
const TitleSocialDivCoding = styled.div`
    height: 460px;
    width: 620px; 
    transition: 0.375s;


    h1{
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
    }

    @media screen and (max-width: 1700px){
        transition: 0.375s;
        width: 500px;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 400px;
        height: 530px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 320px;
        height: 460px;
    }

`;

const SocialDivMainCoding = styled.div`
    height: 150px;
    width: 620px;
    border-radius: 15px;
    background: ${colors.secondaryPurple};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.375s;


    @media screen and (max-width: 1700px){
        transition: 0.375s;
        width: 500px;
        height: 130px;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 400px;
        height: 100px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 320px;
        height: 100px;
    }

`;

const SocialDivCoding = styled.div`
    width: 500px;
    position: absolute;
    display: flex;
    align-items: center;
    transition: 0.375s;
    

    h1{
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
    }

    @media screen and (max-width: 1700px){
        transition: 0.375s;
        width: 470px;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 380px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 310px;
    }

`;

//personality boxes 
const TitleSocialDivPersonality = styled.div`
    height: 720px;
    width: 620px; 
    transition: 0.375s;



    h1{
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
    }


    @media screen and (max-width: 1700px){
        transition: 0.375s;
        width: 500px;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 400px;
        height: 680px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 320px;
        height: 590px;
    }


`;

const SocialDivMainPersonality = styled.div`
    height: 150px;
    width: 620px;
    border-radius: 15px;
    background: ${colors.secondaryPurple};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.375s;


    @media screen and (max-width: 1700px){
        transition: 0.375s;
        width: 500px;
        height: 140px;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 400px;
        height: 100px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 320px;
    }


`;

const SocialDivPersonality = styled.div`    
    width: 500px;
    display: flex;
    align-items: center;
    position: absolute;
    transition: 0.375s;

    
    

    h1{
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
    }

    @media screen and (max-width: 1700px){
        transition: 0.375s;
        width: 470px;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 380px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 310px;
    }

`;


//athletics boxes
const TitleSocialDivAthletics  = styled.div`
    height: 400px;
    width: 620px; 
    transition: 0.375s;



    h1{
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
    }

    @media screen and (max-width: 1700px){
        transition: 0.375s;
        width: 500px;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 400px;
        height: 410px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 320px;
        height: 350px;
    }

`;

const SocialDivMainAthletics = styled.div`
    height: 150px;
    width: 620px;
    border-radius: 15px;
    background: ${colors.secondaryPurple};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.375s;


    @media screen and (max-width: 1700px){
        transition: 0.375s;
        width: 500px;
        height: 140px;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 400px;
        height: 100px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 320px;
    }
`;

const SocialDivAthletics = styled.div`
    width: 500px;
    position: absolute;
    display: flex;
    align-items: center;
    transition: 0.375s;

    

    h1{
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
    }

    @media screen and (max-width: 1700px){
        transition: 0.375s;
        width: 470px;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 380px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 310px;
    }


`;

//Games boxes
const TitleSocialDivGames = styled.div`
    height: 480px;
    width: 620px; 
    transition: 0.375s;



    h1{
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
    }

    @media screen and (max-width: 1700px){
        transition: 0.375s;
        width: 500px;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 400px;
        height: 490px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 320px;
        height: 430px;
    }

`;

const SocialDivMainGames = styled.div`
    height: 150px;
    width: 620px;
    border-radius: 15px;
    background: ${colors.secondaryPurple};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.375s;


    @media screen and (max-width: 1700px){
        transition: 0.375s;
        width: 500px;
        height: 140px;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 400px;
        height: 100px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 320px;
    }
`;

const SocialDivGames = styled.div`
    width: 500px;
    position: absolute;
    display: flex;
    align-items: center;
    transition: 0.375s;

    

    h1{
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
    }

    @media screen and (max-width: 1700px){
        transition: 0.375s;
        width: 470px;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 380px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 310px;
    }

`;

//academics boxes
const TitleSocialDivAcademics = styled.div`
    height: 430px;
    width: 620px; 
    transition: 0.375s;



    h1{
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
    }

    @media screen and (max-width: 1700px){
        transition: 0.375s;
        width: 500px;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 400px;
        height: 490px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 320px;
        height: 430px;
    }

`;

const SocialDivMainAcademics = styled.div`
    height: 150px;
    width: 620px;
    border-radius: 15px;
    background: ${colors.secondaryPurple};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.375s;


    @media screen and (max-width: 1700px){
        transition: 0.375s;
        width: 500px;
        height: 130px;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 400px;
        height: 100px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 320px;
    }
`;

const SocialDivAcademics = styled.div`
    width: 500px;
    position: absolute;
    display: flex;
    align-items: center;
    transition: 0.375s;

    

    h1{
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
    }

    @media screen and (max-width: 1700px){
        transition: 0.375s;
        width: 470px;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 380px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 310px;
    }

`;

//Music boxes 
const TitleSocialDivMusic = styled.div`
    height: 720px;
    width: 620px; 
    transition: 0.375s;



    h1{
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
    }

    @media screen and (max-width: 1700px){
        transition: 0.375s;
        width: 500px;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 400px;
        height: 850px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 320px;
        height: 690px;
    }

`;

const SocialDivMainMusic = styled.div`
    height: 325px;
    width: 620px;
    border-radius: 15px;
    background: ${colors.secondaryPurple};
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    padding-left: 1rem;
    padding-top: 1rem;

    @media screen and (max-width: 1700px){
        transition: 0.375s;
        width: 500px;
        height: 310px;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 400px;
        height: 310px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 320px;
        height: 270px;
    }
`;

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
        font-size: 1.5rem;
        position: relative;
        padding-top: 0;
        bottom: 1.1rem;
        padding-left: 0.8rem;
        transition: 0.375s;

        @media screen and (max-width: 480px){
            font-size: 1rem;
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

        @media screen and (max-width: 1350px){
            font-size: 1.2rem;
        }

        @media screen and (max-width: 480px){
            font-size: 1rem;
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

