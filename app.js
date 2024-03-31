const basket = document.getElementById("eggBasket");

const addAnEgg = function () {
  let egg = document.createElement("div"); //Create the .egg div
  egg.setAttribute("class", "egg"); //add the class "egg"
  basket.appendChild(egg); //append as child of basket

  let eggImg = document.createElement("img"); //create img tag to sotre the egg pic
  eggImg.setAttribute(
    //assign the src attribute
    "src",
    "./Assets/Golden-easter-egg-3d-rendering-illustration-on-transparent-background-PNG.png"
  );
  egg.appendChild(eggImg); //append as child of egg

  let nameLabel = document.createElement("div"); //create div for the label
  nameLabel.setAttribute("class", "eggLabel"); //set the class .eggLabel
  egg.appendChild(nameLabel); //appened as child of egg div

  let pLabel = document.createElement("p"); //create the p tag
  pLabel.setAttribute("id", "myTextNode"); // add id for add ! button
  nameLabel.appendChild(pLabel); //append p to nameLabel div

  let textNode = document.createTextNode(prompt("Enter your first name.")); //create text node placeholder
  pLabel.appendChild(textNode); //append text node to p
};

//add an Exclamation button to each name on the eggs
//add a button
const body = document.querySelector("body");
const exclamationBttn = document.createElement("button");
exclamationBttn.innerHTML = "Add !";
body.children[0].nextElementSibling.appendChild(exclamationBttn);
//set eventlistener to add the exclamation to the end of each name by iterating each one
exclamationBttn.addEventListener("click", function (event) {
  for (const label of document.getElementsByClassName("eggLabel")) {
    let labelText = label.textContent;
    label.textContent = labelText + "!";
  }
  event.stopPropagation();
});

//Dark-mode button
const darkModeToggleBttn = document.createElement("button");
darkModeToggleBttn.setAttribute("id", "toggleDarkMode");
darkModeToggleBttn.innerHTML = "Dark Mode";
body.children[0].nextElementSibling.appendChild(darkModeToggleBttn);

let isDarkMode = false;// flag to trak the current mode
const h1Element = document.querySelector("h1"); 
let originalH1Text = h1Element.textContent;//store the original text

darkModeToggleBttn.addEventListener("click", function (event) {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    body.classList.add("dark-mode");
    h1Element.classList.add("dark-mode");
    h1Element.textContent = "600-800° Celsius (1112-1800° Fahrenheit)";
    window.alert("Ooh, you messed up!");
  } else {
    body.classList.remove("dark-mode");
    h1Element.classList.remove("dark-mode");
    h1Element.textContent = originalH1Text;
  }
  event.stopPropagation();
});
