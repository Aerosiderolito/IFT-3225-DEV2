class Board extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {
      dimension: 0,
      score: 0,
      cellTab: [],
      
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

      this.state.cellTab = [];
        do{
        this.state.dimension = +window.prompt("Saissisez une dimension pour le tableau");
  
      }while(isNaN(this.state.dimension)|| (this.state.dimension < 0) || (this.state.dimension == ""))

      for(let i = 0; i <this.state.dimension*this.state.dimension; i++){

        this.state.cellTab.push(0);
        
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

  setScore(num){
    this.state.score = +this.state.score+num;
    console.log(num+" "+this.state.score);
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

  handleKeyPress = (event) => {
    this.popUpInit();
    document.addEventListener("keydown", event => {
     console.log(event.key);
    switch(event.key){
      case "ArrowUp":
        this.upDirection();
        this.printer(this.state.cellTab);
        // let matrix = [0,1,2,
        //               4,5,6,
        //               8,9,10];
        
        break;
      case "ArrowDown":
        this.downDirection();
        //this.printer(this.state.cellTab);
        this.addSquare();
        break;
      case "ArrowLeft":
        this.leftDirection();
        this.addSquare();
        break;
      case "ArrowRight":
        this.rightDirection();
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

addSquare = () => {

  // verifier qu'il y a la place ...
  let zeros = this.state.cellTab.filter(cell => cell==0);
  if(zeros.length==0){
    for(let i = 0; i < this.state.cellTab.length; i++){
      
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
                      this.setScore(line[j]);
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
   
          retValue = retValue.concat(line); //
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
              this.setScore(line[j]);
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
                <p>Voici notre tp pour le cours 3225 🔥</p>
              </section>
              <aside>
              <button onClick={this.handleKeyPress} > New Game</button>

              </aside>
            </div>
            
          <div id={"tableau"}>

          </div>

      </div>
    );
  }
}

ReactDOM.render(<Board/>, document.getElementById("root"));