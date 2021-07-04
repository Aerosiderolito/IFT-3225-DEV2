class Board extends React.Component {
    constructor(props) {
      
      super(props);
      this.state = {
        dimension: 0,
        cellTab: [],
       
      };
    }

    PopUpInit(){
      
        this.state.dimension = window.prompt("Saissisez une dimension pour le tableau");

       
        for(let i=0; i<(this.state.dimension)*(this.state.dimension); i++){
           let cell = <div>0</div>;
            console.log(i);
            ReactDOM.render(cell,document.getElementById("tableau"));
            this.state.cellTab.push(cell);
        }
        ReactDOM.render(this.state.cellTab,document.getElementById("tableau") );
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