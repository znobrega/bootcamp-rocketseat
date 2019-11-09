## all yarn commands

>yarn add prettier eslint eslint-config-prettier eslint-plugin-prettier babel-eslint -D

>yarn add react-router-dom styled-components react-icons axios prop-types

>yarn eslint --init

## Polished

lib to work with colors

```css
  &:hover {
    background: ${darker(0.03, "#7159c1")}
  }
```

# JSON SERVER

>yarn global add json-server

json-server server.json -p 3333 -w

## Redux

>yarn add redux react-redux

- Conecta a home com o redux através do provider
- Dispath server para disparar as actions do redux
- actions fazem alteração no estado, é necessário passar um type e o dado
- todos os reducers escutam essas actions
- redux atualiza todos os componentes que precisam da informacão

## Flux

- Action
- Reducer
