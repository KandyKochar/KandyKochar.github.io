function myMove(){
    let id= null;
    let element = document.getElementById("animated");
    let pos = 0;
    clearInterval(id);
    setInterval(frame, 5);

    function frame(){
        if (pos == 440){
            clearInterval(id);
        }
        else {
            pos++;
            element.style.bottom = pos + "px";
        }
    }
}