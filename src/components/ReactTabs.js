import React, { Component } from 'react'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';


import DeviceDetails from './DeviceDetails'
const devices = [
    {
        id:1,
        name:'BED LAMP',
        category:'Bedroom',
        imgURL: require("../assets/images/lamp.png")
    },
    {
        id:2,
        name:'NORIA AC',
        category:'Bedroom',
        imgURL: require("../assets/images/ac.png")
    },
    {
        id:3,
        name:'DOOR LOCK',
        category:'Home office',
        imgURL: require("../assets/images/lock.png")
    },
    {
        id:4,
        name:'LG TV',
        category:'Living room',
        imgURL: require("../assets/images/tv.png")
    },
    {
        id:5,
        name:'THERMOSTAT',
        category:'Bedroom',
        imgURL: require("../assets/images/thermostat.png")
    }

]
export default class ReactTabs extends Component {
    state = {
        activeTab: "tab-2"
    }
    handleChange = (tab) => {
        this.setState({
            activeTab: tab
        })
        // const id = tab + "-tab";
        // document.getElementById(id).scrollIntoView({ block: 'start', behavior: 'smooth' });
        // var topOfElement = document.getElementById(id).offsetTop - 100;
        // console.log(topOfElement)
        // window.scroll({ top: topOfElement, behavior: "smooth" });

    }

    render() {
        return (

            <Tabs defaultTab="tab-2" vertical>
                <TabList >
                    <div className="outer-container">
                        <div className="inner-container">
                            <div className="element">
                                <span className="fadeTop" ></span>
                                <div className="itemList">
                                    {devices.map(each => {
                                        const tabFor = "tab-" + each.id
                                        return (
                                            <Tab key={each.id} tabFor={tabFor}
                                                onClick={() => this.handleChange(tabFor)}
                                                style={{ 'width': '100%' }}
                                            >

                                                {this.state.activeTab === tabFor
                                                ?(<div className="sidebarSelected">
                                                <div className="ItemContent">
                                                  <div className="ItemContentInner">
                                                    <div className="itemName">{each.name}</div>
                                                    <div className="itemNameCategory">
                                                      In <span>{each.category}</span>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="sidebarItemImg">
                                                <img
                                                  src={each.imgURL}
                                                  alt=""
                                              />
                                                </div>
                                                <div className="sidebarIconImg">
                                                  <img src={require("../assets/images/chevron-right.png")} alt="" />
                                                </div>
                                              </div>)
                                              :(<div className="sidebarItem">
                                              <div className="sidebarItemImg">
                                              <img
                                                  src={each.imgURL}
                                                  alt=""
                                              />
                                              </div>
                                              <div className="ItemContent">
                                              <div className="ItemContentInner">
                                                <div className="itemName">{each.name}</div>
                                                <div className="itemNameCategory">
                                                    In <span>{each.category}</span>
                                                </div>
                                              </div>
                                              </div>
                                          </div>)
                                                }


                                            </Tab>
                                        )
                                    })}
                                </div>
                                {/* <fadeBottom /> */}
                                <span className="fadeBottom" ></span>
                            </div>
                        </div>
                    </div>
                </TabList>

                <div className="main-content">
                    {devices.map(each => {
                        const tabId = "tab-" + each.id
                        return (
                            <TabPanel key={each.id} tabId={tabId}>
                                <DeviceDetails details={each}/>
                                {/* <p>{each.email}</p>
                                <p>{each.body}</p> */}
                            </TabPanel>
                        )
                    })}
                </div>

            </Tabs>

        );
    }

}
