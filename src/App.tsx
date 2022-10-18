import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { Formis, FormisModeler } from "./lib/index";
import DragAndDrop from "./views/DragAndDrop";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import GridView from "./views/GridView";


function App() {
  return (
    <div className="App">

      {/* <FormisModeler></FormisModeler>
      <FormisViewer></FormisViewer> */}

      {/* <DragAndDrop></DragAndDrop> */}

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>React Formis</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/" as={Link}>
                Form Modeler
              </Nav.Link>
              <Nav.Link to="/drag-and-drop" as={Link}>
                Drag And Drop
              </Nav.Link>
              <Nav.Link to="/grid" as={Link}>
                Grid
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/" element={<FormisModeler></FormisModeler>}></Route>
          <Route
            path="/drag-and-drop"
            element={<DragAndDrop></DragAndDrop>}
          ></Route>
          <Route path="/grid" element={<GridView></GridView>}></Route>
        </Routes>
      </Container>

    </div>
  );
}

export default App;
