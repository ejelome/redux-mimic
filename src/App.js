import React from "react";

import HelloWorld from "./components/hello-world/HelloWorld";
import { Provider } from "./context";

const App = () => (
  <Provider>
    <HelloWorld />
  </Provider>
);

export default App;
