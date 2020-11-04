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
├── components/
│   └── <component>/
│       ├── actions.js
│       ├── actionTypes.js
│       ├── <Component>.js
│       ├── initialState.js
│       └── reducer.js
└── context.js
```

---

## How to use

<details>
  <summary>1.1. Define initial state</summary>

```diff
--- src/components/hello-world/initialState.js
+++ src/components/hello-world/initialState.js
@@ -0,0 +1,3 @@
+const initialState = { title: "hello, world" };
+
+export default initialState;

```

[&#9654; View code &rarr;](https://codesandbox.io/s/redux-mimic-jjbxp?file=/src/components/hello-world/initialState.js)

</details>

<details>
  <summary>1.2. Define action type</summary>

```diff
--- src/components/hello-world/actionTypes.js
+++ src/components/hello-world/actionTypes.js
@@ -0,0 +1 @@
+export const SET_TITLE = "SET_TITLE";
```

[&#9654; View code &rarr;](https://codesandbox.io/s/redux-mimic-jjbxp?file=/src/components/hello-world/actionTypes.js)

</details>

<details>
  <summary>1.3. Define action</summary>

```diff
--- src/components/hello-world/actions.js
+++ src/components/hello-world/actions.js
@@ -0,0 +1,6 @@
+import { SET_TITLE } from "./actionTypes";
+
+export const setTitle = (newTitle) => ({
+  type: SET_TITLE,
+  payload: { title: newTitle },
+});
```

[&#9654; View code &rarr;](https://codesandbox.io/s/redux-mimic-jjbxp?file=/src/components/hello-world/actions.js)

</details>

<details>
  <summary>1.4. Define reducer</summary>

```diff
--- src/components/hello-world/reducer.js
+++ src/components/hello-world/reducer.js
@@ -0,0 +1,14 @@
+import { SET_TITLE } from "./actionTypes";
+
+const reducer = (state, { type, payload }) => {
+  switch (type) {
+    case SET_TITLE:
+      const title = payload.title;
+
+      return { ...state, title };
+    default:
+      return state;
+  }
+};
+
+export default reducer;
```

[&#9654; View code &rarr;](https://codesandbox.io/s/redux-mimic-jjbxp?file=/src/components/hello-world/reducer.js)

</details>

<details>
  <summary>1.5. Define utils</summary>

```diff
--- src/utils.js
+++ src/utils.js
@@ -0,0 +1,11 @@
+export const init = (initialArg) => initialArg;
+
+export const combineReducers = (reducers) => (state, action) => {
+  const newState = {};
+
+  Object.keys(reducers).forEach((key) => {
+    newState[key] = reducers[key](state[key], action);
+  });
+
+  return newState;
+};
```

[&#9654; View code &rarr;](https://codesandbox.io/s/redux-mimic-jjbxp?file=/src/utils.js)

</details>

<details>
  <summary>1.6. Register to context</summary>

```diff
--- src/context.js
+++ src/context.js
@@ -0,0 +1,19 @@
+import React, { createContext, useReducer } from "react";
+
+import helloWorldState from "./components/hello-world/initialState";
+import helloWorldReducer from "./components/hello-world/reducer";
+import { combineReducers, init } from "./utils";
+
+const initialStates = { helloWorld: helloWorldState };
+
+const Context = createContext(initialStates);
+
+const Provider = ({ children }) => {
+  const reducers = combineReducers({ helloWorld: helloWorldReducer });
+  const [state, dispatch] = useReducer(reducers, initialStates, init);
+  const values = { state, dispatch };
+
+  return <Context.Provider value={values}>{children}</Context.Provider>;
+};
+
+export { Context, Provider };
```

[&#9654; View code &rarr;](https://codesandbox.io/s/redux-mimic-jjbxp?file=/src/context.js)

</details>

<details>
  <summary>1.7. Access state</summary>

```diff
--- src/components/hello-world/HelloWorld.js
+++ src/components/hello-world/HelloWorld.js
@@ -0,0 +1,24 @@
+import React, { useContext } from "react";
+
+import { Context } from "../../context";
+import { setTitle } from "./actions";
+
+const HelloWorld = () => {
+  const {
+    state: {
+      helloWorld: { title },
+    },
+    dispatch,
+  } = useContext(Context);
+
+  const handleChange = ({ target: { value } }) => dispatch(setTitle(value));
+
+  return (
+    <>
+      <input value={title} onChange={handleChange} />
+      <h1>{title}</h1>
+    </>
+  );
+};
+
+export default HelloWorld;
```

[&#9654; View code &rarr;](https://codesandbox.io/s/redux-mimic-jjbxp?file=/src/components/hello-world/HelloWorld.js)

</details>

<details>
  <summary>1.8. Subscribe component</summary>

```diff
--- src/App.js
+++ src/App.js
@@ -0,0 +1,12 @@
+import React from "react";
+
+import HelloWorld from "./components/hello-world/HelloWorld";
+import { Provider } from "./context";
+
+const App = () => (
+    <Provider>
+    <HelloWorld />
+    </Provider>
+);
+
+export default App;
```

[&#9654; View code &rarr;](https://codesandbox.io/s/redux-mimic-jjbxp?file=/src/App.js)

</details>

---

## License

`redux-mimic` is licensed under [MIT](./LICENSE).
