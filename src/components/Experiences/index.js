import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import { TabContainer, TabH1, MasterTab } from './TabsElements';
import './TabElementsCss.css'


const Experiences = () => {
    return (
      <MasterTab name = "experiences">

        <TabH1 data-aos-once='true' data-aos="fade-up"> Experiences ⎯⎯ </TabH1>

          <TabContainer data-aos-once='true' data-aos="fade-up">

                <Tabs defaultTab="OHSEA" vertical>

                  <TabList>
                    <Tab tabFor="OHSEA">OHSEA</Tab>
                    <Tab tabFor="AVGL">AVGL</Tab>
                    <Tab tabFor="PETHS CS">PETHS CS</Tab>
                    <Tab tabFor="TMC">TMC</Tab>
                  </TabList>

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
                    <h1 style={{ fontSize: '26px'}}>Tournament Organizer and Co-Founder of Student Leaders @ <span style={{color: '#a2dcc1', fontSize: '26px'}}>American Video Game League</span></h1>
                    <h2 style={{fontSize: '20px'}}>May 2021 - Present</h2>
                    <p>• Tournament organizer during tournaments and events such as Intel Inspires and TEXSef <br/>
                      • Responsible for all student related events in AVGL <br/>
                      • Aiding other student leaders during events and tournament planning <br/>
                      • Data digging for important information to grow Student Leaders and AVGL <br/>
                    </p>
                  </TabPanel>



                  <TabPanel tabId="PETHS CS">
                    <h1 style={{fontSize: '26px'}}>Executive @ <span style={{color: '#88A1BD', fontSize: '26px'}}>Trudeau Computer Science Club</span></h1>
                    <h2 style={{fontSize: '20px'}}>June 2021 - Present</h2>
                    <p>• Responsible for teaching and preparing lessons <br/>
                      • Aiding and organizing events such as Hackathons and Game Jams <br/>
                      • Aiding other executives and answering questions during their presentation
                    </p>
                  </TabPanel>

                  <TabPanel tabId="TMC">
                    <h1 style={{ fontSize: '26px'}}>WebMaster @ <span style={{color: '#C3B1E1', fontSize: '26px'}}>Trudeau Music Council</span></h1>
                    <h2 style={{fontSize: '20px'}}>Nov 2020 - Present</h2>
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
