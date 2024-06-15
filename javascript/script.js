//const body = document.getElementById("body");
//console.log(body);
const userName = document.getElementById("uname");
const password = document.getElementById("pass");
const btnLogin = document.getElementById("btn-login");
const fieldReq1 = document.getElementById("fieldReq1");
const fieldReq2 = document.getElementById("fieldReq2");

const arrayUsername = [];
const arrayOneItem = [];

userName.addEventListener("keyup", () => {
    arrayUsername.push(userName.value)
    const lastItemArray = arrayUsername.slice(-1);
    const lastItemArrayToArray = arrayOneItem.push(lastItemArray);
    console.log(lastItemArray);
    arrayOneItem.forEach((element) => {
        const numberCharachter = element.join("").length;
    if(numberCharachter > 5) {
        console.log(`teste`);
        fieldReq1.style.display = "block";
        fieldReq2.style.display = "block";  
    }
    })
})