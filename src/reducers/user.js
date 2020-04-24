import { UPDATE_USER_NAME } from '../actions/user';

const INITIAL_STATE = {
  personalInfo: {
    name: 'Primeiro Usuário',
    id: 1
  },
  employerInfo: {
    carrer: 'Developer'
  }
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_USER_NAME:
      return updateUserName(state, action.payload);
    default:
      return state;
  }
}

// response google login
function updateUserName(state, data) {
  const newState = { ...state };
  newState.personalInfo.name = data;
  return Object.assign({}, state, { ...newState });
}

/**
 * Pronto! Quando você digitou na sua página 
 * o novo nome de usuário e, clicou para alterar, 
 * esse valor trafegou desde a view, passou pelo 
 * método no container, que disparou um evento 
 * para “action” atualizando uma propriedade 
 * no reducer. Nesse momento, nossa aplicação 
 * reconhece que teve uma alteração no estado 
 * da propriedade e solicita que o reactjs 
 * renderize novamente com a informação atualizada.
 * 
 * Obs: Lembre-se que o reactjs trabalha com 
 * virtual dom, ou seja, nesse momento ele 
 * renderizou apenas o bloco do html que a 
 * propriedade está envolvida.
 */
