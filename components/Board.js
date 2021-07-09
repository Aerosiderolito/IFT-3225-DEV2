class Board extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {
      restart: false,
      dimension: 0,
      winCase: 32, // objectif de victoire
      cellTab: [], 
    };
  }

  popUpInit(){
      
      this.props.game.setScore(0);
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
     
      setRandomInit(this.state.cellTab, this.state.dimension);

      printer(this.state.cellTab, this.state.dimension);
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
      this.props.game.setScore();
    }
    switch(event.key){
      
      case "ArrowUp":
        this.upDirection();
        this.state.restart =  verifyVictory(this.state.cellTab, this.state.winCase);
        this.addSquare();

        break;
      case "ArrowDown":
        this.downDirection();
        this.state.restart =  verifyVictory(this.state.cellTab , this.state.winCase);
        this.addSquare();
       
        break;
      case "ArrowLeft":
        this.leftDirection();
        this.state.restart = verifyVictory(this.state.cellTab , this.state.winCase);
        this.addSquare();
       
        break;
      case "ArrowRight":
        this.rightDirection();
        this.state.restart =  verifyVictory(this.state.cellTab , this.state.winCase);
        this.addSquare();

        break;  

    }}
    )
  }

addSquare = () => {

  let zeros = this.state.cellTab.filter(cell => cell==0);
  if(zeros.length==0){

    if(this.verifyEnd()==true){

        ReactDOM.render(<h1>Game over, better luck next time!</h1>,document.getElementById("invisible"));

        document.getElementsByTagName("button")[0].innerHTML="Clear Board";
        this.state.restart=true;
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

  printer(this.state.cellTab, this.state.dimension);
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
  
  transposeMatrix(this.state.cellTab, this.state.dimension);
  this.leftDirection();
  transposeMatrix(this.state.cellTab, this.state.dimension);


}

downDirection(){
    transposeMatrix(this.state.cellTab, this.state.dimension);
    this.rightDirection();
    transposeMatrix(this.state.cellTab, this.state.dimension);

  }

  render() {
    
    return (
      <div className={"Board"} >
          
            <div className={"flex_display_secondaire"}>
              <section>
                <p>Join the tiles, get to 2048! 🔥</p>
              </section>
              <aside>
              <button onClick={this.handleKeyPress} > New Game!</button>

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