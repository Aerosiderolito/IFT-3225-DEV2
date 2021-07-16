/**
 * Component principal du jeu
 */

class Game extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        
          score: 0,
          link: "rapport/rapport.xhtml",
          winCase: 2048, // change this case to change the win tile
      };
    }

/**
 * fonction permetant d'affecter le score du jeu 
 * le score est le nombre de mouvement necessaire pour arriver à 2048
 * @param value valeur optionel pour changer le score 
 */

 setScore = (value) =>{
  if(value != null){
    this.state.score = value;
    return;
  }
  this.state.score++;
  ReactDOM.render(<div> {this.state.score}</div>,document.getElementById("score") );
}


render() {

  return (
    <div  >
      <Info link={this.state.link}/>
      <Board game={this} winCase={this.state.winCase}/>
      <footer>
        <a href="https://mesosiderito.space">César Rodriguez</a> - Mohammad Naim </footer>
    </div>

  );
}
}
  