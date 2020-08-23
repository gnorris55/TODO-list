// imports--------------------------------
import _ from 'lodash';
import { listController } from './list.js'
//----------------------------------------

// what objects the list will be made of
function listItem(topic, body, finished, type) {

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

// test -----------------------------
listController.createItem("get haircut", "this needs to be done soon", true, "urgent");
listController.createItem("do homework", "i need to do math and science homework", false, "general");
listController.createItem("wack Tom", "high Tom... bye Tom", true, "general");
listController.createItem("protest", "I dont know what i'm mad at but I AM MAD", false, "general");
//-----------------------------------

// exports---------
export { listItem }
//-----------------



