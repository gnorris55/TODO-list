// imports--------------------------------
import _ from 'lodash';
import { listController } from './list.js';
import { projects } from './list.js';
//----------------------------------------

// what objects the list will be made of
function listItem(topic, body, finished = false, type = "general") {

    const getTopic = () => {
        return topic;
    }
    const getBody = () => {
        return body;
    }

    const getStatus = () => {
        return finished;
    }

    const getType = () => {
        return type;
    }

    return {
        getTopic: getTopic,
        getBody: getBody,
        getStatus: getStatus,
        getType: getType
    }

}

function projectForm(value) {
    projects.addProject(value);
}
function itemForm(topic, body) {
    let type;

    let radios = document.getElementsByName('project-type');

    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            // do whatever you want with the checked radio
            type = radios[i].value;
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
    listController.createItem(topic, body, false, type);
}
// test -----------------------------
listController.createItem("get haircut", "this needs to be done soon", true, "urgent");
listController.createItem("do homework", "i need to do math and science homework", false);
listController.createItem("wack Tom", "high Tom... bye Tom", true, "urgent");
listController.createItem("protest", "I dont know what i'm mad at but I AM MAD", false);
//-----------------------------------

// exports---------
export { listItem }
window.projectForm = projectForm;
window.itemForm = itemForm;
//-----------------



