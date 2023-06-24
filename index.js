function addingEventListener() {

    const button = document.getElementById("button");

    function clickAlert(){
        alert("i was clicked!");
        console.log("i was clicked!");
    }
    return button.addEventListener("click",clickAlert);
}



