  /***
   * Fonction vérifiant si le joueur a atteint le le pointage ciblée
   * @param tab: tableau en entré
   */

function verifyVictory (tab,winCase){

    let retVal = tab.filter(cell => cell==winCase);
    if(retVal.length == 0){
      return false;
    }
    else{
      //alert("Victoire!!!!");
      ReactDOM.render(<h1>Victoire</h1>,document.getElementById("invisible"));
  
      document.getElementsByTagName("button")[0].innerHTML="Clear Board";
      return true;
    }
    
  }
