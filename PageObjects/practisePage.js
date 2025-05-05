import {BasePage} from "./BasePage";
export class practisePage extends BasePage {
    static get url() {
        return "automation-practice-form";
    }
    static get name(){

        return cy.get('#firstName');
    }
    static get lastName(){

        return cy.get('#lastName');
    }
    static get email(){

        return cy.get('#userEmail');
    }
    static get gender(){

        return cy.contains('label', 'Male');
    }
    static get dateClick(){

        return cy.get('#dateOfBirthInput');
    }
    static get dateMonth(){

        return cy.get('.react-datepicker__month-select');
    }
    static get dateYear(){

        return cy.get('.react-datepicker__year-select');
    }
    static get dateDay(){

        return cy.get('.react-datepicker__day')
    }
    static get phoneNumber(){

        return cy.get('#userNumber');
    }
    static get subjects(){

        return cy.get('#subjectsContainer');
    }
    static get hobbies() {
        return cy.contains('label', 'Music');
    }
    static get address(){

        return cy.get('#currentAddress');
    }
    static get state(){

        return cy.get('#stateCity-wrapper');
    }
    static get city(){

        return cy.get('#city');
    }

    static get submitButton(){

        return cy.get('#submit');
    }

    static get resultTable() {
        return cy.get('.table'); 
    }

}