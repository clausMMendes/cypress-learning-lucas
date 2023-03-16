import formPage, { fillFistName, fillLastName, fillUserEmail } from "../pageObjects/formPage";


describe("Form Fill Automation", () => {
    Cypress.on("uncaught:exception", (e, runnable) => {
        return false
      })
    
    let formData
    
    before("Visit the Form page", () => {
        formPage.visitPage();
        cy.fixture('formPageFixture').then((data) => {
            formData = data;
          })
    })

    it("Should fill the Form Page", () => {
        formPage.fillFistName(formData.firstName);
        
        formPage.fillLastName(formData.lastName);

        formPage.fillUserEmail(formData.userEmail);

        formPage.fillGender(formData.userGender);

        formPage.fillMobile(formData.userMobile);

        formPage.fillDate(formData.birthDate);

        formPage.fillSubjects(formData.subjects);

        formPage.fillHobbies(formData.hobbies);

        formPage.uploadUserImage(formData.image);

        formPage.fillAddress(formData.address);

        formPage.fillState(formData.state);

        formPage.fillCity(formData.city);

        formPage.submitForm();
    })
})