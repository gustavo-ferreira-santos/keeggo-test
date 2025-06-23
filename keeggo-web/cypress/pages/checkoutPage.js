class CheckoutPage {

  click_btn_checkout() {
    cy.get('.btn-primary').click()
  }

  preencher_form_checkout(dados_checkout, email) {
    cy.get('#first-name').type(dados_checkout.nome)
    cy.get('#last-name').type(dados_checkout.sobrenome)
    cy.get('#address').type(dados_checkout.endereço)
    cy.get('#number').type(dados_checkout.numero)
    cy.get('#cep').type(dados_checkout.cep)
    cy.get('#phone').type(dados_checkout.telefone)
    cy.get('#email').type(email)
    cy.get('#create-account').click()
    cy.get('#password').type(dados_checkout.senha)
    cy.get('#confirm-password').type(dados_checkout.senha)
    cy.get('.form-check-input').eq(3).click()
    cy.get('.form-check-input').eq(4).click()
  }

  validar_checkout_sucesso() {
    cy.get('#order-status').should('be.visible')
    cy.get('#order-status').should('contain', 'Pagamento aprovado')
  }

  validar_checkout_dados_invalidos() {
    cy.get('.alert-danger').should('be.visible')
    cy.get('.invalid-feedback').should('be.visible')
  }
}

export const checkout_page = new CheckoutPage()
