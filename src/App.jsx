import { useState } from "react";
import "./App.css";
import SwitchToggle from "../SwitchToggle";
import Products from "./Products";

function App() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleToggle = (newValue) => {
    setIsSwitchOn(newValue);
  };

  return (
    <main>
      <SwitchToggle />
      <Products />
    </main>
  );
}

export default App;
