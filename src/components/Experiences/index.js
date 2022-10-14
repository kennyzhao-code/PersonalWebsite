import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Tabs, Tab, TabPanel, TabList} from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import { TabContainer, TabH1, MasterTab, ImgOhsea, ImgAvgl, ImgPetcs, ImgTmc, TabText, ImgMacCss } from './TabsElements';
import './TabElementsCss.css'
import ohsea from '../../images/ohsea.png'
import avgl from '../../images/avgl.png'
import petcs from '../../images/petcs.jpeg'
import tmc from '../../images/tmc.jpeg'
import MacCss from '../../images/mcmasterCSS.jpeg'

const Experiences = () => {
    return (
      <MasterTab name = "experiences">

        <TabH1 data-aos-once='true' data-aos="fade-up"> Experiences ⎯⎯ </TabH1>

          <TabContainer data-aos-once='true' data-aos="fade-up">

        <div className = 'CompleteTabsExperience'> 
          <Tabs defaultTab="OHSEA" vertical>

                  <TabList>
                    <Tab className = 'tabTitleColor' tabFor="MacCss"><TabText style={{right: '0.6rem'}}>Mac CSS</TabText><ImgMacCss src = {MacCss} /></Tab>
                    <Tab className = 'tabTitleColor' tabFor="OHSEA"><TabText style={{left: '1rem'}}>OHSEA</TabText><ImgOhsea src = {ohsea} /></Tab>
                    <Tab className = 'tabTitleColor' tabFor="AVGL"><TabText style={{left: '1rem'}}>AVGL</TabText><ImgAvgl src = {avgl} /></Tab>
                    <Tab className = 'tabTitleColor' tabFor="PETHS CS"><TabText style={{right: '0.6rem'}}>PET CS</TabText><ImgPetcs src = {petcs}/></Tab>
                    <Tab className = 'tabTitleColor' tabFor="TMC"><TabText style={{left: '0.6rem'}}>TMC</TabText><ImgTmc src = {tmc}/></Tab>
                  </TabList>

                  <TabPanel tabId="MacCss">
                    <h1 style={{fontSize: '26px'}}>First Year Representative @ <span style={{color: '#FAC898', fontSize: '26px'}}>McMaster Computer Science Society</span></h1>
                    <h2 style={{fontSize: '20px'}}>October 2022 - Present</h2>
                    <p>• Responible for organizing and aiding in events <br/>
                      • Responible for communicating with first years about any issues and events<br/>
                      • Responible for bridging the communication between teachers and students <br/>
                      • Reponsible for representing all first year students in the society
                    </p>
                  </TabPanel>

                  <TabPanel tabId="OHSEA">
                    <h1 style={{fontSize: '26px'}}>Co-Founder and Lead Technology Developer @ <span style={{color: '#ff6961', fontSize: '26px'}}>Ontario High School Esports Association</span></h1>
                    <h2 style={{fontSize: '20px'}}>May 2021 - Present</h2>
                    <p>• Responible for organizing and preparing tournaments and events <br/>
                      • Responible for tech related issues during tournaments and events<br/>
                      • Responible for aiding and managing tech related software such as the Website and Bots <br/>
                      • Tournament organizer during tournaments and events
                    </p>
                  </TabPanel>

                  <TabPanel tabId="AVGL">
                    <h1 style={{ fontSize: '26px'}}>Tournament Organizer & Co-Founder of Student Leaders @ <span style={{color: '#a2dcc1', fontSize: '26px'}}>American Video Game League</span></h1>
                    <h2 style={{fontSize: '20px'}}>May 2021 - Present</h2>
                    <p>• Tournament organizer during tournaments and events such as Intel Inspires and TEXSef <br/>
                      • Responsible for all student related events in AVGL <br/>
                      • Aiding other student leaders during events and tournament planning <br/>
                      • Data digging for important information to grow Student Leaders and AVGL <br/>
                    </p>
                  </TabPanel>

                  <TabPanel tabId="PETHS CS">
                    <h1 style={{fontSize: '26px'}}>Executive @ <span style={{color: '#88A1BD', fontSize: '26px'}}>Trudeau Computer Science Club</span></h1>
                    <h2 style={{fontSize: '20px'}}>June 2021 - June 2022</h2>
                    <p>• Responsible for teaching and preparing lessons <br/>
                      • Aiding and organizing events such as Hackathons and Game Jams <br/>
                      • Aiding other executives and answering questions during their presentation
                    </p>
                  </TabPanel>

                  <TabPanel tabId="TMC">
                    <h1 style={{ fontSize: '26px'}}>WebMaster @ <span style={{color: '#C3B1E1', fontSize: '26px'}}>Trudeau Music Council</span></h1>
                    <h2 style={{fontSize: '20px'}}>Nov 2020 - June 2022</h2>
                    <p>• Reponsible for managing the council Website and links <br/>
                      • Aiding other executives and representatives during event planning <br/>
                      • Reponsible for maintaning the quality of instruments and deal with any music related issues
                    </p>
                  </TabPanel>
            </Tabs> 
          </div>
                  
                  


            <Tabs className = 'mobileTabsExperience' style ={{margin: 'auto'}} defaultTab="OHSEA">
                  <TabList>
                    <Tab className = 'tabTitleColor' tabFor="MacCss"><ImgMacCss src = {MacCss} /></Tab>
                    <Tab  className ='TabSelector' tabFor="OHSEA"><ImgOhsea src = {ohsea} /></Tab>
                    <Tab  className ='TabSelector' tabFor="AVGL"><ImgAvgl src = {avgl} /></Tab>
                    <Tab  className ='TabSelector' tabFor="PETHS CS"><ImgPetcs src = {petcs}/></Tab>
                    <Tab  className ='TabSelector' tabFor="TMC"><ImgTmc src = {tmc}/></Tab>
                  </TabList>

                  <TabPanel tabId="MacCss">
                    <h1 style={{fontSize: '26px',  marginTop: '2.5rem'}}>First Year Representative @ <span style={{color: '#FAC898', fontSize: '26px'}}>McMaster Computer Science Society</span></h1>
                    <h2 style={{fontSize: '20px'}}>October 2022 - Present</h2>
                    <p>• Responible for organizing and aiding in events <br/>
                      • Responible for communicating with first years about any issues and events<br/>
                      • Responible for bridging the communication between teachers and students <br/>
                      • Reponsible for representing all first year students in the society
                    </p>
                  </TabPanel>

                  <TabPanel className= 'TabPanelSelector'tabId="OHSEA">
                    <h1 style={{fontSize: '26px', marginTop: '2.5rem'}}>Co-Founder and Lead Technology Developer @ <span style={{color: '#ff6961', fontSize: '26px'}}>Ontario High School Esports Association</span></h1>
                    <h2 style={{fontSize: '20px'}}>May 2021 - Present</h2>
                    <p>• Responible for organizing and preparing tournaments and events <br/>
                      • Responible for tech related issues during tournaments and events<br/>
                      • Responible for aiding and managing tech related software such as the Website and Bots <br/>
                      • Tournament organizer during tournaments and events

                    </p>
                  </TabPanel>

                  <TabPanel className= 'TabPanelSelector' tabId="AVGL">
                    <h1 style={{ fontSize: '26px', marginTop: '2.5rem'}}>Tournament Organizer and Co-Founder of Student Leaders @ <span style={{color: '#a2dcc1', fontSize: '26px'}}>American Video Game League</span></h1>
                    <h2 style={{fontSize: '20px'}}>May 2021 - Present</h2>
                    <p>• Tournament organizer during tournaments and events such as Intel Inspires and TEXSef <br/>
                      • Responsible for all student related events in AVGL <br/>
                      • Aiding other student leaders during events and tournament planning <br/>
                      • Data digging for important information to grow Student Leaders and AVGL <br/>
                    </p>
                  </TabPanel>

                  <TabPanel className= 'TabPanelSelector'  tabId="PETHS CS">
                    <h1 style={{fontSize: '26px', marginTop: '2.5rem'}}>Executive @ <span style={{color: '#88A1BD', fontSize: '26px'}}>Trudeau Computer Science Club</span></h1>
                    <h2 style={{fontSize: '20px'}}>June 2021 - June 2022</h2>
                    <p>• Responsible for teaching and preparing lessons <br/>
                      • Aiding and organizing events such as Hackathons and Game Jams <br/>
                      • Aiding other executives and answering questions during their presentation
                    </p>
                  </TabPanel>

                  <TabPanel className= 'TabPanelSelector' tabId="TMC">
                    <h1 style={{ fontSize: '26px', marginTop: '2.5rem'}}>WebMaster @ <span style={{color: '#C3B1E1', fontSize: '26px'}}>Trudeau Music Council</span></h1>
                    <h2 style={{fontSize: '20px'}}>Nov 2020 - June 2022</h2>
                    <p>• Reponsible for managing the council Website and links <br/>
                      • Aiding other executives and representatives during event planning <br/>
                      • Reponsible for maintaning the quality of instruments and deal with any music related issues
                    </p>
                  </TabPanel>
              </Tabs>

            </TabContainer>
        </MasterTab>

    )
}

export default Experiences

