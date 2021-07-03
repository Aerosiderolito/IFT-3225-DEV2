class Board extends React.Component {
    constructor(props) {
        
      super(props);
      this.state = {
        
        
       
      };
    }

    PopUpInit(){
    
        return 0;

    }



  
    render() {
      
      return (
        <div className="Test">
          <div
            className="Board"
          />
          <br></br>
          <h1 >Hillo!!!</h1>
          <h1
        
          >
            World!!!
          </h1>

          
         
        </div>
      );
    }
  }
  
  ReactDOM.render(<Board />, document.getElementById("root"));