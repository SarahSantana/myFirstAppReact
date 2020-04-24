import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import About from '../pages/About';
import { updateUserName } from '../actions/user';

/**
const mapStateToProps = store => {
  return {
    user: store.user
  };
};
 */

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

// dispatch => desencadea uma mudança de estado
// envia esse dado até a action e consequentemente ao reducer.
const mapDispatchToProps = dispatch => {
  return {
    updateUserName: data => {
      dispatch(updateUserName(data));
    },
  };
};

/**
 * A biblioteca react-redux possui uma função chamada connect. 
 * O connect, por sua vez, é responsável por estabelecer conexão 
 * entre algum componente e o Redux (store, reducers). Quando um 
 * componente está englobado pelo connect, ele recebe uma função 
 * chamada dispatch por props, para que você possa executar as 
 * suas ações (que tem funções de quando executadas sao ouvidas
 * pelos reducers que alteram o state). Para usarmos 
 * o connect, devemos dizer quais dados da store o nosso componente 
 * irá usar (estes dados também serão passados por props). No nosso 
 * caso, o único dado que vamos precisar será o usuario.
 * 
 * Nesse caso passamos para a pagina a opção de chamar 
 * as actions (dispatch) via esse mapDispatchToProps que 
 * quando acionado na pagina vem pra ca
 * 
 * Nesse caso definimos qual state do store a página deveria usar
 * passando só o state de usuario nesse mapStateToProps
 * 
 * STORE = N states (que sao alterados via reducers)
 * reducers sao acionados via actions
 * actions sao acionadas via dispatch 
 * dispatch é um recurso dado pelo connect 
 * connect é uma função do REDUX
 *  
 */
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(About)
);
