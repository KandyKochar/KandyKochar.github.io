// var num1 = 12;
// let num2 = 34;

// const name = "John Doe";


// const person = {

//     firstName: "John",
//     lastName: "Doe",
//     age: 90,
//     eyeColor: "green"
// }

// const numbers = [11, 12, 14, 18, 19];
// Document.write(numbers[0]);
// Document.write(numbers[1]);

// document.getElementById("demo").style.color = "50px";

// function myFunction(){

//       document.getElementById('test').innerHTML = "Hello JavaScript!";
// }


function myMove(){

    let id= null;
    let element = document.getElementById("animated");
    let pos = 0;
    clearInterval(id);
    setInterval(frame, 5);
    function frame(){
        if (pos == 450){

            clearInterval(id);
        }
        else {

            pos++;
            element.style.top = pos + "px";
            element.style.left = pos + "px";
        }
    }
}




