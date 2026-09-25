// Welcome message

document.querySelector("button").onclick=function(){

    alert(
    "Welcome to NBKR Institute of Science & Technology"
    );

};



// Current year update

let year=new Date().getFullYear();


document.querySelector("footer p:last-child").innerHTML=

"© NBKRIST "+year+". All Rights Reserved.";
