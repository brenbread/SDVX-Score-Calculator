function scoreCalc() {
  var critical = parseInt(document.getElementById("critical").value);
  var near =parseInt(document.getElementById("near").value);
  var error = parseInt(document.getElementById("error").value);
  var totalNotes = critical + near + error;
  var criticalVal =  10000000/totalNotes;
  var nearVal = criticalVal/2;
  var errorVal = criticalVal;
  if (critical != 0 && near == 0 && error == 0)
    {
      totScore = 10000000;
    }
  else if (critical == 0 && near == 0 && error == 0){
    totScore = 0;
  }
  else {
    totScore = (criticalVal*critical)+(nearVal*near);
  }
  document.getElementById("score").innerHTML = Math.floor(totScore);
}
