function scoreCalc() {
  var critical = document.getElementById("critical").value;
  var near = document.getElementById("near").value;
  var error = document.getElementById("error").value;
  var criticalP = parseInt(critical);
  var nearP = parseInt(near);
  var errorP = parseInt(error);
  var totalNotes = criticalP + nearP + errorP;
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
    totScore = (criticalVal*criticalP)+(nearVal*nearP);
  }
  document.getElementById("score").innerHTML = Math.floor(totScore);
}
