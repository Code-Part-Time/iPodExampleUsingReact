
const sideMenu = {
    menuStats: false,
    onSelect: 'home'
}

// GETTING PROPERTIES
Object.defineProperty(sideMenu, "getMenuStats", {
    get : function () {
        return this.menuStats;
    }
});

Object.defineProperty(sideMenu, "getOnSelect", {
    get : function () {
        return this.onSelect;
    }
});


// SETTING PROPERTIES
Object.defineProperty(sideMenu, "changeMenuStats", {
    set : function (value) {
        this.menuStats = value;
    }
});

Object.defineProperty(sideMenu, "changeOnSelect", {
    set : function (value) {
        this.onSelect = value;
    }
});


export default sideMenu;


// console.log(sideMenu.menuStats); // Monica

// // changing the property value
// sideMenu.changeMenuStats = 'Sarah';

// console.log(sideMenu.menuStats); // Sarah