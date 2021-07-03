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
          <h1 >Hello!!!</h1>
          <h1
        
          >
            World!!!
          </h1>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Test />, document.getElementById("root"));