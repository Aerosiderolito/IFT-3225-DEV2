class Test extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
        colors: {
          first:"Red"
          },
       
      };
    }
  
  
    render() {
      return (
        <div className="Test">
          <div
            className="game"
          />
          <br></br>
          <h1 >New game</h1>
          <h1
        
          >
            Load save from server
          </h1>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Test />, document.getElementById("root"));