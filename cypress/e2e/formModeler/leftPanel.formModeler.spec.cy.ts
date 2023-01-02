import "@4tw/cypress-drag-drop";

describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("controls", () => {
    cy.get('[data-cy="controls-tab"]').should("have.text", "Controls");

    cy.get('[data-cy="controls-tab"]').click();

    const dataTransfer = new DataTransfer();

    cy.get("[data-cy=control-item-label]").trigger("dragstart", {
      dataTransfer,
    });

    cy.get("[data-cy=drag-area]").trigger("drop", { dataTransfer });
  });

  it("drag text control", () => {
  
    cy.get('[data-cy="controls-tab"]').click();


    cy.get("[data-cy=control-item-text]").drag('[data-cy=drag-area]')
  });


  // it("settings", () => {
  //   cy.get('[data-cy="settings-tab"]').should("have.text", "Settings");

  //   cy.get('[data-cy="settings-tab"]').click();
  // });
});
