## all yarn commands
>yarn add eslint
>yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D

>yarn add react-router-dom styled-components react-icons axios prop-types

>yarn eslint --init

## Configs

.editorconfig

```
root = true

[*]
end_of_line = lf
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

> yarn add eslint -D
yarn eslint --init

>yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D

```js
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',
  },
};


```

## Routes

>yarn add react-router-dom

```js
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/Repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}

```

## Styled components

>yarn add styled-components

- Se tiver encademento de conteudo, bem melhor criar uma tag com styled

```js
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 45px;
  color: ${props => (props.error ? 'red' : '#7149c1')};
  font-family: Arial, Helvetica, sans-serif;

  small {
    font-size: 22px;
    color: #333;
  }
`;

import React from 'react';
import { Title } from './styles';

export default function Main() {
  return (
    <Title error={false}>
      Hell
      <small>Yep</small>
    </Title>
  );
}


```

```js
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing:border-box;
  }

  #root, body, html {
    min-height: 100%;
  }

  body {
    background: #7159c1;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

```

## Icons
>yarn add react-icons

## Axios

>yarn add axios

```js
  import axios from 'axios';

  axios.create({
    baseURL: 'https://api.github.com'
  })
```

## Proptypes

>yarn add prop-types
