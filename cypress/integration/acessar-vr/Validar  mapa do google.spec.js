/// <reference types="cypress" />


describe("Acessar a página VR Benefícios",() => {

it("Clicar em  Pra Você, Depois , Onde usar meu cartão VR, validar que o mapa do google abriu", () => {

    cy.visit("/")

    cy.get (":nth-child(3) > .vr-main-navigation__link ").should("contain","Pra Você")
    cy.get(':nth-child(3) > .vr-main-navigation__link').click()
    cy.get('.vr-hero__actions > .vr-button--negative').click()

/* Continuei o teste, realizando a consulta pelo estado de Santa Catarina

    cy.get("#endereco").type("Santa Catarina, Brasil") 
    cy.get('[data-place-id="ChIJ-f9SwCVN2ZQRK6t_7YB1Jys"]').should("be.visible").click()
    cy.get("#buttonFiltrar").click()
    cy.get(':nth-child(1) > .vr-map__card--title').click()
    cy.get('#buttonFiltrarCards').click()
    cy.get('#buscarResultados.primary-button').click() */
       


})

})

