import { mount } from "cypress/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Control, { ControlTypeEnum } from "../../src/components/Control";

describe("ControlTest.cy.tsx", () => {
  it("mount component", () => {
    cy.mount(
      <DndProvider debugMode={true} backend={HTML5Backend}>
        <Control type={ControlTypeEnum.Text}></Control>
      </DndProvider>
    );
  });

  it("test parent div", () => {
    cy.mount(
      <DndProvider debugMode={true} backend={HTML5Backend}>
        <Control type={ControlTypeEnum.Text}></Control>
      </DndProvider>
    );

    cy.get("div").should("have.class", "control-box");
  });
});
