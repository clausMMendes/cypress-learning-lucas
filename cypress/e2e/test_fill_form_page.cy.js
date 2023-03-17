import formPage, { fillFistName, fillLastName, fillUserEmail, getResultsTable } from "../pageObjects/formPage";


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

        formPage.fillUserEmail(formData.email);

        formPage.fillGender(formData.gender);

        formPage.fillMobile(formData.mobile);

        formPage.fillDate(formData.birthDate);

        formPage.fillSubjects(formData.subjects);

        formPage.fillHobbies(formData.hobbies);

        formPage.uploadUserImage(formData.image);

        formPage.fillAddress(formData.address);

        formPage.fillState(formData.state);

        formPage.fillCity(formData.city);

        formPage.submitForm();

        // Asserts the User Name
        formPage.getResultsTable()
            .contains(`${formData.firstName} ${formData.lastName}`) 
            .should("be.visible");

        // Asserts the User Email
        formPage.getResultsTable()
            .contains(`${formData.email}`)
            .should("be.visible");

        // Asserts the User Gender
        formPage.getResultsTable()
            .contains(`${formData.gender}`)
            .should("be.visible");

        // Asserts the User Mobile
        formPage.getResultsTable()
            .contains(`${formData.mobile}`)
            .should("be.visible");
        
        let date = new Date(formData.birthDate);
        formPage.getResultsTable()
            .contains(`${date.getDate()} ${date.toLocaleString("default", { month: "long" })},${date.getFullYear()}`)
            .should("be.visible")

        for(let subject of formData.subjects){
            formPage.getResultsTable()
                .contains(subject)
                .should("be.visible");
        }

        for(let hobbie  of formData.hobbies){
            formPage.getResultsTable()
                .contains(hobbie)
                .should("be.visible");
        }
    })
})