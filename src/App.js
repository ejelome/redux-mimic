import React from "react";

import Counter from "./components/Counter";
import Title from "./components/Title";
import { Provider } from "./context";

const App = () => (
  <Provider>
    <Title />
    <Counter />
  </Provider>
);

export default App;
