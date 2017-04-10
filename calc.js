function scoreCalc(critical, near, error) {
  totalNotes = critical + near + error;
  criticalVal =  10000000/totalNotes;
  nearVal = criticalVal/2;
  errorVal = criticalVal;
  if (critical != 0 && near == 0 && error == 0)
    {
      totScore = 10000000;
    }
  else if (critical == 0 && near == 0 && error == 0){
    totScore = 0;
  }
  else {
    totScore = 10000000 - (nearVal*near) - (errorVal*error);
  }
  return Math.floor(totScore);
}
