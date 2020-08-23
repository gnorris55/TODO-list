// imports---------------------------------
import { listViews } from './list_views.js'
import { listItem } from './index.js'
//-----------------------------------------

// modules-------------------------------------------------------------------------------------

// for controlling data and moving it between files
const listController = (function() {

    // creates an item for the list then sends it to the list module
    function createItem(title, body, finished, type) {
        let item = listItem(title, body, finished, type);
        listModule.addToList(item);
    }

    // sends data to renderer
    function sendList(list) {
        let projectList = projects.getProjects();
        listViews.render(list, projectList);
    }

    function deleteItem(value) {
        listModule.deleteItem(value);
    }
    function changeStatus(value) {
        listModule.changeStatus(value);
    }

    return {
        createItem: createItem,
        sendList: sendList,
        deleteItem: deleteItem,
        changeStatus: changeStatus
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

    function getList() {
        return list;
    }

    function deleteItem(value){
        for (let i = 0; i < list.length; i++) {
            if (list[i].getTopic() == value) {
                list.splice(i, 1);
                listController.sendList(list);
            }
        }
    }
    function changeStatus(value) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].getTopic() == value) {
                list[i].changeStatus();
                listController.sendList(list);
            }
        }
    }

    return {
        addToList: addToList,
        getList: getList,
        deleteItem: deleteItem,
        changeStatus: changeStatus

    };

}) ();

const projects = (function() {

    let projectList = ["general", "urgent", "done"];
    function addProject(project) {
        projectList.push(project);
        listController.sendList(listModule.getList());
    }
     function getProjects(){
        return projectList;
     } 

    return {
        addProject: addProject,
        getProjects: getProjects
    };

}) ();

//--------------------------------------------------------------------------------------------

// exports---------------
export { listController }
export { projects }
//-----------------------