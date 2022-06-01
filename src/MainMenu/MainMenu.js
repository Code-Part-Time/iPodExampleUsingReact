import React from 'react';
import './MainMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const MainMenu = (props) => {
    const { menuOn, currentlySelected } = props;
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

    var pageIds = ['home', 'page1', 'page2', 'page3', 'page4'];
    if(menuContainer != null){
        for(var i = 0; i<pageIds.length; i++){
            var page = pageIds[i];
            var selectedDiv = document.getElementById(page);
            if(currentlySelected == page){
                selectedDiv.classList.add("currentlySelected");
            }else{
                selectedDiv.classList.remove("currentlySelected");
            }
        }
    }

    return(
        <div className='menuContainer' id='menuCont'>
            <div className='mainMenuName'>iPod - Menu</div>
            <div className='homeList singleMenu' id='home'><FontAwesomeIcon icon={faHome} className='menuicon'/>Home</div>
            <div className='musicList singleMenu' id='page1'><FontAwesomeIcon icon={faMusic} className='menuicon'/>Music</div>
            <div className='coverList singleMenu' id='page2'><FontAwesomeIcon icon={faImages} className='menuicon'/>Cover</div>
            <div className='gameList singleMenu' id='page3'><FontAwesomeIcon icon={faGamepad} className='menuicon'/>Game</div>
            <div className='settingsList singleMenu' id='page4'><FontAwesomeIcon icon={faGear} className='menuicon'/>Settings</div>
        </div>
    )
    
}


export default MainMenu;