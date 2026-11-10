// Unos podataka
let ime = prompt("Unesi ime:");
let cijenaUlaznice = Number(prompt("Unesi cijenu jedne ulaznice:"));
let brojUlaznica = Number(prompt("Unesi broj ulaznica:"));
let budzet = Number(prompt("Unesi budžet:"));

// Izračun i usporedbe
let ukupniTrosak = cijenaUlaznice * brojUlaznica;
let preostaliIznos = budzet - ukupniTrosak;

// Ispis rezultata
let nastavakPlaniranja = confirm("Želiš li nastaviti s planiranjem izleta?");
alert("Ime: " + ime +
"\nUkupni trosak: " + ukupniTrosak + " EUR" +
"\nPreostali iznos: " + preostaliIznos + " EUR" +
"\nNastavak planiranja: " + nastavakPlaniranja);