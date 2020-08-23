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
        template.innerHTML = "";
    }
    
    function loadProjects(projects) {
        for (let i = 0; i < projects.length; i++) {
            let project = document.createElement("div")
            project.id = projects[i];
            project.innerHTML = projects[i];
            template.appendChild(project);
        }
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

            // adds all item properties to the template
            project.appendChild(status);
            project.appendChild(topic);
            project.appendChild(body);
            project.appendChild(status);
        }
    }

    return {
        render: render
    };
}) ();

// exports-----------
export { listViews };
//-------------------