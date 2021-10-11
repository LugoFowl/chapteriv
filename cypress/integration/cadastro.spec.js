/// <reference types = "cypress" />

var Chance = require('chance')
var chance = new Chance() 

describe('Cadastro', () =>{
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado', () => {
        cy.visit('https://form-agilizei.netlify.app/')

        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress').type(chance.email())
        
        cy.get('input[value=n]').check()
        cy.get('input[type=checkbox]').check('Netflix')
        cy.get('input[type=checkbox]').check('Dormir')
        
        cy.get('select#countries').select('Dinamarca', { force : true})
        cy.get('select#years').select('1987', { force : true})
        cy.get('select#months').select('Agosto', { force : true})
        cy.get('select#days').select('7', { force : true})
        
        cy.get('input#firstpassword').type('Teste123')
        cy.get('input#secondpassword').type('Teste123')
        
        cy.get('button#submitbtn').click()
        //eu espero que minha aplicação seja direcionada para a listagem
        //url
        //deveria conter listagem
        //should contain listagem
        cy.url().should('contain', 'listagem') //obtém a url da página que está ativa, neste caso, ao dar o click no button submit
                                                //a aplicação redireciona automaticamente para a página de listagem, dai este 
                                                //comando irá validar se o redirecionamento ocorreu certinho
        
        
    })
})