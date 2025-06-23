// cypress/support/requests/usuariosRequest.js

export function criarUsuario(nome, email, senha, isAdmin) {
  return {
    method: 'POST',
    url: '/users',
    body: {
      name: nome,
      email: email,
      password: senha,
      isAdmin: isAdmin
    },
    headers: {
      'Content-Type': 'application/json'
    }
  };
}

export function listarUsuarios() {
  return {
    method: 'GET',
    url: '/users'
  };
}
