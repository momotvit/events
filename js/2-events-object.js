
// need to ask about const


const form = document.querySelector(".register-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { username, password }
  } = event.currentTarget;
  console.log(username.value, password.value);
});


// document.addEventListener("keydown", event => {
//   console.log("Keydown: ", event);
// });

// document.addEventListener("keyup", event => {
//   console.log("Keyup: ", event);
// });


// document.addEventListener("keydown", event => {
//   console.log("key: ", event.key);
//   console.log("code: ", event.code);
// });



////////////////////////////////////key code/////////////////////////////



