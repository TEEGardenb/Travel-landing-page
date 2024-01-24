import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyRoutes from "./components/layouts/Routes/MyRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <main>
        <MyRoutes />
      </main>
    </div>
  );
}

export default App;
