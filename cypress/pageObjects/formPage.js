class formPage{
    elements = {
        
        firstName : () => cy.get('#firstName'),
        
        lastName : () => cy.get('#lastName'),
        
        userEmail : () => cy.get('#userEmail'),

        userGender : () => cy.get('.custom-control-label'),

        userMobile : () => cy.get('#userNumber'),

        userBirthDateInput : () => cy.get('.react-datepicker__input-container'),

        userSubjectInput : () => cy.get('#subjectsInput'),

        userHobbies : () => cy.get('.custom-control-label'),

        userImage : () => cy.get('#uploadPicture'),

        userAddress : () => cy.get('#currentAddress'),

        userState : () => cy.get('#state'),

        userCity : () => cy.get('#city'),

        submitButton : () => cy.get('#submit')
    };

    visitPage(){
        cy.visit("/automation-practice-form");
    }

    fillFistName(firstName){
        this.elements.firstName().type(firstName);
    }

    fillLastName(lastName){
        this.elements.lastName().type(lastName);
    }

    fillUserEmail(email){
        this.elements.userEmail().type(email);
    }

    // Genders can be ["Male","Female", "Other"]
    fillGender(gender){
        this.elements.userGender().contains(gender).click();
    }

    fillMobile(mobile){
        this.elements.userMobile().type(mobile);
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
            this.elements.userSubjectInput().type(subject);
            cy.get('.subjects-auto-complete__menu')
                .contains(subject)
                .click();
        }
    }

    fillHobbies(hobbies){
        for(let hobbie of hobbies){
            this.elements.userHobbies()
                .contains(hobbie)
                .click();
        }
    }

    uploadUserImage(imagePath){
        this.elements.userImage().selectFile(imagePath);
    }

    fillAddress(address){
        this.elements.userAddress().type(address);
    }

    fillState(state){
        this.elements.userState().click();
        cy.get('.css-11unzgr*')
            .contains(state)
            .click();
    }

    fillCity(city){
        this.elements.userCity().click();
        cy.get('.css-11unzgr*')
            .contains(city)
            .click();
    }

    submitForm(){
        this.elements.submitButton().click({force: true});
    }
}

module.exports = new formPage()