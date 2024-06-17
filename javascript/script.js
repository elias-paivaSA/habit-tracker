const userName = document.getElementById("uname");
const password = document.getElementById("pass");
const btnLogin = document.getElementById("btn-login");
const fieldReq1 = document.getElementById("fieldReq1");
const fieldReq2 = document.getElementById("fieldReq2");

const arrayUsername = [];
const arrayOneItem = [];
const passwordArray = [];
const lastPassword = [];

userName.addEventListener("keyup", () => {
    arrayUsername.push(userName.value)
    const lastItemArray = arrayUsername.slice(-1);
    arrayOneItem.push(lastItemArray);
    const passwordLength = password.value.length;
    const userNameLength = userName.value.length;
    arrayOneItem.forEach((element) => {
        const numberOfCharachters = element.join("").length;
        if(numberOfCharachters > 0) fieldReq1.style.display = "block";
        if(numberOfCharachters < 1) {
            fieldReq1.style.display = "none";
            btnLogin.setAttribute("disabled", true);
        }
        if(userNameLength && passwordLength) {
        fieldReq2.style.display = "block";
        btnLogin.removeAttribute("disabled");
    }
    })
})

password.addEventListener("keyup", () => {
    const passwordLength = password.value.length;
    const userNameLength = userName.value.length;
    if(userNameLength && passwordLength) {
        fieldReq2.style.display = "block";
        btnLogin.removeAttribute("disabled");
    }
    if(passwordLength < 1) {
        fieldReq1.style.display = "none";
        btnLogin.setAttribute("disabled", true);
    }
})

