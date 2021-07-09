class Game extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        
        Game: {
          dimension:0, 
          
          },
       
      };
    }


  
    render() {
      
      return (
        <div  >
          
          <Board/>
          <footer><a href="https://mesosiderito.space">César Rodriguez</a> - Mohammad Naim </footer>
        </div>

      );
    }
  }
  