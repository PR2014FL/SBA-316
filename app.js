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
  nameLabel.appendChild(pLabel); //append p to nameLabel div
  let textNode = document.createTextNode(prompt("Enter your name.")); //create text node placeholder
  pLabel.appendChild(textNode); //append text node to p
};
