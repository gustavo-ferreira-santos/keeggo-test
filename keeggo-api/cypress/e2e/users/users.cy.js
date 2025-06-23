import { criarUsuario, listarUsuarios} from '../../support/requests/userRequests';
import { faker } from '@faker-js/faker';

describe('Testes de API - Usuários', () => {

  it('Listar usuários com sucesso - GET', () => {
    cy.request(listarUsuarios()).then((res) => {
      expect(res.status).to.eq(200);

      
      const response_body = res.body[0]
      expect(response_body.id).to.be.a('number')
      expect(response_body.name).to.be.a('string')
      expect(response_body.email).to.be.a('string')
      expect(response_body.isAdmin).to.be.a('number')
    });
  });

  it('Criar um novo usuário com sucesso - POST', () => {
    const emailAleatorio = faker.internet.email();
    const req = criarUsuario('Test User', emailAleatorio, '512404sSG', true)

    cy.request(req).then((res) => {
      expect(res.status).to.eq(201)

      expect(res.body.message).to.be.a('string')
      expect(res.body.id).to.be.a('number')
    });
  });
});
