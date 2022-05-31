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

class OuterLayerIpod extends React.Component{
    constructor(){
        super();
        this.state = {
            system : [
                {
                    page : 'home',
                    menuVisible : false,
                    bigStatus : true,
                }
            ],
            menuOn : false
            
        }
    }

    rotation = () => {
        var target = document.getElementById('outercontainer');
        var region = ZingTouch.Region(target);

        var currentAngle=0;
        var change = 0;
        
        this.state.enter = this.state.enter + 1;

        region.bind(target, 'rotate', function(e){
            currentAngle = e.detail.distanceFromLast;

            if(currentAngle < 0){
                console.log(change);
                change++;
                if(change === 15){
                    console.log("change state minus");
                    change = 0;
                }
            }else{
                console.log(change);
                change++;
                if(change === 15){
                    console.log("change state plus");
                    change = 0;
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
        return(
            
            <div className='outerLayer'>
                <div>
                    
                </div>
                <div className='screen'>
                    <StatusBar />
                    <div className='belowStatus'>
                        <MainMenu
                            menuOn = {menuOn}
                        />
                        <Homepage />
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