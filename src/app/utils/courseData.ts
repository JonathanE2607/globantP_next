
interface Course {
  id: string
  title: string
  content: string
  testFunction: string
  correctFunction: string
}

const courseData: Course[] = [
  {
    id: "what-is-react",
    title: "rules of hooks test",
    content: "Improve this code and works the component:",
    testFunction: `//Hello what is react`,
    correctFunction: `//modify this function does not break the rules of hooks

import { useState, useEffect } from "react";
function InvalidHookUsage({ condition }) {
  const [count, setCount] = useState(0);
  if (condition) {
    useEffect(() => {
      console.log("Efecto activado");
    }, [condition]);
  }
  return (
    <>
    </>
  );
}

export default InvalidHookUsage;`,
  },
  {
    id: "first-component",
    title: "Test",
    content: "Improve this code with works the component:",
    testFunction: `//write what is missing for the return of this component

    const Hello = () => {
  return <h1>Hello, React!</h1>;
};`,
    correctFunction: `//write what is missing for the return of this component

    const Hello = () => {
  return <h1>Hello, React!</h1>;
};

export default Hello;`,
  },
  {
    id: "rules-hooks",
    title: "Test",
    content: "Improve this code with works the component:",
    testFunction: `//modify this function does not break the rules of hooks

import { useState, useEffect } from "react";
function InvalidHookUsage({ condition }) {
  if (condition) {
    const [count, setCount] = useState(0); //change this line to not break the rules of hooks
    useEffect(() => {
      console.log("Efecto activado");
    }, []);
  }
  return (
    <>
    </>
  );
}

export default InvalidHookUsage;`,
    correctFunction: `//modify this function does not break the rules of hooks

import { useState, useEffect } from "react";
function InvalidHookUsage({ condition }) {
  const [count, setCount] = useState(0);
  if (condition) {
    useEffect(() => {
      console.log("Efecto activado");
    }, [condition]);
  }
  return (
    <>
    </>
  );
}

export default InvalidHookUsage;`,
  }
];


export { courseData }