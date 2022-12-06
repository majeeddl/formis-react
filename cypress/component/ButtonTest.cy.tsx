import ButtonTest from "../../src/components/ButtonTest";

describe("ButttonTest.cy.tsx", () => {
  it("playground", () => {
    cy.mount(<ButtonTest></ButtonTest>);

    cy.get("button").should("contain.text", "button test");
  });
});
