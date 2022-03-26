import React from "react";
import { Accordion } from "react-bootstrap";

const Qna = () => {
  return (
    <div className="container mb-5">
      <hr />
      <h1 className="text-center text-white">QNA</h1>
      <hr />
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <strong>How React works?</strong>
          </Accordion.Header>
          <Accordion.Body>
            React.JS is one of the most widely used JavaScript libraries that
            help to build user interfaces. It is a powerful JavaScript library
            with a wide range of functions and is an essential part of any
            toolkit for developing web applications. React uses a virtual DOM,
            which is essentially a JavaScript representation of a DOM tree, to
            speed things up. As a result, when reading or writing to the DOM, it
            will use its virtual representation. The virtual DOM will then try
            to update the browser's DOM as efficiently as possible. React
            elements, as opposed to browser DOM elements, are simple objects
            that are simple to create. React DOM updates the DOM to match the
            React elements. This is the case. This is due to the fact that
            JavaScript is extremely fast, and it is worthwhile to keep a DOM
            tree in it to speed up its manipulation. React was designed to be
            used in the browser, but because of its design, it can also be used
            in the server using Node.js.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <strong>How useState works?</strong>
          </Accordion.Header>
          <Accordion.Body>
            In function components, the useState hook lets us to declare one or
            more state variables. React keeps track of these state variables in
            the background and ensures that they are updated on subsequent
            component re-renders.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Qna;
