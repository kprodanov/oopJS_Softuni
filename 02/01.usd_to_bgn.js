function usd_to_bgn(input) {
    let usd = Number(input[0]);
    let usdmnojitel = 1.79549;
    let bgn = usd * usdmnojitel;
    console.log(bgn)
}
usd_to_bgn(["22"]);
