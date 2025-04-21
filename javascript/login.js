const userInput = document.getElementById("user");
const password = document.getElementById("password");
const button = document.getElementById("button");

if (button.disabled) {
    button.classList.remove("hover:bg-blue-700");
    button.classList.add( 'cursor-not-allowed' );
    button.classList.add( 'opacity-50');   
}

userInput.addEventListener("keyup", (e) => {
    e.preventDefault();
    const inputLength = userInput.value.length;
    const passwordLength = password.value.length;
    if (inputLength >= 5 && inputLength <= 10) {
        passwordLength.addEventListener("keyup", (e) => {
            if (passwordLength >= 5 && passwordLength <= 10) {
                button.classList.add("hover:bg-blue-700");
                button.classList.remove('cursor-not-allowed');
                button.classList.remove('opacity-50');
            }
        })
    };
  });

