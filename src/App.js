import Title from "./components/hello-world/HelloWorld";
import { Context, Provider } from "./context";

const App = () => (
  <Provider>
    <Title />
  </Provider>
);

export default App;
