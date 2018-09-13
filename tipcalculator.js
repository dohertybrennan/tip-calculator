function tipCalc() {
  let tipAmount = document.getElementById('serviceQual').value;
  let baseCost = document.getElementById('billamt').value;
  let peopleAmount = document.getElementById('peopleamt').value;

  // tipAmount = parseFloat(tipAmount);
  // baseCost = parseFloat(baseCost);
  // peopleAmount = parseInt(peopleAmount);

  let finalTip = (baseCost * tipAmount) / peopleAmount;
  finalTip = finalTip.toFixed(2);
  document.getElementById('tip').innerHTML = finalTip;

  //document.write(tipAmount, baseCost, peopleAmount, finalTip);
}
