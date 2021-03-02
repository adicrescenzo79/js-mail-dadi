var mailAutorizzate = [
  "mcrawfor@yahoo.com",
  "matthijs@sbcglobal.net",
  "dbanarse@mac.com",
  "louise@mac.com",
  "okroeger@sbcglobal.net",
  "staffelb@me.com",
  "tattooman@mac.com",
  "dsowsy@mac.com",
  "cremonini@icloud.com",
  "psichel@yahoo.ca",
  "techie@icloud.com",
  "mbalazin@verizon.net",
  "limone79@gmail.com"
];

console.log(mailAutorizzate);

var mailUtente = prompt("Scrivi la tua mail");

console.log(mailUtente);

var controllo = false;

for (var i = 0;  i < mailAutorizzate.length; i++) {
  if (mailUtente == mailAutorizzate[i]) {
    var controllo = true;
  }
};

if (controllo) {
  console.log("ACCESSO AUTORIZZATO");
  document.getElementById('esito').innerHTML = "<div style=\"background-color: green\"><span>ACCESSO AUTORIZZATO</span></div>";
} else {
  console.log("ACCESSO NEGATO");
  document.getElementById('esito').innerHTML = "<div style=\"background-color: red\"><span>ACCESSO NEGATO</span></div>";
};
