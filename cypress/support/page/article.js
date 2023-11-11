const newArticleLink = ".nav-link[routerlink='/editor']"
const articleTitle = "input[placeholder='Article Title']"
const articleAbout = 'input[formcontrolname="description"]'
const body = 'textarea[formcontrolname="body"]'
const tagfield = "input[placeholder='Enter tags']"
const publishArticleBtn = "button[type='button']"

export class ArticlePage {

    clickonNewArticle(){
        cy.get(newArticleLink).click()
    }

    enterTitle(){
            cy.get(articleTitle).type("input ")
    }

    enterArticleAbout(){
        cy.get(articleAbout).type("input ")

    }
    enterBody(){
        cy.get(body).type("input ")

    }
    enterTags(){
        cy.get(tagfield).type("input ")
    }
    clickOnPublishArticle(){
        cy.get(publishArticleBtn).click()
    }

    cy.contains()


}

export const articlePage = new ArticlePage()