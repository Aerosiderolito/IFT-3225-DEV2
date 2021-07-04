class Game extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        
        Game: {
          dimension:0
          },
       
      };
    }


  
    render() {
      
      return (
        <div className={"Game"}   >
          <h1>Saissez une dimension pour commencer</h1>
          <Board onKeyPress={this.handleKeyPress}/>
        </div>
      );
    }
  }
  