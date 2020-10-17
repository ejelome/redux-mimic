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
  - [Structure](#structure)
  - [How to use](#how-to-use)
    - [1. Reading](#1-reading)
      - [1.1. Define state](#11-define-state)
      - [1.2. Access the state](#12-access-the-state)
      - [1.3. Subscribe component](#13-subscribe-component)
    - [2. Updating](#2-updating)
      - [2.1. Define an action type](#21-define-an-action-type)
      - [2.2. Define an action](#22-define-an-action)
      - [2.3. Define a reducer](#23-define-a-reducer)
      - [2.4. Call from dispatch](#24-call-from-dispatch)
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

## Structure

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

import { Context } from "../context";

const Title = () => {
  const { state } = useContext(Context);
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

import { Provider } from "./context";

const App = () => (
  <Provider>
    <Title />
  </Provider>
);

export default App;
```

### 2. Updating

#### 2.1. Define an action type

> _Add a new action type for the action and the dispatcher._

```javascript
// file: src/actionTypes.js
export const SET_TITLE = "SET_TITLE";
```

#### 2.2. Define an action

> _Add a corresponding action for this type._

```javascript
// file: src/actions.js
import { SET_TITLE } from "./actionTypes";

export const setTitle = (newTitle) => ({
  type: SET_TITLE,
  payload: { title: newTitle },
});
```

#### 2.3. Define a reducer

> _Add a corresponding reducer for this type._

```javascript
// file: src/reducer.js
import { SET_TITLE } from "./actionTypes";

const reducer = (state, { payload, type }) => {
  switch (type) {
    case SET_TITLE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default reducer;
```

#### 2.4. Call from dispatch

> _Call dispatch with this type and payload._

```javascript
// file: src/components/Title.js
import React, { useContext } from "react";

import { Context } from "../context";
import { setTitle } from "../actions";

const Title = () => {
  const { state, dispatch } = useContext(Context);
  const { title } = state;

  const handleChange = ({ target: { value } }) => dispatch(setTitle(value));

  return (
    <>
      <input onChange={handleChange} />
      <h1>{title}</h1>
    </>
  );
};

export default Title;
```

## License

`redux-mimic` is licensed under [MIT](./LICENSE).
