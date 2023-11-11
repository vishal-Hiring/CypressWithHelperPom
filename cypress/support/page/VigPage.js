const userNmaeFiled='[id="username"]'
const passwordFiled ='[id="password"]'
const submitButton ='[id="submit"]'
const success ='.post-title'
import helper from "../helper/helper"
const hp =new helper()
export default class Practice{
    getUserName(username){
        cy.get(userNmaeFiled).should('be.visible').type(username)  // use .eq(0) for index 0 or so on
    }
    getUserPassword(Password){
        cy.get(passwordFiled).should('be.visible').type(Password)
    }
    clickSubmit(){
        cy.get(submitButton).should('be.visible').click()
    }
    verifySuccessLogin(){
        let successText='Logged In Successfully'
        cy.get(success).invoke('text').then((text)=>{
            expect(successText).to.eq(text)
            cy.log(text)
        })
       // cy.get(success).should('be.visible')   is se chl jayega kaam 

    }

    login(username,Password){
        this.getUserName(username)
        this.getUserPassword(Password)
        this.clickSubmit()
    }

    useHelper(username){
        hp.typeText(userNmaeFiled,username)
    }

}