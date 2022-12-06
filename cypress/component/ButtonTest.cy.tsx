import ButtonTest from "../../src/components/ButtonTest";

describe("ComponentName.cy.ts", () => {
  it("playground", () => {
    cy.mount(<ButtonTest></ButtonTest>);

    cy.get("button").should("contain.text", "button test");
  });
});
