"use strict";

// let timer = document.getElementById("timer");

//1.

    //a)
    // setInterval ( function () {
    //     console.log(i++);
    // }, 5000);

    let i = 0;

    setInterval(()=> {
        console.log(i++);
    },5000);

    //b)
    // function square(x) {
    //     return x^2;
    // }

    let square = x => x^2;

    //c)
    // form.onhover = function() {
    //     alert("hovering");
    // }

    form.onhover = () => alert("hovering");

// 2.  In 3 lines, submit an AJAX request to file.php with a get variable of id=99.  Let the request object be named "xhr".
let xhr = new XMLHttpRequest();
xhr.open("get", "file.php");
xhr.send("id=99");

// 3.  What property of the xhr would contain the response text?
xhr.responseText

// 4.  Do the same request with Fetch! (just 1 line  ... no need for outputting the response)
fetch("get.id=99")

//5.  A promise object: promise.
promise
.then(msg => "Promise kept")
.then(msg2 => msg2.substr(0,3))
.then(msg3 => console.log(msg3))
.catch(msg=>console.log(msg));
// If the promise resolves, what is the value displayed in the console?
"Pro";