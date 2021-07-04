class Game extends React.Component {
    constructor(props) {
      super(props);
      this.onKeyPress = this.onKeyPress.bind(this)
      this.state = {
        
        Game: {
          dimension:0
          },
       
      };
    }

    onKeyPress(event){
      console.log(event.key);
    }

    start(){

      aaa = window.prompt("Veillez choisir la dimension du tableau");
      this.handleKeyPress()
      

    }

    handleKeyPress = (event) => {
      /*if(event.key === 'Enter')*/
      if(true){
        console.log(window.Event.bind(event.charCode)+' up pressed here! ')
      }
    }
    


  
    render() {
      
      return (
        <div className={"Game"}  >
          <h1>Saissez une dimension pour commencer</h1>
          <h1 id="score">Score</h1>
          <Board />
          <div>
           <input type="text" id="one" onKeyPress={this.handleKeyPress} />
        </div>
          

   
         
        </div>
      );
    }
  }
  
  ReactDOM.render(<Game />, document.getElementById("root"));