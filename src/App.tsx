import { Component } from "react"
import Message from "./Message"
function app() {
  const name = 'Siphai';
  if (name)
     return <h1>Hello, it's {name}</h1>;
  return <h1>Hello What's Up?</h1>;
}
export default app;