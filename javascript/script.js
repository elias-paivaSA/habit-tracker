const userName = document.getElementById("uname");
const password = document.getElementById("pass");
const btnLogin = document.getElementById("btn-login");
const fieldReq1 = document.getElementById("fieldReq1");
const fieldReq2 = document.getElementById("fieldReq2");

userName.addEventListener("keyup", () => {
    const passwordLength = password.value.length;
    const userNameLength = userName.value.length;
        if(userNameLength) fieldReq1.style.display = "block";
        if(!userNameLength) {
            fieldReq1.style.display = "none";
            btnLogin.setAttribute("disabled", true);
        }
        if(userNameLength && passwordLength) {
        fieldReq2.style.display = "block";
        btnLogin.removeAttribute("disabled");
    }
    })

password.addEventListener("keyup", () => {
    const passwordLength = password.value.length;
    const userNameLength = userName.value.length;
    if(userNameLength && passwordLength) {
        fieldReq2.style.display = "block";
        btnLogin.removeAttribute("disabled");
    }
    if(!passwordLength) {
        fieldReq2.style.display = "none";
        btnLogin.setAttribute("disabled", true);
    }

    if(!userNameLength && passwordLength) {
        fieldReq2.style.display = "block";
    }
})

