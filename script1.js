// ==============================
// Task 1 : Linking JavaScript
// ==============================

function showMessage() {
    document.getElementById("linkResult").innerText =
        "JavaScript linked successfully!";
}

// ==============================
// Task 2 : DOM Selectors
// ==============================

function runSelectors() {

    // Selecting by Class Name
    const descriptions = document.getElementsByClassName("description");
    console.log("Elements with class 'description':", descriptions);

    // Selecting by Tag Name
    const allParagraphs = document.getElementsByTagName("p");
    console.log("All <p> elements:", allParagraphs);

    // Selecting by Name
    const buttonByName = document.getElementsByName("myButton");
    console.log("Button with name 'myButton':", buttonByName);

    // Using querySelector (selects first match)
    const firstParagraph = document.querySelector(".description");
    console.log("First element with class 'description':", firstParagraph);

    // Using querySelectorAll (selects all matches)
    const allDescriptions = document.querySelectorAll(".description");
    console.log("All elements with class 'description':", allDescriptions);

    alert("Open F12 → Console to see the selector output.");
}

// ==============================
// Task 3 : Event Listener
// ==============================

document.getElementById("clickButton").addEventListener("click", function () {
    document.getElementById("message").innerText = "Button clicked!";
});

document.getElementById("textInput").addEventListener("input", function (event) {
    document.getElementById("inputDisplay").innerText =
        "You typed: " + event.target.value;
});

document.getElementById("hoverBox").addEventListener("mouseover", function () {
    this.style.backgroundColor = "orange";
});

document.getElementById("hoverBox").addEventListener("mouseout", function () {
    this.style.backgroundColor = "lightblue";
});

// ==============================
// Task 4 : Button Click Events
// ==============================

const output1 = document.getElementById("output1");

document.getElementById("btn1").addEventListener("click", function () {
    output1.innerText = "B.Tech III Year CSE";
});

document.getElementById("btn2").addEventListener("click", function () {
    output1.innerText = "Computer Science and Engineering";
});

document.getElementById("btn3").addEventListener("click", function () {
    output1.innerText = "Full Stack Development - II";
});

// ==============================
// Task 5 : Three Types of Functions
// ==============================

const output2 = document.getElementById("output2");

// Function Declaration
function greetDeclaration() {
    output2.innerText = "Hello from Function Declaration!";
}

// Function Expression
const greetDefinition = function () {
    output2.innerText = "Hello from Function Definition!";
};

// Arrow Function
const greetArrow = () => {
    output2.innerText = "Hello from Arrow Function!";
};