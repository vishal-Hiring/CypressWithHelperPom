/// <reference types="cypress" />

const { articlePage } = require("../support/page/article")
const { loginPage } = require("../support/page/login")

describe('conduit', () => {
  beforeEach(  ()=>{
    cy.visit("https://candidatex:qa-is-cool@qa-task.backbasecloud.com",{failOnStatusCode: false})
    loginPage.clickonSignInBtn()
     loginPage.login()
})

  it('Login', () => {
    
    // cy.visit("https://qa-task.backbasecloud.com?Username=candidatex&Password=qa-is-cool",{failOnStatusCode: false})
    // cy.window().then(function)
    // loginPage.clickonSignInBtn()
    // loginPage.login()

    cy.visit("https://candidatex:qa-is-cool@qa-task.backbasecloud.com",{failOnStatusCode: false})
    loginPage.clickonSignInBtn()
     loginPage.login()
    // {
    //   auth: {
    //     Username: 'candidatex',
    //     Password: 'qa-is-cool'

    //   }
    // })
    
  })
  it("Create a Artile ", ()=>{
    articlePage.clickonNewArticle()
    articlePage.enterTitle()
    articlePage.enterArticleAbout()
    articlePage.enterBody()
    articlePage.enterTags()
    articlePage.clickOnPublishArticle()
  })

})
