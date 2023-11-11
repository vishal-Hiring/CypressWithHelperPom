/// <reference types="cypress" />

import Practice from "../support/page/VigPage"
const pp = new Practice()
describe('medilink',()=>{
    it("medilink login",()=>{
        cy.visit("www.testbook.com")
        cy.get('[class="btn btn--cta"]').eq(1).click()
        
    })
})