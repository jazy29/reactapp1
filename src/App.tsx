import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";import ListGroup from "./components/ListGroup";
PerformanceEntry



function App() {

const items = [ "Dirk", "Rose Dagger","Blue Dagger", "Silver Dagger", "Gold Dagger" ]
const Onclick = ()=>{}
  return (
    <ListGroup items={items} heading="Daggers" onSelectItem={Onclick} ></ListGroup>
  );
}

export default App;
