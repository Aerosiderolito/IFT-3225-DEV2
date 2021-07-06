class Board extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {
      dimension: 0,
      cellTab: [],
      score: 0,
      
      caseBgColors : {
        deux: "#EEE4DA",
        quatre: "#EEE1C9",
        huit: "#EEE1C9",
        seize: "#F69664" ,
        treinteDeux: "#F77C5F",
        soixanteQuate: "#F75F3B"
      },
    
      caseTxtColors : {
        deux:"#776E65",
        quatre: "#F77C5F",
        huit: "#F9F6F2",
        seize: "#F9F6F2",
        treinteDeux: "#F9F6F2",
        soixanteQuatre: "#F75F3B",
    
    
      }
     
    };
  }

  popUpInit(){
      this.state.score = 0;
      this.state.dimension = 0;
      this.state.cellTab = [];
      do{
        this.state.dimension = +window.prompt("Saissisez une dimension pour le tableau");
        console.log(this.state.dimension);
        if (this.state.dimension==0){
          return;
        }
      }while(isNaN(this.state.dimension)|| (this.state.dimension < 0) || (this.state.dimension == ""))
            
      /*Repeter n fois pour remplir le tableau */

      for(let i = 0; i <this.state.dimension*this.state.dimension; i++){
        this.state.cellTab.push(0);
        
      }

      // Remplir de 2
     
      this.setRandom2(this.state.cellTab);

      this.printer(this.state.cellTab);


      console.log(this.state.cellTab);

  }

  setRandom2(tabu){
    let randomC = Math.floor(Math.random()*tabu.length);
     
    for(let i = 0; i<2; i++){
      let coin = (Math.random());

      if(coin>0.5){
        // numero 2
        if(tabu[randomC]==0){
          tabu[randomC] = 2;
        }
        else{
          randomC = Math.floor(Math.random()*this.state.dimension);
          i--;
        }
      }
      else{
        // numero 4
        if(tabu[randomC]==0){
          tabu[randomC] = 4;
        }
        else{
          randomC = Math.floor(Math.random()*this.state.dimension);
          i--;
        }
      }              
    }
  }




  

  printer(tabu){
    
    let displayTab = [];  
    let line = [];

    for(let i=0; i<=tabu.length; i++){

      switch(tabu[i]){

        case 0:
          line.push(<td className={"zero"}>&nbsp;</td>);
          break;
        case 2:
          line.push(<td style={{backgroundColor: this.state.caseBgColors.deux}, {color:this.state.caseTxtColors.deux}} >{tabu[i]}</td>);
          break;
        case 4:
          line.push(<td style={{backgroundColor:this.state.caseBgColors.quatre}, {color:this.state.caseTxtColors.quatre}}>{tabu[i]}</td>);
          break;
        case 8:
          line.push(<td style={{backgroundColor:this.state.caseBgColors.huit}, {color:this.state.caseTxtColors.huit}}>{tabu[i]}</td>);
          break;
        case 16:
          line.push(<td style={{backgroundColor:this.state.caseBgColors.seize}, {color:this.state.caseTxtColors.seize}}>{tabu[i]}</td>);
          break;
     
        case 32:
          line.push(<td style={{backgroundColor:this.state.caseBgColors.treinteDeux}, {color:this.state.caseTxtColors.treinteDeux}}>{tabu[i]}</td>);
          break;
        case 64:
          line.push(<td style={{backgroundColor:this.state.caseBgColors.soixanteQuatre}, {color:this.state.caseTxtColors.soixanteQuatre}}>{tabu[i]}</td>);
          break;

        default:
          line.push(<td>{tabu[i]}</td>);
          break;

      }
    
      
      if(((i+1)%this.state.dimension==0) && i !=0){
        displayTab.push(<tr className="row">{line}</tr>);
        line = [];
      }
    }
 
     ReactDOM.render(<table><thead></thead>
       <tbody>{displayTab}</tbody></table>,document.getElementById("tableau") );
 
  }

  handleKeyPress = (event) => {
    this.popUpInit()
    document.addEventListener("keydown", event => {
     console.log(event.key);
    switch(event.key){
      case "ArrowUp":
        this.addSquare();
        break;
      case "ArrowDown":
        break;
      case "ArrowLeft":
        this.leftDirection();
        break;
      case "ArrowRight":
        this.rightDirection();
        break;  

    }}
    )
  }

addSquare = () => {

  // verifier qu'il y a la place ...
  let zeros = this.state.cellTab.filter(cell => cell==0);
  if(zeros.length==0){
    return;
  }

  let randomCase; // case aléatoire
  let randomCoin = Math.random(); // probabilité de 2 ou 4

    

    do{
      randomCase = Math.floor(Math.random()*this.state.cellTab.length);
   
      
    }while(this.state.cellTab[randomCase]>0);

      
  
      if (randomCoin>0.5){ 
        this.state.cellTab[randomCase]=2; 
      }
      else{
        this.state.cellTab[randomCase]=4; 
      }


  
  this.printer(this.state.cellTab);
}

rightDirection(){

  let retValue = []
  let line=[];
  // loop sur le tableau
  for(let i=0; i<this.state.cellTab.length; i++){
    
    line.push(this.state.cellTab[i]);
    // si on complete une ligne
    if((i+1)%this.state.dimension==0){
     
      // line = []; Un comment to display line

      for(let j = 0; j<line.length; j++){
        if(line[j]>0 && j!=this.state.dimension-1){
          for(let k = 0; k<line.length; k++){

            if(line[k]==line[k+1] && k < line.length-1){
              line[k+1]=line[k]+line[k];
              line[k]=0;
              break;

            }

            if(line[k]>0 && line[k+1]==0){
              line[k+1] = line[k];
              line[k]= 0;
              
           
            }
            
          }
        }
      }
      

      
      retValue = retValue.concat(line); //Uncomment to display line
      line=[];
  }

  
}
  this.state.cellTab = retValue;
  this.addSquare();
}

leftDirection(){
  let retValue = [];
  let line=[];
  // loop sur le tableau
  for(let i=0; i<this.state.cellTab.length; i++){    

    line.push(this.state.cellTab[i]);

    // si on complete une ligne
    if((i+1)%this.state.dimension==0){
   
      console.log("ligne avant le traitement = "+ line);

      for(let j = line.length-1; j>=0; j--){
       
        if(line[j]>0 && j>0){
      
          for(let k = line.length-1; k>=0; k--){
            if(line[k]>0 && line[k-1]==0){
              line[k-1] = line[k];
              line[k]= 0;              
              break;
            }
            if(k > 0 && line[k]==line[k-1]){

              line[k-1]=line[k]+line[k];
              line[k]=0;
              break;
            }
          }          
        }
        
      } 
        console.log("après le traitement = "+ line);  
          
          
      retValue = retValue.concat(line); 
      line=[];   
      
      
  }

}
  
  this.state.cellTab = retValue;
  console.log(this.state.cellTab + " this thing");
  this.addSquare();
}

  render() {
    
    return (
      <div className={"Board"} >
          <button onClick={this.handleKeyPress} > 
          
            New Game</button>
            
          <h1 id="score">Score</h1>
          <div id={"tableau"}>

          </div>

      </div>
    );
  }
}

ReactDOM.render(<Board/>, document.getElementById("root"));