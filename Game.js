class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
        colors: {
          first:"Red"
          },
       
      };
    }

    start(){

      
      return window.prompt("XD");

    }


  
    render() {
      
      return (
        <div className="Game">
          <h1>Click ici pour commencer</h1>
          <button className={"btn btn-primary"} onClick={this.start}>Commencer le jeux</button>

          <Board/>
         
        </div>
      );
    }
  }
  
  ReactDOM.render(<Game />, document.getElementById("root"));