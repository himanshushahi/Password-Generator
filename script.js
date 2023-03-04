function hidemodal() {
    let ele = document.getElementsByClassName("modal")[0];
    ele.classList.add("hide")
}


function showmodal() {
    let div = document.getElementsByClassName("modal")[0];
    div.classList.remove("hide");
    div.classList.add("modal");
    div.innerText = `Text copied`
    setTimeout(hidemodal, 1500);
}



function myFunction() {
    const textToCopy =
        document.getElementById("realPassword").innerText;
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = textToCopy;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    showmodal();
}

const range = document.getElementById("myRange");
const valueDisplay = document.getElementById("valueDisplay");
valueDisplay.innerText = range.value;


range.addEventListener("input", function() {
    valueDisplay.innerText = range.value;
});



let genButton = document.getElementById("submit");
let checkupper = document.getElementById("uppercase");
let checklower = document.getElementById("lowercase");
let password = document.getElementById("realPassword");
let upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
let number = "1234567890"
let symbol = "@#$%^&*"
let randomStr = upperCaseStr + lowerCaseStr + number + symbol;
let lowerAndUpper = upperCaseStr + lowerCaseStr;

let result = "";

genButton.addEventListener("click", () => {
    let length = document.getElementById("valueDisplay").innerText;
    length = Number(length);
    if (checkupper.checked && !checklower.checked) {
        for (let i = 0; i < length; i++) {
            result += upperCaseStr.charAt(Math.floor(Math.random() * upperCaseStr.length));
        }
        password.innerText = result;
        result = "";
        document.getElementById("button").style.display = "block";
    } else if (checklower.checked && !checkupper.checked) {
        for (let i = 0; i < length; i++) {
            result += lowerCaseStr.charAt(Math.floor(Math.random() * lowerCaseStr.length));
        }
        password.innerText = result;
        result = "";
        document.getElementById("button").style.display = "block";
    } else if (checkupper.checked && checklower.checked) {
        for (let i = 0; i < length; i++) {
            result += lowerAndUpper.charAt(Math.floor(Math.random() * lowerAndUpper.length));
        }
        password.innerText = result;
        result = "";
        document.getElementById("button").style.display = "block";
    } else {
        for (let i = 0; i < length; i++) {
            result += randomStr.charAt(Math.floor(Math.random() * randomStr.length));
        }
        password.innerText = result;
        result = "";
        document.getElementById("button").style.display = "block";
    }
})




