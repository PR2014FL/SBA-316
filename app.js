const basket = document.getElementById("eggBasket");

const addAnEgg = function () {
  let egg = document.createElement("div");
  egg.setAttribute("class", "egg");
  basket.appendChild(egg);
  let eggImg = document.createElement("img");
  eggImg.setAttribute(
    "src",
    "./Assets/Golden-easter-egg-3d-rendering-illustration-on-transparent-background-PNG.png"
  );
  egg.appendChild(eggImg);
  let nameLabel = document.createElement("div");
  nameLabel.setAttribute("class", "eggLabel");
  egg.appendChild(nameLabel);
  let pLabel = document.createElement("p");
  nameLabel.appendChild(pLabel);
  let labelBtn = document.createElement("button");
  labelBtn.setAttribute("class", "name");
  labelBtn.innerHTML("Add Name");
  egg.appendChild(labelBtn);
  labelBtn.addEventListener("click", setName());
  const setName = function () {
    pLabel.textContent(prompt("Enter Your Name."));
  };
};
