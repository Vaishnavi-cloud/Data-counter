import { useState } from "react";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  function handleRest() {
    setCount(0);
    setStep(1);
  }

  const date = new Date("oct 15 2023");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          //e.target.value is the event handler ensures that it performs correctly with the conditions as per mentioned
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step :{step}</span>
      </div>

      <div>
        <button onClick={() => setCount((e) => e - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(c) => setCount(Number(c.target.value))}
        />
        <button onClick={() => setCount((e) => e + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "today is"
            : count > 0
            ? `${count} days from today`
            : `${Math.abs(count)} days was ago`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleRest}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
export default App;
