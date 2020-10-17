import React from "react";

import Counter from "./components/Counter";
import { CounterProvider } from "./context";

const App = () => (
  <CounterProvider>
    <Counter />
  </CounterProvider>
);

export default App;
