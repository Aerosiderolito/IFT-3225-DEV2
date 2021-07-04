class Board extends React.Component {
    constructor(props) {
      
      super(props);
      this.state = {
        dimension: 0,
        cellTab: [], 
       
      };
    }

    popUpInit(){

        this.state.cellTab = [];
        this.state.dimension = window.prompt("Saissisez une dimension pour le tableau");
        


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

        if(tabu[randomC]==0){
          tabu[randomC] = 2;
        }
        else{
          randomC = Math.floor(Math.random()*this.state.dimension);
          i--;
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
     
      // for(let i = 0; i< displayTab.length; i++){
      //   let line = <div className="row">{tabu[i]}</div>
      //   retval.push(line);
      //  }
       ReactDOM.render(displayTab,document.getElementById("tableau") );

    
      
    }

    render() {
      
      let xd = "this variable";
      return (
        <div className={"Board"}>
            <button onClick={() => this.popUpInit()}>Click pour commencer</button>
            <h1 id="score">Score</h1>
            <div id={"tableau"}>

            </div>

        </div>
      );
    }
  }
  
  ReactDOM.render(<Board/>, document.getElementById("root"));