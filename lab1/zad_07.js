let zmienna = [1, 5, 6, 5, 5, 1, 5]

let zliczenia = [];

for (let i = 0; i < zmienna.length; i++) {
    if (zliczenia[zmienna[i]]) {
        zliczenia[zmienna[i]]++;
    } else {
        zliczenia[zmienna[i]] = 1;
    }
}

for (let liczba in zliczenia) {
    let wystapienia = zliczenia[liczba];
    let razWystapienie = wystapienia === 1 ? "raz" : "razy";
    console.log(liczba + " występuje " + wystapienia + " " + razWystapienie);
}
