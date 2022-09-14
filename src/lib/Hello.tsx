import React from "react";

const HelloWorld = (props:any) => {
  const { greetee = "Formis" } = props;

  return <div>Hello, {greetee}!</div>;
};

export default HelloWorld;
