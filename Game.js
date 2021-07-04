class Game extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        
        Game: {
          dimension:0
          },
       
      };
    }



    handleKeyPress = (event) => {

        document.addEventListener("keydown", event => {
        console.log(event.key);}
        )
      /*window.onKeyPress = () => {
        console.log("xd");
      }*/
      /*if(event.key === 'Enter')*/

     
      /*if(true){
        console.log(event.charCode+' up pressed here! ')

        if(event.charCode === "65"){
          console.log("UP");
        }

      }*/
    }
    


  
    render() {
      
      return (
        <div className={"Game"} onKeyPress={this.handleKeyPress}  >
          <h1>Saissez une dimension pour commencer</h1>
          <h1 id="score">Score</h1>
          <div>
            <input type="text" id="one"  />
          </div>
          <Board />
          
          

   
         
        </div>
      );
    }
  }
  
  ReactDOM.render(<Game />, document.getElementById("root"));