class Board extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {
      restart: false,
      dimension: 0,
      score: 0,
      winCase: 32, // objectif de victoire
      cellTab: [],
      msg:"New Game",
      
      caseBgColors : {
        deux: "#EEE4DA",
        quatre: "#EEE1C9",
        huit: "#F3B27A",
        seize: "#F69664" ,
        treinteDeux: "#F77C5F",
        soixanteQuatre: "#F75F3B",
        cVingHuit:"#EDD073",
      },
    
      caseTxtColors : {
        deux:"#776E65",
        quatre: "#776E65",
        huit: "#F9F6F2",
        seize: "#F9F6F2",
        treinteDeux: "#F9F6F2",
        soixanteQuatre: "#F9F6F2",
        cVingHuit:"#F9F6F2",
    
    
      }
     
    };
  }

  popUpInit(){
      
      this.setState.score =0;
      this.state.cellTab = [];
      this.state.dimension = 0;
    
      if (this.state.restart){
        
        window.location.reload();
        return;
      };
        do{
        this.state.dimension = +window.prompt("Enter dimension for the board");
        if(this.state.dimension == 0){
          window.location.reload();
          return;
        }
  
      }while(isNaN(this.state.dimension)|| (this.state.dimension < 0) || (this.state.dimension == ""))

      for(let i = 0; i <this.state.dimension*this.state.dimension; i++){

        this.state.cellTab.push(+0);
        
      }

      // Remplir de 2
     
      this.setRandom2(this.state.cellTab);

      this.printer(this.state.cellTab);


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

  setScore(){
    this.state.score++;
    //console.log(num+" "+this.state.score);
    ReactDOM.render(<div> {this.state.score}</div>,document.getElementById("score") );
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
          line.push(<td style={{color:this.state.caseTxtColors.deux, backgroundColor: this.state.caseBgColors.deux} } >{tabu[i]}</td>);
          break;
        case 4:
          line.push(<td style={{color:this.state.caseTxtColors.quatre, backgroundColor:this.state.caseBgColors.quatre}}>{tabu[i]}</td>);
          break;
        case 8:
          line.push(<td style={{color:this.state.caseTxtColors.huit, backgroundColor:this.state.caseBgColors.huit} }>{tabu[i]}</td>);
          break;
        case 16:
          line.push(<td style={{color:this.state.caseTxtColors.seize, backgroundColor:this.state.caseBgColors.seize}}>{tabu[i]}</td>);
          break;
     
        case 32:
          line.push(<td style={{color:this.state.caseTxtColors.treinteDeux, backgroundColor:this.state.caseBgColors.treinteDeux} }>{tabu[i]}</td>);
          break;
        case 64:
          line.push(<td style={{color:this.state.caseTxtColors.soixanteQuatre, backgroundColor:this.state.caseBgColors.soixanteQuatre}}>{tabu[i]}</td>);
          break;
        case 128:
          line.push(<td style={{color:this.state.caseTxtColors.cVingHuit, backgroundColor:this.state.caseBgColors.cVingHuit}}>{tabu[i]}</td>);
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

  verifyEnd(){
    let tempUp = this.state.cellTab.slice();
    this.upDirection();
    tempUp=(JSON.stringify(tempUp)===JSON.stringify(this.state.cellTab));

    let tempDown = this.state.cellTab.slice();
    this.downDirection();
    tempDown=(JSON.stringify(tempDown)===JSON.stringify(this.state.cellTab));

    let tempRight = this.state.cellTab;
    this.rightDirection();
    tempRight=(JSON.stringify(tempRight)===JSON.stringify(this.state.cellTab));

    let tempLeft = this.state.cellTab;
    this.leftDirection();
    tempLeft=(JSON.stringify(tempLeft )===JSON.stringify(this.state.cellTab));;
    console.log((tempUp && tempDown && tempRight && tempLeft));
    
    return (tempUp && tempDown && tempRight && tempLeft)
  }


  handleKeyPress = (event) => {
    window.addEventListener("keydown", function(e) {
      if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
          e.preventDefault();
      }
  }, false);
    this.popUpInit();
    document.addEventListener("keydown", event => {
     console.log(event.key);
     if(this.state.restart){
      return;
    }else{
      this.setScore();
    }
    switch(event.key){
      
      case "ArrowUp":
        this.upDirection();
        this.state.restart =  this.verifyVictory(this.state.cellTab);
        this.addSquare();

        break;
      case "ArrowDown":
        this.downDirection();
        this.state.restart =  this.verifyVictory(this.state.cellTab);
        this.addSquare();
       
        break;
      case "ArrowLeft":
        this.leftDirection();
        this.state.restart = this.verifyVictory(this.state.cellTab);
        this.addSquare();
       
        break;
      case "ArrowRight":
        this.rightDirection();
        this.state.restart =  this.verifyVictory(this.state.cellTab);
        this.addSquare();

        break;  

    }}
    )
  }

  transposeMatrix = (matrix, dimension) =>{
 
    let line = [];
    let retValue = [];
    let transp = []
    // obtenir les lignes
    for(let i = 0 ; i<matrix.length ; i++){
      line.push(matrix[i]);
      if((i+1)%dimension==0 ){
        
        transp.push(line);
        line = [];
      }
    }


    transp = transp[0].map((_, colIndex) => transp.map(row => row[colIndex]));

    for(let i = 0; i<dimension ; i++){
      for(let j = 0; j <dimension; j++){
        this.state.cellTab[i]=retValue.push(transp[i][j]);
      }
      
    }
    
    
   for(var t = 0; t<this.state.cellTab.length-1;t++)
    {
      this.state.cellTab[t]=retValue[t];
    }

  }

verifyVictory(tab){

  let retVal = tab.filter(cell => cell==this.state.winCase);
  if(retVal.length == 0){
    return false;
  }
  else{
    //alert("Victoire!!!!");
    ReactDOM.render(<h1>Victoire</h1>,document.getElementById("invisible"));

    this.state.msg="Clean Board";
    document.getElementsByTagName("button")[0].innerHTML=this.state.msg;
    return true;
  }
  
}

addSquare = () => {

  let zeros = this.state.cellTab.filter(cell => cell==0);
  if(zeros.length==0){
    console.log("ENTERED");
    if(this.verifyEnd()==true){
      //alert("Game over, better luck next time!");
      //window.location.reload();

      
        //alert("Victoire!!!!");
        
        ReactDOM.render(<h1>Game over, better luck next time!</h1>,document.getElementById("invisible"));
        //this.state.score=this.state.score-1;
        this.state.msg="Clean Board";
        document.getElementsByTagName("button")[0].innerHTML=this.state.msg;
        this.state.restart=true;
        //this.popUpInit()

      
    }
    
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

rightDirection() {

  let retValue = []
  let line = [];
  // loop sur le tableau
  for (let i = 0; i < this.state.cellTab.length; i++) {

      line.push(this.state.cellTab[i]);
      // si on complete une ligne
      if ((i + 1) % this.state.dimension == 0) {

          for (let j = 0; j < line.length; j++) { // chaque ligne
   
              if (line[j] > 0 && j != this.state.dimension-1) {
                  if (line[j] == line[j + 1] && j < line.length-1 )  {
                      line[j + 1] = line[j] + line[j];
                      line[j] = 0;
                      break;
                  }
                  if (line[j] > 0 && line[j + 1] == 0) {
                      
                      line[j + 1] = line[j];
                      line[j] = 0;
                      
                  }
      
              }
          }
   
          retValue = retValue.concat(line);
          line = [];
      }
  }
  this.state.cellTab = retValue;
}

leftDirection(){
  let retValue = [];
  let line=[];
  // loop sur le tableau
  for(let i=0; i<this.state.cellTab.length; i++){

    line.push(this.state.cellTab[i]);

    // si on complete une ligne
    if((i+1)%this.state.dimension==0){
   

      for(let j = line.length-1; j>=0; j--){
          if(line[j] > 0 && j != 0){
            if(line[j]>0 && line[j-1]==0){
              line[j-1] = line[j];
              line[j]= 0;              
            }
            if(j > 0 && line[j]==line[j-1]){
              line[j-1]=line[j]+line[j];
              line[j]=0;
              
              break;
            }
          }
      } 

      retValue = retValue.concat(line); 
      line=[];   
  }
}
  this.state.cellTab = retValue;

  
}

upDirection(){
  
  this.transposeMatrix(this.state.cellTab, this.state.dimension);
  this.leftDirection();
  this.transposeMatrix(this.state.cellTab, this.state.dimension);


}

downDirection(){
    this.transposeMatrix(this.state.cellTab, this.state.dimension);
    this.rightDirection();
    this.transposeMatrix(this.state.cellTab, this.state.dimension);

  }

  render() {
    
    return (
      <div className={"Board"} >
          
            <div className={"flex_principal"}>
            
            <section>
              <h1>2048</h1>
            
              
            </section>

            <aside>
              
              <div className={"flex_display"}>

                <section>
                  <div >SCORE</div>
                  <div id="score">0</div>
                </section>

                <aside>
                  <div>BEST</div>
                  <div>0</div>
                  
                </aside>
                
              </div>
            </aside>
            
            

            </div>
            <div className={"flex_display_secondaire"}>
              <section>
                <p>Join the tiles, get to 2048! 🔥</p>
              </section>
              <aside>
              <button onClick={this.handleKeyPress} > {this.state.msg}</button>

              </aside>
            </div>
            <div id={"invisible"}>

            </div>
          <div id={"tableau"}>

          </div>

      </div>
    );
  }
}

ReactDOM.render(<Board/>, document.getElementById("root"));