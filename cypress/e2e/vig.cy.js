import Practice from "../support/page/VigPage";
const pp=new Practice()


describe('Test Suite',()=>{

    // beforeEach(()=>{


    // })
    before(()=>{
        cy.visit('/practice-test-login/')
       // cy.viewport(300,300)  used for specifying screen size 
    })

    it('Verify Success Login',()=>{
        pp.getUserName('student')
        pp.getUserPassword('Password123')
        pp.clickSubmit()
        pp.verifySuccessLogin()

    })



    

})