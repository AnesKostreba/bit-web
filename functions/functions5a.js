// 1. Napisati funkciju u JavaScript-u koja na osnovu niza 6 različitih citata i autora,
// ispisuje na stranici po jedan citat, ali tako da se citat promeni kada se program
// pokrene.

function citat(input) {
    var citat = "";
    number = Math.floor(Math.random() * input.length)
    citat = input[number];
    return citat;
}
var array = ['Ne postoje neuspjesi vec samo zivotne lekcije . N.A.',
    'U decijoj igri cesto je dubok smisao. F.S',
    "Ako si umoran nauci odmoriti, a ne odustati. BANKSY",
    "Sloboda je stanje u kojem covek sve cini bez prinude, ali da ne naskodi drugome. M.S.",
    "Ako vidis prijatelja bez osmeha pokloni mu svoj",
    "Putovanje se meri bolje stecenim prijateljima nego miljama"];
input = citat(array);
console.log(input);


// 3. Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima
// samoglasnika i koliko suglasnika.
