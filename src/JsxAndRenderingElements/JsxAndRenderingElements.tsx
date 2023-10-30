import React from "react";
import * as ReactDOM from "react-dom";

const JsxAndRenderingElements = () => {
  const element = React.createElement("h2", null, "Hello world!!!!");
  const name: string = "Avijit";
  const extraElement = <h1>Hello Roy</h1>;
  console.log(element);
  return (
    <>
      <h1>Hi {name}, This is JavaScript XML!!</h1>
      <h1>{new Date().toLocaleString()}</h1>
      {getGretting()}
    </>
  );
};

const getGretting = (user?: string) => {
  if (user) {
    return <h1>Hello {user}</h1>;
  } else {
    return <h1>Hello Mr. x</h1>;
  }
};

const index = 0;
setInterval(() => {
  const element = (
    <h1 className="heading" tabIndex={index}>
      <span className="text">Now {new Date().toLocaleTimeString()}</span>
    </h1>
  );
  ReactDOM.render(element, document.getElementById("root"));
},1000);

export { JsxAndRenderingElements };
