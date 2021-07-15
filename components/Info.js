/**
 * Component principal du jeu
 */

 class Info extends React.Component {
    constructor(props) {
      super(props);

    }

render() {

  return (
    <div className={"flex_principal"}>
        
        <section><h1>2048</h1></section>

        <aside>
          
          <div className={"flex_display"}>

            <section>
              <div >SCORE</div>
              <div id="score">0</div>
            </section>

            <aside>
              <div><a href={this.props.link}> Go to <br/> Rapport</a></div>
              <div></div>
              
            </aside>
            
          </div>
        </aside>
        </div>
  );
}
}
  