const userName = document.getElementById("uname");
const password = document.getElementById("pass");
const btnLogin = document.getElementById("btn-login");
const fieldReq1 = document.getElementById("fieldReq1");

const arrayUsername = [];
const arrayOneItem = [];
const passwordArray = [];
const lastPassword = [];

userName.addEventListener("keyup", () => {
    arrayUsername.push(userName.value)
    const lastItemArray = arrayUsername.slice(-1);
    arrayOneItem.push(lastItemArray);
    arrayOneItem.forEach((element) => {
        const numberOfCharachters = element.join("").length;
        if(numberOfCharachters > 0) {
            btnLogin.removeAttribute('disabled');
            fieldReq1.style.display = "block";
        }
        if(numberOfCharachters < 1) {
            fieldReq1.style.display = "none";
            btnLogin.setAttribute("disabled", "");
        }
    })
})

password.addEventListener("keyup", () => {
    const passwordValue = password.value
    const passwordLength = password.value.length;
    if(passwordLength > 3) {
        console.log("oi");
    }
    const lastItemArray = arrayUsername.slice(-1);
    arrayOneItem.push(lastItemArray);
})

//regex.element.join("") == false