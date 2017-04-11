function scoreCalc() {
  var critical = parseInt(document.getElementById("critical").value);
  var near =parseInt(document.getElementById("near").value);
  var error = parseInt(document.getElementById("error").value);
  var totalNotes = critical + near + error;
  var criticalVal =  10000000/totalNotes;
  var nearVal = criticalVal/2;
  var errorVal = criticalVal;
  var otherInfo = "";

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

  if (totScore==0 && error==0){
    grade="N/A";
    otherInfo ="Did you even play?";
  }

  if(error==1 && near==1) {
    otherInfo = "You got SNM'd and Hibiki'd ok...";
  }

  else if (error==1) {
    otherInfo = "HAH HIBIKI'D!";
  }
  else if (near==1 && error==0) {
    otherInfo = "HAH SNM'D!";
  }

  var grade ="";
  if(totScore>=9900000) {
    grade="S";
  }
  else if(totScore>=9800000) {
    grade="AAA+";
  }
  else if(totScore>=9700000) {
    grade="AAA";
  }
  else if(totScore>=9500000) {
    grade="AA+";
  }
  else if(totScore>=9300000) {
    grade = "AA";
  }
  else if(totScore>=9000000) {
    grade="A+";
  }
  else if(totScore>=8700000) {
    grade = "A";
  }
  else if(totScore>=7500000) {
    grade = "B";
  }
  else if (totScore>=6500000) {
    grade = "C";
  }
  else if (totScore<6500000 && totScore>0) {
    grade="D";
  }

  document.getElementById("score").innerHTML = Math.floor(totScore);
  document.getElementById("grade").innerHTML = grade;
  document.getElementById("otherInfo").innerHTML = otherInfo;

}
