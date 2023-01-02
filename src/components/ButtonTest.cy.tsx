import ButtonTest from "./ButtonTest";

describe("ButttonTest.cy.tsx", () => {
  it("playground", () => {
    cy.mount(<ButtonTest></ButtonTest>);

    cy.get("button").should("contain.text", "button test");
  });
});
