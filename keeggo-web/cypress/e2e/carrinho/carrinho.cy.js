import { carrinho_page } from '../../pages/carrinhoPage'; // Ajuste o caminho conforme necessário

describe('Testes do Carrinho', () => {

  beforeEach(function() {
    cy.visit(''); // Visita a página antes de cada teste
  });

  it('Adicionar produto ao carrinho', function() {
    carrinho_page.click_btn_add_carrinho();
    carrinho_page.validar_produto_adicionado_carrinho();
  });

});
