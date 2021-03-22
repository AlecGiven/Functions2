var wrap = document.getElementsByClassName("wrapper")[0];

let dragonHealth = 10;
let userHealth = 5;

//this wile loop runs wile both are alive
while (dragonHealth > 0 && userHealth > 0) {
  var damage = window.prompt(
    "Enter the number of hits you are going to attempt to hit the dragon Max damage up to 5"
  );

  //random damage genarator
  randDamage = Math.floor(Math.random() * damage) + 1;
  if (randDamage > 5) {
    dragonHealth = dragonHealth - 1;
  } else {
    dragonHealth = dragonHealth - randDamage;
  }
  //if dragon dies
  if (dragonHealth > 0) {
    dragRandDamage = Math.floor(Math.random() * 2) + 1;
    userHealth = userHealth - dragRandDamage;
  } else {
    wrap.innerHTML =
      "User Wins! " +
      "User Health = " +
      userHealth +
      ", Draon Health = " +
      dragonHealth;
    break;
  }
  //if user dies
  if (userHealth <= 0) {
    wrap.innerHTML =
      "Dragon Wins! " +
      "User Health = " +
      userHealth +
      ", Dragon Health = " +
      dragonHealth;
    break;
  }
  //button
  var button = document.createElement("button");
  button.innerHTML = "Fire";

  var body = document.getElementsByTagName("body")[0];
  body.appendChild(button);

  button.addEventListener("click", function () {
    alert("3 Damage");
  });

  var button = document.createElement("button");
  button.innerHTML = "Ice";

  var body = document.getElementsByTagName("body")[0];
  body.appendChild(button);

  button.addEventListener("click", function () {
    alert("1 Damage");
  });

  var button = document.createElement("button");
  button.innerHTML = "Poison";

  var body = document.getElementsByTagName("body")[0];
  body.appendChild(button);

  button.addEventListener("click", function () {
    alert("4 Damage");
  });
}