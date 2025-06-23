class CarrinhoPage {

  click_btn_add_carrinho() {
    cy.get('.add-to-cart').eq(0).click()
  }

  click_menu_carrinho() {
    cy.contains('.nav-link', 'CARRINHO').click()
  }

  validar_produto_adicionado_carrinho() {
    cy.get('.alert-success').should('be.visible')
    cy.get('.badge').should('be.visible')
  }

}

export const carrinho_page = new CarrinhoPage()
