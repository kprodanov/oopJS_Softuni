function chernomorie(input) {
    let numberOfPacketsForDogs = input[0];
    let sumDogs = numberOfPacketsForDogs * 2.50;
    let sumCats = numberOfPacketsForCats * 4;
    let sum = sumDogs + sumCats;

    console.log(`${sum} lv.`)
}
zooCalc(["5", "4"])