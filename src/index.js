// imports--------------------------------
import _ from 'lodash';
import { listController } from './list.js'
//----------------------------------------

// what objects the list will be made of
function listItem(topic, body, finished) {

    const getTopic = () => {
        return topic;
    }
    const getBody = () => {
        return body;
    }

    const getStatus = () => {
        return finished;
    }

    return {
        getTopic: getTopic,
        getBody: getBody,
        getStatus: getStatus
    }

}

// test -----------------------------
listController.createItem("get haircut", "this needs to be done soon", true);
listController.createItem("do homework", "i need to do math and science homework", false);
listController.createItem("wack Tom", "high Tom... bye Tom", true);
//-----------------------------------

// exports---------
export { listItem }
//-----------------



