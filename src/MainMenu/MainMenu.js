import React from 'react';
import './MainMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const MainMenu = (props) => {
    const { menuOn } = props;
    var menuContainer = document.getElementById('menuCont');
    
    if(menuOn){
        // console.log(menuContainer);
        if(menuContainer != null){
            menuContainer.classList.add("hideMenu");
        }
    }else{
        // console.log(menuContainer);
        if(menuContainer != null){
            menuContainer.classList.remove("hideMenu");
        }
    }
    return(
        <div className='menuContainer' id='menuCont'>
            <div className='mainMenuName'>iPod - Menu</div>
            <div className='homeList singleMenu'><FontAwesomeIcon icon={faHome} className='menuicon'/>Home</div>
            <div className='musicList singleMenu'><FontAwesomeIcon icon={faMusic} className='menuicon'/>Music</div>
            <div className='coverList singleMenu'><FontAwesomeIcon icon={faImages} className='menuicon'/>Cover</div>
            <div className='gameList singleMenu'><FontAwesomeIcon icon={faGamepad} className='menuicon'/>Game</div>
            <div className='settingsList singleMenu'><FontAwesomeIcon icon={faGear} className='menuicon'/>Settings</div>
        </div>
    )
    
}


export default MainMenu;