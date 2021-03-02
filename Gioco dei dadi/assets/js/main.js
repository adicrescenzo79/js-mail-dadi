var punteggioUtente = Math.floor(Math.random() * 6) + 1;

console.log(punteggioUtente);

document.getElementById('tuo').innerHTML = punteggioUtente;

var punteggioComputer = Math.floor(Math.random() * 6) + 1;

console.log(punteggioComputer);

document.getElementById('pc').innerHTML = punteggioComputer;

if (punteggioUtente > punteggioComputer) {
  console.log("HAI VINTO!!!");
  document.getElementById('esito').innerHTML = "<h1 style=\"text-align: center; width: 100%; height: 100%; background-color: green;\">HAI VINTO!!!</h1>";
} else if (punteggioUtente < punteggioComputer) {
  console.log("HAI PERSO!");
  document.getElementById('esito').innerHTML = "<h1 style=\"text-align: center; width: 100%; height: 100%; background-color: red;\">HAI PERSO!</h1>";
} else {
  console.log("Pari");
  document.getElementById('esito').innerHTML = "<h1 style=\"text-align: center; width: 100%; height: 100%; background-color: yellow;\">Pari</h1>";
}
