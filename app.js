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
