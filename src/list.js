// imports---------------------------------
import { listViews } from './list_views.js'
import { listItem } from './index.js'
import { get } from 'lodash';
//-----------------------------------------

// modules-------------------------------------------------------------------------------------

// for controlling data and moving it between files
const listController = (function() {

    // creates an item for the list then sends it to the list module
    function createItem(title, body, finished) {
        let item = listItem(title, body, finished);
        listModule.addToList(item);
    }

    // sends data to renderer
    function sendList(list) {
        listViews.render(list);
    }

    return {
        createItem: createItem,
        sendList: sendList
    };

}) ();

// is the module that contains the list of items
const listModule = (function () {

    let list = [];
    // adds list item to list
    function addToList(item) {
        list.push(item);
        // sends list to the controller so that data can be moved to renderer
        listController.sendList(list);
    }

    return {
        addToList: addToList,
    };

}) ();

//--------------------------------------------------------------------------------------------

// exports---------------
export { listController }
//-----------------------