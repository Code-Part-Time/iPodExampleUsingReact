import React from 'react';
import './StatusBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons';




class StatusBar extends React.Component{

    constructor(){
        super();
        this.state = {
            time : '',
            wifi : false,
            battery : '',
        }
    }

    componentDidMount = () => {
        // console.log(this.formatAMPM(new Date));
        const currentTime = this.formatAMPM(new Date);
        
        this.setState({
            time : currentTime
        })

        if(navigator.onLine){
            this.setState({
                wifi : true
            })
        } else {
            this.setState({
                wifi : false
            })
        }
    }

    formatAMPM = (date) => {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    render(){
        // console.log('this.props',this.props.system);
        const { time, wifi, battery } = this.state;
    return (
        <div className='StatusBarDiv'>
            <div className='rightStats'>
                <FontAwesomeIcon icon={faApple} className='icon'/>
            </div>
            <div className='leftStats'>
                <div>
                {wifi && <FontAwesomeIcon icon={faWifi} className='wifiicon'/>}
                {(!wifi) && <FontAwesomeIcon icon={faWifi} className='nowifiicon'/>}
                </div>
                <div><FontAwesomeIcon icon={faVolumeHigh} className='icon'/></div>
                <div className='timeDiv'>{time}</div>
                <div><FontAwesomeIcon icon={faBatteryThreeQuarters} className='icon'/></div>
            </div>
        </div>
    );
    }
    
}

export default StatusBar;