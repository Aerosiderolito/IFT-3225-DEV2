/**
 * fonction permetant de fixer deux carreaux aléatoires dans la grille
 * @param tabu: tableau en entrée
 * @param dimension: dimension du tableau supérieure égale à deux
 * 
 */

setRandomInit = (tabu,dimension)=>{
    let randomC = Math.floor(Math.random()*tabu.length);
     
    for(let i = 0; i<2; i++){
      let coin = (Math.random());

      if(coin>0.5){
        // numero 2
        if(tabu[randomC]==0)
          tabu[randomC] = 2;
        else{
          randomC = Math.floor(Math.random()*dimension);
          i--;
        }
      }
      else{
        // numero 4
        if(tabu[randomC]==0){
          tabu[randomC] = 4;
        }
        else{
          randomC = Math.floor(Math.random()*dimension);
          i--;
        }
      }              
    }
  }
