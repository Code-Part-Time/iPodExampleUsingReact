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

class OuterLayerIpod extends React.Component{
    constructor(){
        super();
        this.state = {
            // system : [
            //     {
            //         page : 'home',
            //         menuVisible : false,
            //         bigStatus : true,
            //     }
            // ],
            menuOn : false,
            currentlySelected : 'home',
            currentlyOpenedPage : 'home'

            
        }
    }

    rotation = () => {
        var pages = ['home', 'page1', 'page2', 'page3', 'page4'];
        var { currentlySelected } = this.state;
        var { menuOn } = this.state;
        var scrollPageName=pages[0];
        var i=0;

        var target = document.getElementById('outercontainer');
        var region = ZingTouch.Region(target);

        var currentAngle=0;
        var change = 0;
        
        this.state.enter = this.state.enter + 1;

        region.bind(target, 'rotate', (e) => {
            currentAngle = e.detail.distanceFromLast;

            if(menuOn){
                if(currentAngle < 0){
                    // console.log(change);
                    change--;
                    if(change === -15){
                        console.log("change state minus");
                        change = 0;
    
                        scrollPageName = pages[i]
                        i=i-1;
                        if(i<0){
                            i=pages.length-1;
                        }
                        currentlySelected = scrollPageName;
                        this.setState({
                            currentlySelected: currentlySelected
                        })
                        console.log(this.state);
                    }
                }else{
                    // console.log(change);
                    change++;
                    if(change === 15){
                        console.log("change state plus");
                        change = 0;
    
                        scrollPageName = pages[i]
                        i=i+1;
                        if(i>pages.length-1){
                            i=0;
                        }
                        currentlySelected = scrollPageName;
                        this.setState({
                            currentlySelected: currentlySelected
                        })
                        console.log(this.state);
    
    
                    }
                }
            }
            
        });
        
    }

    menuOnOff = () => {
        const { menuOn } = this.state;
        if (menuOn){
            this.setState({
                menuOn: false
            })
        }else{
            this.setState({
                menuOn: true
            })
        }
        // console.log(this.state);
        
    }


    

    render(){
        const { menuOn } = this.state;
        const { currentlySelected } = this.state;
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
                        <CoverPage />
                        {/* <GamePage /> */}
                        {/* <Homepage /> */}
                    </div>
                </div>
                <div id="outercontainer" className='buttons' onClick={this.rotation}>
                    <div className='menuButton'>
                        <span className='menuSpan' onClick={this.menuOnOff}>MENU</span>
                    </div>
                    <div className='prevnextButtons'>
                        <div className='prevButton'>
                            <span className='spanIcons'>
                            <FontAwesomeIcon icon={faBackwardFast} className='icon1'/>
                            </span>
                        </div>
                        <div className='centreButton'></div>
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