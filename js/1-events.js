// const button = document.querySelector(".my-button");

// button.addEventListener("click", () => {
//   console.log("Button was clicked");
// });


//////same action with usong callback function


// const button = document.querySelector(".my-button");

// const handleClick = () => {
//   console.log("Button was clicked");
// };

// button.addEventListener("click", handleClick);


const singleBtn = document.querySelector("#single");

const handleClicks = () => {
  console.log("click event listener SINGLE callback");
};

singleBtn.addEventListener("click", handleClicks);

// ===============================================
const multiBtn = document.querySelector("#multiple");

const firstCallback = () => {
  console.log("First callback!");
};
const secondCallback = () => {
  console.log("Second callback!");
};
const thirdCallback = () => {
  console.log("Third callback!");
};

multiBtn.addEventListener("click", firstCallback);
multiBtn.addEventListener("click", secondCallback);
multiBtn.addEventListener("click", thirdCallback);


//////second case removeEventListener

const addListenerBtn = document.querySelector('[data-action="add"]');
const removeListenerBtn = document.querySelector('[data-action="remove"]');
const btn = document.querySelector("#btn");

const handleClick = () => {
  console.log("click event listener callback");
};


addListenerBtn.addEventListener("click", () => {
  btn.addEventListener("click", handleClick);
  console.log("click event listener was added to btn");
});

removeListenerBtn.addEventListener("click", () => {
  btn.removeEventListener("click", handleClick);
  console.log("click event listener was removed from btn");
});



// ///////////////////////////this in function

const mango = {
  username: "Mango",
  showUsername() {
    console.log(this);
    console.log(`My username is: ${this.username}`);
  },
};

const thisBtn = document.querySelector(".js-btn");

// ✅ Работает
mango.showUsername();

// ❌ this будет ссылаться на button если использовать showUsername как callback
btn.addEventListener("click", mango.showUsername); // не работает

// ✅ Не забывайте привязывать контекст методов объекта
thisBtn.addEventListener("click", mango.showUsername.bind(mango));
