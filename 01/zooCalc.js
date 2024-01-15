function chernomorie(input) {
    let chernomorieMeters = input[0];
    let prizewithoutDiscount = [chernomorieMeters * 7.61];
    let prizewithDiscount = prizewithoutDiscount - [prizewithoutDiscount * 0.18];
    let discount = prizewithoutDiscount * 0.18;
    console.log(`The final price is: ${prizewithDiscount} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
chernomorie(["550"])
