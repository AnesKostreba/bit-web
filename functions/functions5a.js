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


// 2. Napisati funkciju koja za godinu (kao ceo pozitivan broj) proverava da li je
// prestupna. Godina je prestupna ako je deljiva sa 4 i nije godina veka (znači ako
// nije deljiva sa 100 - 1900. nije bila prestupna). Od toga odstupa svaka četvrta
// godina veka (znači ako je deljiva sa 400, onda je ipak prestupna - npr. 2000. je
// prestupna).

function prestupna(godina) {
    if (godina % 400 == 0) {
        return "Godina je prestupna";
    } if (godina % 100 != 0 && godina % 4 == 0) {
        return "godina je prestupna";
    }
    return "Godina nije prestupna";
}
console.log(prestupna(2000));




// 3. Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima
// samoglasnika i koliko suglasnika.

function samSug(rec) {
    var samoglasnik = 0;
    var suglasnik = 0;
    for (var i = 0; i < rec.length; i++) {
        if (rec[i] == 'a' || rec[i] == 'e' || rec[i] == 'i' || rec[i] == 'o' || rec[i] == "u") {
            samoglasnik++;
        } else if (rec[i] != 'a' || rec[i] != 'e' || rec[i] != 'i' || rec[i] != 'o' || rec[i] != "u") {
            suglasnik++;
        }
    }
    return console.log("Samoglasnika ima " + samoglasnik + " i suglasnika " + suglasnik);
}
console.log(samSug("Ko ne zna za strah, taj ide napred"));


// 4. Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove
// podataka pojedinačnih elemenata ulaznog niza.

function tip(array) {
    var niz = [];
    for (var i = 0; i < array.length; i++) {
        niz += typeof (array[i]);
        niz.toString;
    }
    return niz;
}

console.log(tip(["aaa", 222, true]));



// 5. Kreirati funkciju koja prijvata niz stringova kao ulayni parametar, a na izlazu
// ispisuje samo stringove koji u sebi ne sadrže brojeve. Primer: ulazni niz [“12bb”,
// “pp”, “as23s”, “00sd”] =&gt; rezultat [“pp”].

// function nizStr(str) {
    // var niz = [];
    // for (var i = 0; i < str.length; i++) {
        // var containsNum = false;
        // for (var j = 0; j < str[i].length; j++) {
            // var num = Number(str[i][j]);
            // if (!isNaN(num)) {
                // containsNum = true;
                // break;
            // }
        // }
        // if (!containsNum) {
            // niz.push(str[i])
        // }
    // }

    // return niz;
// }
// console.log(nizStr("12bb", "pp"));

