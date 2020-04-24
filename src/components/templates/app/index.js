import React from 'react';
import '../../../styles/App.css';

class AppTemplate extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    /**
     * Entre a tag de abertura e tag de 
     * fechamento do html, precisamos 
     * definir que ela irá receber um “props” 
     * do tipo “children”, assim poderemos 
     * importar esse template dentro da nossa 
     * página e entre a Tag do template 
     * colocar novos elementos html e componentes.
     */
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }

}

export default AppTemplate;
