[![Netlify Status](https://api.netlify.com/api/v1/badges/b4804ac9-fbc3-4707-83f8-4ae2e522c328/deploy-status)](https://app.netlify.com/sites/ejelome-redux-mimic/deploys)

# redux-mimic

Mimic [Redux](https://redux.js.org) with [React](https://reactjs.org) [Hooks](https://reactjs.org/docs/hooks-intro.html)

---

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->

**Table of Contents**

- [redux-mimic](#redux-mimic)
  - [Demo](#demo)
  - [Setup](#setup)
  - [Usage](#usage)
  - [Code structure](#code-structure)
  - [How to use](#how-to-use)
    - [1. Reading](#1-reading)
      - [1.1. Define state](#11-define-state)
      - [1.2. Access the state](#12-access-the-state)
      - [1.3. Subscribe component](#13-subscribe-component)
  - [License](#license)

<!-- markdown-toc end -->

---

## Demo

See <https://ejelome-redux-mimic.netlify.app>.

---

## Setup

| Command                                            | Description          |
| :------------------------------------------------- | :------------------- |
| `npm [install`&vert;`isntall`&vert;`add`&vert;`i]` | Install dependencies |

---

## Usage

| Command                          | Description       |
| :------------------------------- | :---------------- |
| `npm start`                      | Start dev server  |
| `npm [test`&vert;`tst`&vert;`t]` | Start test runner |
| `npm run build`                  | Build app bundle  |

---

## Code structure

```shell
src/
├── App.js
├── components
│   └── <Component>.js
├── initialState.js
├── actionTypes.js
├── actions.js
├── reducer.js
└── context.js
```

## How to use

### 1. Reading

#### 1.1. Define state

> _Add the new state._

```javascript
// file: src/initialState.js
const initialState = {
  title: "My Counter",
};
```

#### 1.2. Access the state

> _Access the state from context._

```javascript
// file: src/components/Title.js
import React, { useContext } from "react";

import { CounterContext } from "../context";

const Title = () => {
  const { state } = useContext(CounterContext);
  const { title } = state;
  return <h1>{title}</h1>;
};

export default Title;
```

#### 1.3. Subscribe component

> _Place its component under the Provider to get access to context._

```javascript
// file: src/App.js
import React from "react";

import Title from "./components/Title";

import { CounterProvider } from "./context";

const App = () => (
  <CounterProvider>
    <Title />
  </CounterProvider>
);

export default App;
```

## License

`redux-mimic` is licensed under [MIT](./LICENSE).
