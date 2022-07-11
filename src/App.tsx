import ProgressBar from "./components/progress-bar";
import Title from "./components/title";
import Controls from "./components/controls";
import { useState, useMemo } from "react";

const bars = [
  {
    field: "Initialisation du test technique",
    initialAdvancement: 50,
    initialColor: "#60ADE8",
  },
  {
    field: "Avancement de la phase de développement",
    initialAdvancement: 25,
    initialColor: "#7160E8",
  },
];

function App() {
  const [reset, setReset] = useState(false);
  const [incrBy5, setIncrBy5] = useState(false);
  const [incrBy10, setIncrBy10] = useState(false);

  const Bars = useMemo(
    () =>
      bars.map((b) => (
        <ProgressBar
          field={b.field}
          initialAdvancement={b.initialAdvancement}
          initialColor={b.initialColor}
          reset={reset}
          incrBy5={incrBy5}
          incrBy10={incrBy10}
          setReset={setReset}
          setIncrBy5={setIncrBy5}
          setIncrBy10={setIncrBy10}
        />
      )),
    [reset, incrBy5, incrBy10]
  );

  return (
    <div className="bg-[#242424] h-full flex flex-col items-center justify-between">
      <Title lastname="Carnos" firstname="Jonathan" date={new Date()} />
      <div>{Bars}</div>
      <Controls reset={setReset} incrBy5={setIncrBy5} incrBy10={setIncrBy10} /> 
    </div>
  );
}

export default App;
