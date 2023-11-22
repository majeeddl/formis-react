import "./App.css";

import { Formis } from "./lib/index";
import DragAndDrop from "./views/DragAndDrop";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import GridView from "./views/GridView";
import MantineForm from "./views/MantineForm";
import DndView from "./views/DndView";
import { MantineProvider } from "@mantine/core";
import { useFormis } from "./lib/hooks/formis.hook";
import { v4 } from "uuid";

function App() {
  const formis = useFormis({
    items: [
      {
        id: "1",
        name: "name1",
        type: "input",
        label: "Name 1",
        parent: null,
        ancestors: [],
        required: true,
        disabled: false,
        // x: 0,
        // y: 1,
      },
      {
        id: " 2",
        type: "input",
        name: "name2",
        label: "Name 2",
        parent: null,
        ancestors: [],
        required: false,
        disabled: true,
        // x: 0,
        // y: 0,
      },
      // {
      //   id: "3",
      //   type: "grid",
      //   label: "grid",
      //   parent: null,
      //   cols: [
      //     {
      //       id: "3-1",
      //       span: 12,
      //     },
      //     {
      //       id: "3-2",
      //       span: 12,
      //     },
      //   ],
      // },
    ],
  });
  return (
    <MantineProvider>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>React Formis</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link to="/" as={Link}>
                  Formis
                </Nav.Link>
                <Nav.Link to="/drag-and-drop" as={Link}>
                  Drag And Drop
                </Nav.Link>
                <Nav.Link to="/grid" as={Link}>
                  Grid
                </Nav.Link>
                <Nav.Link to="/mantineform" as={Link}>
                  Mantine Form
                </Nav.Link>
                <Nav.Link to="/dnd-kit" as={Link}>
                  DND kit
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Formis useFormis={formis}></Formis>
                  <Button onClick={() => console.log(formis.getItems())}>get items</Button>
                </>
              }
            ></Route>
            {/* <Route path="/" element={<FormisModeler></FormisModeler>}></Route> */}
            <Route path="/drag-and-drop" element={<DragAndDrop></DragAndDrop>}></Route>
            <Route path="/grid" element={<GridView></GridView>}></Route>
            <Route path="/mantineform" element={<MantineForm></MantineForm>}></Route>
            <Route path="/dnd-kit" element={<DndView></DndView>}></Route>
          </Routes>
        </Container>
      </div>
    </MantineProvider>
  );
}

export default App;
