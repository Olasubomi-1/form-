const button = document.querySelector(".login");
const inpTag = document.querySelector("#name");
const inpTag2 = document.querySelector("#mail");
const inpTag3 = document.querySelector("#pass");
const resultTag = document.querySelector(".result");
const formCont = document.querySelector(".login-box");

button.addEventListener("click", () => {
  console.log(resultTag);
  if (inpTag.value === "") {
    alert("the name input can not be empty");
  } else if (inpTag2.value === "") {
    alert("The email imput should not be empty");
  } else if (inpTag3.value === "") {
    alert("The password imput should not be empty");
  }

  if (formCont.style.display === "none") {
    formCont.style.display = "block";
  } 
  else {
    event.preventDefault();
    resultTag.innerHTML = inpTag.value;
    resultTag.innerHTML = `You are welcome ${inpTag.value}, Thank you for submitting your name a verification code has been sent
     your mail
     ${inpTag2.value}, and your password is ${inpTag3.value}`;
     formCont.style.display ="none";
  }
});
