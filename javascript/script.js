const body = document.getElementById("body");
console.log(body);
const userName = document.getElementById("uname");
const password = document.getElementById("pass");
const btnLogin = document.getElementById("btn-login");
const fieldReq1 = document.getElementById("fieldReq1");
const fieldReq2 = document.getElementById("fieldReq2");

const arrayUsername = [];

userName.addEventListener("keyup", () => {
    arrayUsername.push(userName.value)
    arrayUsername.slice(-1); //last item from array
    arrayUsername.forEach((element) => {
    if(element.includes("@" || element.lenght > 5)) body.style.backgroundColor = "red";
    fieldReq1.style.display = "block";
    fieldReq2.style.display = "block";
    })
})