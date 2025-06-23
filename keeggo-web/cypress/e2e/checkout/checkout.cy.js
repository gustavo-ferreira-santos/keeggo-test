import { carrinho_page } from '../../pages/carrinhoPage'; // Ajuste o caminho conforme necessário
import { checkout_page } from '../../pages/checkoutPage'; // Ajuste o caminho conforme necessário
import { faker } from '@faker-js/faker';

describe('Testes de Checkout', () => {

  beforeEach(function() {
    cy.fixture('data.json').as('data'); //carrega a massa de dados no alias 'data'
    cy.visit(''); // Visita a página antes de cada teste
  });

  it('Realizar checkout com Sucesso', function() {
    const dados_checkout_valido = this.data.checkout.dados_checkout_sucesso
    const emailAleatorio = faker.internet.email()
    // usando o faker parar gerar um novo email em toda execução, mitigando a possibilidade do cenario falhar ao fazer um cadastro com um email ja utilizando anteriormente no checkout
    carrinho_page.click_btn_add_carrinho()
    carrinho_page.validar_produto_adicionado_carrinho()
    carrinho_page.click_menu_carrinho()
    checkout_page.click_btn_checkout()
    checkout_page.preencher_form_checkout(dados_checkout_valido, emailAleatorio)
    checkout_page.click_btn_checkout()

    checkout_page.validar_checkout_sucesso()
  });

    it('Realizar checkout com dados invalidos ', function() {
    const dados_checkout_invalido = this.data.checkout.dados_checkout_invalidos
    const emailInvalido = faker.internet.username()
    carrinho_page.click_btn_add_carrinho()
    carrinho_page.validar_produto_adicionado_carrinho()
    carrinho_page.click_menu_carrinho()
    checkout_page.click_btn_checkout()
    checkout_page.preencher_form_checkout(dados_checkout_invalido, emailInvalido)
    checkout_page.click_btn_checkout()

    checkout_page.validar_checkout_dados_invalidos()
  });

});
