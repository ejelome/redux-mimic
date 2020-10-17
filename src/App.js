import React from "react";

import Counter from "./components/Counter";
import Title from "./components/Title";
import { CounterProvider } from "./context";

const App = () => (
  <CounterProvider>
    <Title />
    <Counter />
  </CounterProvider>
);

export default App;
