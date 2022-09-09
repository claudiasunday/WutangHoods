//const DrinkingAlcoholAge = parseInt(
//   prompt("Bienvenido a tu tienda online. Por favor, indique su edad")
// );

// if (DrinkingAlcoholAge <= 18) {
//   console.log("NO PUEDES NINYYYATO");
// } else if (DrinkingAlcoholAge <= 18) {
//   console.log("
// } else if (DrinkingAlcoholAge >= 70) {
//   console.log("le va a petar la patata");
// } else {
//   console.log("dskjhcbabaha");
// }
// //

const WutangMembers = prompt("Tell me your fav Wu Tang Clan Member");

let hood = "";

switch (WutangMembers) {
  case "RZA":
  case "GZA":
    hood = "brooklyn";

    break;
  case "GZA":
    hood = "Manhattan ";
    break;
  case "Ghostface Killah":
    hood = "Staten ISland";
}

console.log(`the member of Wu Tang Clan was from ${hood}`);
