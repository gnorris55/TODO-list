import {listController} from './list.js'

const listViews = (function() {

    const template = document.getElementById("list-container");
    // inserts list data into HTML document via moustache
    function render(list, projects) {
        reload();
        loadProjects(projects);
        loadList(list);
    }

    //resets template so items dont stack
    function reload() {
        let form = document.getElementById("item-form");
        form.innerHTML = "";
        template.innerHTML = "";
    }
    
    // this is where the list items will be stored
    function loadProjects(projects) {

        // getting the div where the radio buttons will be stored
        for (let i = 0; i < projects.length; i++) {
            // creats a div for each project
            let project = document.createElement("div")
            project.id = projects[i];
            project.className = "project-item";
            // creates a title for each project
            let title = document.createElement("h3");
            title.innerHTML = projects[i];
            title.className = "project";

            loadRadioForm(projects[i]);
            
            //joins the project with HTML
            project.appendChild(title);
            template.appendChild(project);
        }
    }
    
    // loads buttons that will be used to assign items to projects
    function loadRadioForm(project) {

        // get div where the rado buttons will be placed
        let projectOptions = document.getElementById("item-form");

        // creating the radio button
        let projectRadio = document.createElement("input");
        let projectRadioLable = document.createElement("label");
        projectRadioLable.for = project;
        projectRadioLable.innerHTML = project;
        projectRadio.name = "project-type";
        projectRadio.type = "radio";
        projectRadio.value = project;

        //joining the radio buttons to the rest of the project
        projectOptions.appendChild(projectRadioLable);
        projectOptions.appendChild(projectRadio);
    }


    function loadList(list) {

        for (let i = 0; i < list.length; i++) {
            // gets project that task is associated with
            let project = document.getElementById(list[i].getType());

            //creates element and asigns topic for each item
            let topic = document.createElement("h3");
            topic.innerHTML = list[i].getTopic();
            topic.className = "topic";

            //creates element and asigns body for each item
            let body = document.createElement("div");
            body.innerHTML = list[i].getBody();
            body.className = "item";

            let status = document.createElement("div");
            if (list[i].getStatus()) {
                status.innerHTML = "done";
            }
            else {
                status.innerHTML = "not done"
            }
            status.className = "item";

            let deleteButton = document.createElement("button");
            deleteButton.onclick = function() {
                listController.deleteItem(topic.textContent);
            }
            deleteButton.innerHTML = "delete";

            // adds all item properties to the template
            project.appendChild(status);
            project.appendChild(topic);
            project.appendChild(body);
            project.appendChild(status);
            if (!list[i].getStatus()) {

                let changeButton = document.createElement("button");
                changeButton.onclick = function() {
                    listController.changeStatus(topic.textContent);
                }
                changeButton.innerHTML = "change status";
                project.appendChild(changeButton);
            }
            project.appendChild(deleteButton);
        }
    }

    return {
        render: render
    };
}) ();

// exports-----------
export { listViews };
//-------------------