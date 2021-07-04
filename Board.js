class Board extends React.Component {
    constructor(props) {
        
      super(props);
      this.state = {
        dimension: 0,
        
       
      };
    }

    PopUpInit(){
      
        this.state.dimension = window.prompt("Saissisez une dimension pour le tableau");
     
        for(let i=0; i<+this.state.dimension; i++){
            document.getElementById("root").appendChild(document.createElement("p"));

            console.log(i);
        }
    }
    render() {
      
      let xd = "this variable";
      return (
        <div className="Board">
            <button onClick={() => this.PopUpInit()}>Click pour commencer</button>
            <div id={"tableau"}>
              
            </div>

        </div>
      );
    }
  }
  
  ReactDOM.render(<Board/>, document.getElementById("root"));