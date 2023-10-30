import { Grid } from "@mantine/core";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Box } from "./dragAndDrop/Box";
import { Dustbin } from "./dragAndDrop/Dustbin";

const DragAndDrop = () => {
  return (
    <>
      <div>DragAndDrop</div>

      <div>
        <DndProvider backend={HTML5Backend}>
          <div>
            <div style={{ overflow: "hidden", clear: "both" }}>
              <Dustbin />
            </div>

            <Grid columns={24}>
              <Grid.Col className="mantineGridCol" span={12}>
                <Dustbin />
              </Grid.Col>
              <Grid.Col className="mantineGridCol" span={6}>
                <Dustbin />
              </Grid.Col>
              <Grid.Col className="mantineGridCol" span={6}>
                <Dustbin />
              </Grid.Col>
            </Grid>
            <div style={{ overflow: "hidden", clear: "both" , marginTop : 20 }}>
              <Box name="Glass" />
              <Box name="Banana" />
              <Box name="Paper" />
            </div>
          </div>
        </DndProvider>
      </div>
    </>
  );
};

export default DragAndDrop;
