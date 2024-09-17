/*
Aufgabe 1: Ein einfaches React-Komponenten-Rendering
Aufgabe: Erstelle eine einfache React-App, die eine Komponente namens WelcomeMessage enthält. 
Diese Komponente sollte eine einfache Nachricht "Willkommen zu meiner React-App!" anzeigen. 
Die Komponente muss in der Hauptkomponente der App gerendert werden.

*/

import { WelcomeMessage2 } from "./components/WelcomeMessage2"
import WelcomeMessage from "./components/WelcomeMessage"
import { useState } from "react"
import LoginControl from "./components/LoginControl"
import TextBox from "./components/TextBox"
import Todos from "./components/Todos"
import CounterWithoutState from "./components/CounterWithoutState"
//import React from "react"

function App() {
  const [count, setCount] = useState(15) // useState("Dimi") // useState(true)

  function handleAuf() {
    setCount(count + 1)
  }

  function handleAb() {
    setCount(count - 1)
  }
  // if count > 20 then show message1
  // or if count < 10 then show message2
  if (count > 20) {
    console.log("...")
  } else if (count < 10) {
    console.log("....")
  }
  // statement
  if (count > 20) {
    return "<p>Message 1: Dein Zähler ist zu hoch</p>"
  } else if (count < 10) {
    return "<p>Message 2: Deine Zähler is zu niedrig"
  }

  // expression -> ergibt immer einen value oder gibt einen value zurück
  // count > 20 ? "<p>Message 1: Dein Zähler ist zu hoch</p>" : ""
  // count < 10 ? "<p>Message 2: Dein Zähler ist zu nierig</p>" : ""


  return (
    <div>
      <div style={{ border: "1px solid red", marginBottom: "50px" }}>
        <CounterWithoutState />
      </div>
      <h1>Hallo Welt!</h1>
      <WelcomeMessage />
      <WelcomeMessage2 />
      <h1>{count}</h1>
      {/* das ist conditional rendering 👇 */}
      {count > 20 ? <p>Message 1: Dein Zähler ist zu hoch</p> : ""}
      {count < 10 ? <p>Message 2: Dein Zähler ist zu niedrig</p> : ""}
      {/* beide möglichkeiten sind okay wobei die hier ist eine convention in react 👇 */}
      {count > 20 && <p>Message 1: Dein Zähler ist zu hoch </p>}
      {count < 10 && <p>Message 2: Dein Zähler ist zu niedrig</p>}
      {/* das ist conditional rendering 👆 */}
      <button onClick={handleAuf}>Aufzählen</button>
      <button onClick={handleAb}>Abzählen</button>
      <div style={{ marginTop: "50px", border: "1px solid red" }}>
        <LoginControl />
      </div>
      <div style={{ marginTop: "50px", border: "1px solid green" }}>
        <TextBox />
      </div>
      <div style={{ marginTop: "50px", border: "1px solid orange" }}>
        <Todos />
      </div>
    </div>
  )
}

export default App
