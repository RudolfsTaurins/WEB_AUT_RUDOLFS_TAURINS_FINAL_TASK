const { practisePage } = require("../../PageObjects/practisePage");


describe('HomeWork Final', () => {
  context("test", () => {
    beforeEach(() => {
      practisePage.visit();

  });
  
it.only("practice form", () => {
      practisePage.name.type("Rudolfs");
      practisePage.lastName.type("Taurins");
      practisePage.email.type("Rudolfs@gmail.com");
      practisePage.gender.click();
      practisePage.dateClick.click();
      practisePage.dateMonth.select("2");
      practisePage.dateYear.select("1930");
      practisePage.dateDay.contains("28").click();
      practisePage.phoneNumber.type("22315866");
      practisePage.subjects.type("Economics{enter}");
      practisePage.hobbies.click();

      cy.get('input[type=file]').selectFile('../WEB_AUT_RUDOLFS_TAURINS_FINAL_TASK/files/Norton_Motorcycle.jpg');
      practisePage.address.type("Inzenieru iela 101");
      practisePage.state.type('NCR{enter}');
      practisePage.city.type('Delhi{enter}');
      practisePage.submitButton.click();


      practisePage.resultTable.should("contain", "Rudolfs");
      practisePage.resultTable.should("contain", "Taurins");
      practisePage.resultTable.should("contain", "Rudolfs@gmail.com");
      practisePage.resultTable.should("contain", "Male");
      practisePage.resultTable.should("contain", "22315866");
      practisePage.resultTable.should("contain", "28 February,1930");
      practisePage.resultTable.should("contain", "Economics");
      practisePage.resultTable.should("contain", "Music");
      practisePage.resultTable.should("contain", "Inzenieru iela 101");


});
});
});