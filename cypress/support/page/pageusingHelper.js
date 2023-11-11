const userNmaeFiled='[id="username"]'
const passwordFiled ='[id="password"]'
const submitButton ='[id="submit"]'
const success ='.post-title'

import helper from "../helper/helper"
const hp =new helper()
export default class Practice{
    getUserName(username){
       hp.typeText(userNmaeFiled,username)  // use .eq(0) for index 0 or so on
    }
    getUserPassword(Password){
        hp.typeText(passwordFiled,Password)
    }
    clickSubmit(){
        hp.click(submitButton)
        
    }
    verifySuccessLogin(){
        let successText='Logged In Successfully'
        hp.invokeTextAndVerify(success,successText)
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