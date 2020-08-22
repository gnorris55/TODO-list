const listViews = (function() {

    const template = document.getElementById("list-container");
    // inserts list data into HTML document via moustache
    function render(list) {
        reload();
        loadTODO(list);
    }

    //resets template so items dont stack
    function reload() {
        template.innerHTML = "";
    }
    function loadTODO(list) {

        for (let i = 0; i < list.length; i++) {
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
            template.appendChild(status);
            template.appendChild(topic);
            template.appendChild(body);
            template.appendChild(status);
        }
    }

    return {
        render: render
    };
}) ();

// exports-----------
export { listViews };
//-------------------