class Game extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        
          score: 0,

       
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
        <div className={"flex_principal"}>
        
        <section><h1>2048</h1></section>

        <aside>
          
          <div className={"flex_display"}>

            <section>
              <div >SCORE</div>
              <div id="score">0</div>
            </section>

            <aside>
              <div><a href="rapport/rapport.xhtml"> Go to <br/> Rapport</a></div>
              <div></div>
              
            </aside>
            
          </div>
        </aside>
        
        

        </div>
        <Board game={this}/>
      <footer><a href="https://mesosiderito.space">César Rodriguez</a> - Mohammad Naim </footer>
    </div>

  );
}
}
  