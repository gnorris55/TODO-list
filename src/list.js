import { listViews } from './list_views.js'
const listController = (function() {

    function hello() {
        alert("hello");
        listViews.secondHello();
    }

    return {
        hello: hello
    };
}) ();

export { listController }