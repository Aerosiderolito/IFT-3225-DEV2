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
        
        let cell = <div>0</div>;
        /*Repeter n fois pour remplir le tableau */
        for(let i=0; i<(this.state.dimension); i++){
          
          let line = [];  
          
          /*Ici pour faire une ligne */
          
          for(let j = 0 ; j<this.state.dimension;j++){
            line.push(cell);
          }

            this.state.cellTab.push(line);
        }
        console.log(this.state.cellTab);
        this.printer(this.state.cellTab);
        /*this.printer(this.state.cellTab);*/
        
    }

    printer(tabu){
      let retval = [];
      for(let i = 0; i< tabu.length; i++){
        let line = <div className="row">{tabu[i]}</div>
        retval.push(line);
      }
      ReactDOM.render(retval,document.getElementById("tableau") );
      
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