class formPage{
    elements = {
        
        firstNameInput : () => cy.get('#firstName'),
        
        lastNameInput : () => cy.get('#lastName'),
        
        userEmailInput : () => cy.get('#userEmail'),

        userGenderRadio : () => cy.get('.custom-control-label'),

        userMobileInput : () => cy.get('#userNumber'),

        userBirthDateInput : () => cy.get('.react-datepicker__input-container'),

        userSubjectsInput : () => cy.get('#subjectsInput'),

        userHobbiesCheckbox : () => cy.get('.custom-control-label'),

        userImageButton : () => cy.get('#uploadPicture'),

        userAddressInput : () => cy.get('#currentAddress'),

        userStateSelector : () => cy.get('#state'),

        userCitySelector : () => cy.get('#city'),

        submitButton : () => cy.get('#submit'),

        formResultsTable : () => cy.get('.modal-body*')
    };

    visitPage(){
        cy.visit("/automation-practice-form");
    }

    fillFistName(firstName){
        this.elements.firstNameInput().type(firstName);
    }

    fillLastName(lastName){
        this.elements.lastNameInput().type(lastName);
    }

    fillUserEmail(email){
        this.elements.userEmailInput().type(email);
    }

    // Genders can be ["Male","Female", "Other"]
    fillGender(gender){
        this.elements.userGenderRadio().contains(gender).click();
    }

    fillMobile(mobile){
        this.elements.userMobileInput().type(mobile);
    }

    fillDate(date){
        this.elements.userBirthDateInput().click();
        let auxBirthDate = new Date(date);
        
        const day = auxBirthDate.getDate();
        const month = auxBirthDate.toLocaleString("default", { month: "long" });
        const year = auxBirthDate.getFullYear();
        
        cy.get('.react-datepicker__year-select').select(year.toString());
        cy.get('.react-datepicker__month-select').select(month);
        cy.get('.react-datepicker__day:not(.react-datepicker__day--outside-month)').contains(day).click();
    }

    fillSubjects(subjects){
        for(let subject of subjects){
            this.elements.userSubjectsInput().type(subject);
            cy.get('.subjects-auto-complete__menu')
                .contains(subject)
                .click();
        }
    }

    fillHobbies(hobbies){
        for(let hobbie of hobbies){
            this.elements.userHobbiesCheckbox()
                .contains(hobbie)
                .click();
        }
    }

    uploadUserImage(imagePath){
        this.elements.userImageButton().selectFile(imagePath);
    }

    fillAddress(address){
        this.elements.userAddressInput().type(address);
    }

    fillState(state){
        this.elements.userStateSelector().click();
        cy.get('.css-11unzgr*')
            .contains(state)
            .click();
    }

    fillCity(city){
        this.elements.userCitySelector().click();
        cy.get('.css-11unzgr*')
            .contains(city)
            .click();
    }

    submitForm(){
        this.elements.submitButton().click({force: true});
    }

    getResultsTable(){
        return this.elements.formResultsTable();
    }
}

module.exports = new formPage()