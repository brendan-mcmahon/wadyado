import { useEffect, useState } from "react";
import setTime from "./setTime";
import "./App.scss";
import { getLogs, addLog } from "./api.service.js";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getLogs((res) => console.log(res));
  }, []);

  useEffect(() => {
    setInterval(() => setTime((x) => setCount(x)), 1000);
    return () => clearInterval();
  }, [count]);

  const style = {
    backgroundImage: `conic-gradient(#5cdb95 ${count}deg, #8ee4af ${count}deg)`,
  };

  const saveOnEnter = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      addLog(e.target.value, (res) => console.log(res));
    }
  };

  return (
    <div className="App" style={style}>
      <header className="App-header">
        What have you been doing for the last 10 minutes?
      </header>
      <input type="text" onKeyDown={saveOnEnter} />
    </div>
  );
}

export default App;
