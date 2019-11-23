## JEST
- yarn add jest -D
- yarn jest --init
- yarn add --dev @sucrase/jest-plugin
- yarn add -D @types/jest (intelisense do jest)
- yes node yes yes
- yarn add supertest -D

```js
// Se ocorre alguma falha, para os testes
bail: 1,
clearMocks: true,
// onde está o codigo em todas as pastas com todos atquivos js
collectCoverageForm:['src/app/**.*js'],
coverageDirectory: "__tests__/coverage",
coverageReporters: [
  "text",
  "lcov"
],
testEnviroment: node,
testMatch: [
  "**/__tests__/**/*.test.js"
],
tranform: {
  '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin'
},
//config para o mongodb
preset: '@shelf/jest-mongodb'
```

```js
nodemon.json

"execMap": [
  "js": "sucrase-node"
],
// nao restarta o servidor de desenvolvimento quando os testes mudarem
"ignore": [
  "__tests__"
]
```


´´´js

function soma(a,b) {return a + b}

test('if i call soma function with 4 and 5 it should return 9', () => {
  const result = soma(4,5);

  expect(result).toBe(9)
})

´´´

```js
import {} from 'jest';
import request from 'supertest';
import app from '../../src/app';
import truncate from '../util/truncate';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to register', async () => {
    const response = await request(app)
      .post('/register')
      .send({
        name: 'Carlos N',
        email: 'carlosnobrega@gmail.com',
        password: '123456'
      });

    expect(response.body).toHaveProperty('_id');
  });

  it('should not be able to register with duplicated email', async () => {
    await request(app)
      .post('/register')
      .send({
        name: 'Carlos N',
        email: 'carlosnobrega@gmail.com',
        password: '123456'
      });

    const response = await request(app)
      .post('/register')
      .send({
        name: 'Carlos N',
        email: 'carlosnobrega@gmail.com',
        password: '123456'
      });

    expect(response.status).toBe(400);
  });
});

```
