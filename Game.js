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
          <h1>2048</h1>
          <Board onKeyPress={this.handleKeyPress}/>
        </div>
      );
    }
  }
  