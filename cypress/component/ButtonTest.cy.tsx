import React from "react";

import ButtonTest from "../../src/components/ButtonTest";

describe("ButtonTest.cy.ts", () => {
  it("playground", () => {
    cy.mount(<ButtonTest></ButtonTest>);

    cy.get("button").should("contain.text", "test");
  });
});
