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
        <div  >
          
          <Board/>
        </div>
      );
    }
  }
  