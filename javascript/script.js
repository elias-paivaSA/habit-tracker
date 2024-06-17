const userName = document.getElementById("uname");
const password = document.getElementById("pass");
const btnLogin = document.getElementById("btn-login");
const fieldReq1 = document.getElementById("fieldReq1");

const arrayUsername = [];
const arrayOneItem = [];

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
            btnLogin.removeAttribute('disabled');
            fieldReq1.style.display = "none";
        }
    })
})

//regex.element.join("") == false