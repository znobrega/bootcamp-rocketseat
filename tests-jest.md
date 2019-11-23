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
collectCoverage: true,
// onde está o codigo em todas as pastas com todos atquivos js
collectCoverageForm:['src/app/**/.*js'],
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

## Util

- clear mongo database after each test
```
import mongoose from 'mongoose';

export default function truncate() {
  return Promise.all(
    Object.keys(mongoose.connection.collections).map((key) => mongoose.connection.collections[key].deleteMany())
  );
}
```

```js
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

    expect(response.body).toHaveProperty('email');
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

  it('shoul not be able to change password', async () => {
    await request(app)
      .post('/register')
      .send({
        name: 'Carlos N',
        email: 'carlosnobrega@gmail.com',
        password: '123456'
      });

    const response = await request(app)
      .post('/update')
      .send({
        name: 'Carlos N',
        email: 'carlosnobrega@gmail.com',
        password: '123'
      });

    expect(response.status).toBe(402);
  });
});

```
