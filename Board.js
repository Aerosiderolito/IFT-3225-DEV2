class Board extends React.Component {
    constructor(props) {
      
      super(props);
      this.state = {
        dimension: 0,
        cellTab: [], 
       
      };
    }

    popUpInit(){

        console.log("test")
        this.state.cellTab = [];
        this.state.dimension = window.prompt("Saissisez une dimension pour le tableau");
        
        /*Repeter n fois pour remplir le tableau */

        for(let i = 0; i <this.state.dimension*this.state.dimension; i++){
          this.state.cellTab.push(0);
          
        }

        // Remplir de 2
       
        this.setRandom2(this.state.cellTab);

        this.printer(this.state.cellTab);

        alert("Après la fermeture de cette fenêtre appuyer sur S pur commencer!");

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
        line.push(<span>{tabu[i]}</span>);
        if(((i+1)%this.state.dimension==0) && i !=0){
          displayTab.push(<div className="row">{line}</div>);
          line = [];
        }
      }
   
       ReactDOM.render(displayTab,document.getElementById("tableau") );
   
    }

    handleKeyPress = (event) => {

      document.addEventListener("keydown", event => {
       console.log(event.key);
      switch(event.key){
        case "ArrowUp":
          this.rightDirection();
          break;
        case "ArrowDown":
          break;
        case "ArrowLeft":
          break;
        case "ArrowRight":
          break;  

      }}
      );}
  
  rightDirection(){
    console.log("xd");
    for(let i=0; i<this.state.dimension*this.state.dimension; i++){
      let uno,dos,tres,cuatro;
      uno = this.state.cellTab[i];
      dos = this.state.cellTab[i+1];
      tres = this.state.cellTab[i+2];
      cuatro = this.state.cellTab[i+3];

      let line = [+uno,+dos,+tres,+cuatro];

      let rowNums = line.filter(num=>num);
      let mNums = this.state.dimension - rowNums.length;
      let empty = Array(mNums).fill(0);

      
      
    }
  }


    render() {
      
      return (
        <div className={"Board"}>
            <button onKeyPress={this.handleKeyPress} onClick={() => this.popUpInit()}>Click pour choisir une dimension</button>
            <h1 id="score">Score</h1>
            <div id={"tableau"}>

            </div>

        </div>
      );
    }
  }
  
  ReactDOM.render(<Board/>, document.getElementById("root"));