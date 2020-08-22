const listViews = (function() {
    
    function secondHello() {
        alert("hello again");
    }

    return {
        secondHello: secondHello
    };
}) ();

export { listViews };