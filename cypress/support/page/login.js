const signinLink = ".nav-link[routerlink='/login']"
const emailfield = "input[placeholder='Email']"
const passwordfield = "input[placeholder='Password']"
const signinBtn = "button[type='submit']"


export class LoginPage {

    clickonSignInBtn(){
        cy.get(signinLink).click()
    }
    
    login(){
        cy.get(emailfield).type('atish.hiring@gmail.com')
        cy.get(passwordfield).type('Jimmy_3231')
        cy.wait(1000)
        cy.get(signinBtn).click()
    }



}

export const loginPage = new LoginPage()