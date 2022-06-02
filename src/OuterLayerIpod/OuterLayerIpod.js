import React from 'react';
import './OuterLayerIpod.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faForwardFast } from '@fortawesome/free-solid-svg-icons';
import { faBackwardFast } from '@fortawesome/free-solid-svg-icons';
import ZingTouch from 'zingtouch';
import Homepage from '../Homepage/Homepage';
import StatusBar from '../StatusBar/StatusBar';
import MainMenu from '../MainMenu/MainMenu';
import GamePage from '../GamePage/GamePage';
import CoverPage from '../CoverPage/CoverPage';
import sideMenu from '../GlobalVariables';
import MusicPage from '../MusicPage/MusicPage';
import SettingsPage from '../SettingsPage/SettingsPage';

class OuterLayerIpod extends React.Component{
    constructor(){
        super();
        this.state = {
            menuOn : false,
            currentlySelected : 'home',
            currentlyOpenedPage : 'home'
        }
    }

    rotation = () => {
        
        var pages = ['home', 'page1', 'page2', 'page3', 'page4'];
        var scrollPageName=pages[0];

        var target = document.getElementById('outercontainer');
        var region = ZingTouch.Region(target);

        var currentAngle=0;
        var angles = 360/pages.length;
        
        var startAngles = [];
        var endAngles = [];
        var tempAngle=0;

        for(var i=0;i<pages.length;i++){
            startAngles.push(tempAngle);
            tempAngle = tempAngle + angles;
            endAngles.push(tempAngle);
            tempAngle=tempAngle+1;
        }

        region.bind(target, 'rotate', (e) => {
            currentAngle = e.detail.distanceFromOrigin;

            console.log(e.detail.angle);
            // console.log(sideMenu.menuStats);

            for(var i=0;i<pages.length;i++){
                if(e.detail.angle>startAngles[pages.length-1-i] && e.detail.angle<endAngles[pages.length-1-i] && sideMenu.menuStats===true){
                    console.log('rendered');
                    scrollPageName = pages[i];

                    this.setState({
                        currentlySelected: scrollPageName
                    })
                }
            }
        })
    }

    menuOnOff = () => {
        const { menuOn } = this.state;
        if (menuOn){
            sideMenu.changeMenuStats = false;
            this.setState(() => {
                return { 
                    menuOn: false 
                }
            })
        }else{
            sideMenu.changeMenuStats = true;
            this.setState(() => {
                return {
                    menuOn: true
                }
            })
        }
        // console.log(sideMenu.menuStats);
        // return (menuOn);
    }

    enterPage = (currentlySelected) => {
        console.log(currentlySelected);
        this.setState(() => {
            return {
                currentlyOpenedPage : currentlySelected,
                menuOn: false
            }
        })
        sideMenu.changeMenuStats = false;
        // console.log(this.state.currentlyOpenedPage);
    }


    

    render(){
        const { menuOn } = this.state;
        const { currentlySelected } = this.state;
        const { currentlyOpenedPage } = this.state;
        // console.log(this.state);
        return(
            
            <div className='outerLayer'>
                <div>
                    
                </div>
                <div className='screen'>
                    <StatusBar />
                    <div className='belowStatus'>
                        <MainMenu
                            menuOn = { menuOn }
                            currentlySelected = { currentlySelected }
                        />
                        {(currentlyOpenedPage === 'page4') && <SettingsPage />}
                        {(currentlyOpenedPage === 'page1') && <MusicPage />}
                        {(currentlyOpenedPage === 'page2') && <CoverPage />}
                        {(currentlyOpenedPage === 'page3') && <GamePage />}
                        {(currentlyOpenedPage === 'home') && <Homepage />}
                    </div>
                </div>
                <div id="outercontainer" className='buttons' onClick={() => this.rotation()}>
                    <div className='menuButton'>
                        <span className='menuSpan' onClick={this.menuOnOff}>MENU</span>
                    </div>
                    <div className='prevnextButtons'>
                        <div className='prevButton'>
                            <span className='spanIcons'>
                            <FontAwesomeIcon icon={faBackwardFast} className='icon1'/>
                            </span>
                        </div>
                        <div className='centreButton' id="innercontainer" onClick={() => this.enterPage(currentlySelected)}></div>
                        <div className='nextButton'>
                            <span className='spanIcons'>
                                <FontAwesomeIcon icon={faForwardFast} className='icon1'/>
                            </span>
                        </div>
                    </div>
                    <div className='playButton'>
                        <span className='spanIcons'>
                            <FontAwesomeIcon icon={faPlay} className='icon2'/>
                            <FontAwesomeIcon icon={faPause} className='icon2'/>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default OuterLayerIpod;