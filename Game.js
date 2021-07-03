class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
        Game: {
          dimension:0
          },
       
      };
    }

    start(){

      
      aaa = window.prompt("Veillez choisir la dimension du tableau");
      
      return 

    }


  
    render() {
      
      return (
        <div className="Game">
          <h1>Saissez une dimension pour commencer</h1>
          <Board/>

   
         
        </div>
      );
    }
  }
  
  ReactDOM.render(<Game />, document.getElementById("root"));