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
    arrayOneItem.forEach((element) => {
        const numberOfCharachters = element.join("").length;
        console.log(numberOfCharachters);
        if(numberOfCharachters > 1) {
        .removeAttribute('disabled');
            fieldReq1.style.display = "block";
            fieldReq2.style.display = "block";  
        }
    })
})

//regex.element.join("") == false