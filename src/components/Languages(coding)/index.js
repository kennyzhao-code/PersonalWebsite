import React from 'react'
import {LanguageContainer, LanguageContentWrapper, LanguageRowContainer} from "./LanguageElements"
import ProgressBar from './ProgressBar.js'
import ProgressBarCss from './ProgressBarCss.js'
import ProgressBarJava from './ProgressBarJava.js'
import ProgressBarJavaScript from './ProgressBarJavaScript.js'

const Languages = () => {
    return (

    <LanguageContainer>
        
        <LanguageContentWrapper data-aos-once='true' data-aos="fade-up">


                <LanguageRowContainer>

                    <ProgressBar done='50'/> 

                    <ProgressBarCss done = '55'/>

                    <ProgressBarJava done = '60'/>

                    <ProgressBarJavaScript done = '60'/>

               </LanguageRowContainer>

        
        </LanguageContentWrapper>
    </LanguageContainer>

    )
}

export default Languages


/**<LanguageRow>

                <LanguageRowContainer>

                    <ProgressBarTitleDiv>
                        <ProgressBarTitle>Python<CountUp end={50} duration={3.5}/>%</ProgressBarTitle>
                    </ProgressBarTitleDiv>

                    <ProgressBarTitleDiv>
                        <ProgressBarTitle>HTML/CSS/Bootstrap&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;<CountUp end={55} duration={3.5}/>%</ProgressBarTitle>
                    </ProgressBarTitleDiv>

                    <ProgressBarTitleDiv>
                        <ProgressBarTitle>Java&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;<CountUp end={80} duration={3.5}/>%</ProgressBarTitle>
                    </ProgressBarTitleDiv>

                    <ProgressBarTitleDiv>
                        <ProgressBarTitle>JavaScript&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;<CountUp end={60} duration={3.5}/>%</ProgressBarTitle>
                    </ProgressBarTitleDiv>

               </LanguageRowContainer>

            </LanguageRow>
 */