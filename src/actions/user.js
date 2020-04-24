export const UPDATE_USER_NAME = 'UPDATE_USER_NAME';

export function updateUserName(data) {
  /**
   * Nessa action vamos criar uma função que deverá 
   * por padrão, receber um tipo(type) que vamos 
   * usar como referência para exportá-la e um payload, 
   * nesse caso um valor vindo da nossa view.
   */
  return {
    type: UPDATE_USER_NAME,
    payload: data
  };
}
