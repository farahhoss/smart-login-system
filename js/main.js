var signUpNameInput = document.getElementById("signUpName");
var signUpEmailInput = document.getElementById("signUpEmail");
var signUpPasswordInput = document.getElementById("signUpPassword");
var signInEmailInput = document.getElementById("signInEmail");
var signInPasswordInput = document.getElementById("signInPassword");

var userInformationList = [];

if (localStorage.getItem("myInfo") != null) {
  userInformationList = JSON.parse(localStorage.getItem("myInfo"));
}
var username = localStorage.getItem("sessionUsername");
if (username) {
  document.getElementById("Hello").innerHTML = "Welcom " + username;
}
function mainSignUP() {
  IsSignUpEmpty();
  if (regularExpressionNameUp() == true && regularExpressionEmailUp() == true) {
    getSignUpInputSData();
    clearSignUpInput();
  }
}
function mainLogIn() {
  loginEmpty();
  LogInData();
  clearSignInInput();
}
function getSignUpInputSData() {
  var users = {
    name: signUpNameInput.value,
    email: signUpEmailInput.value,
    password: signUpPasswordInput.value,
  };
  userInformationList.push(users);
  console.log(userInformationList);
  localStorage.setItem("myInfo", JSON.stringify(userInformationList));
}

var incorrect = document.getElementById("IncorrectPass");
var AllInputRequierd = document.getElementById("AllInput");
function LogInData() {
  console.log(userInformationList);

  for (var i = 0; i < userInformationList.length; i++) {
    if (
      userInformationList[i].email == signInEmailInput.value &&
      signInEmailInput.value != "" &&
      signInPasswordInput.value != ""
    ) {
      if (userInformationList[i].password == signInPasswordInput.value) {
        console.log("done");
        localStorage.setItem("sessionUsername", userInformationList[i].name);
        window.location.href = "pages/hello.html";
      } else if (userInformationList[i].password != signInPasswordInput.value) {
        document.getElementById(
          "AllInput"
        ).innerHTML = `<span class="text-danger m-3">Incorrect password</span>`;
        // incorrect.classList.replace("d-none", "d-block");
        // AllInputRequierd.classList.replace("d-block", "d-none");
        console.log("hhh");
      }
    }
  }
}

function clearSignUpInput() {
  signUpNameInput.value = "";
  signUpEmailInput.value = "";
  signUpPasswordInput.value = "";
}
function clearSignInInput() {
  signInEmailInput.value = "";
  signInPasswordInput.value = "";
}
function loginEmpty() {
  if (signInEmailInput.value == "" || signInPasswordInput.value == "") {
    console.log("gggg");
    // AllInputRequierd.classList.replace("d-none", "d-block");
    document.getElementById(
      "AllInput"
    ).innerHTML = `<span class="text-danger m-3">All inputs is required</span>`;
  }
}
function IsSignUpEmpty() {
  if (
    signUpNameInput.value == "" ||
    signUpEmailInput.value == "" ||
    signUpPasswordInput.value == ""
  ) {
    document.getElementById(
      "AllInputRequierd"
    ).innerHTML = `<span class="text-danger m-3">All inputs is required</span>`;
  }
}
// var LogoutEvent = document.getElementById("LogoutEvent");
// LogoutEvent.addEventListener("click", LogOut);
// function LogOut() {
//   window.location.href = "./index.html";
// }
function regularExpressionNameUp() {
  var regex = /^[A-Z][a-z]{3,8}$/;
  if (regex.test(signUpNameInput.value) == true) {
    return true;
  } else {
    document.getElementById(
      "regex"
    ).innerHTML = `<span class="text-danger m-3">Not Valid Name</span>`;
    return false;
  }
}
function regularExpressionEmailUp() {
  var regex = /^[A-Z][a-z]{3,8}@gmail.com$/;
  if (regex.test(signUpEmailInput.value) == true) {
    return true;
  } else {
    document.getElementById(
      "regex1"
    ).innerHTML = `<span class="text-danger m-3">Not Valid Email</span>`;
    return false;
  }
}
