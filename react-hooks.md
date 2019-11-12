# HOOKS

```
yarn add eslint-plugin-react-hooks -D (?)
plugin : 'react-hooks'
rules :  'react-hooks/rules-of-hooks': 'error', react-hooks/exhaustive-deps': 'warn', 
```

```js
import React, {useState, useEffect, useMemo, useCallback} from 'react'
```

## useState
- retorna 2 variáveis

```js
const [techs, setTechs] = useState([])
const [newTech, setNewTech] = useState('')
```


## useEffect
- Recebe uma função no primeiro parametro
- Segundo parâmetro recebe um arrray de depedencias
<p>Array vazio significa que ele funciona com o componentDidMount</p>

```js
useEffect(() => {

	const storageTechs = localStorage.getItem('techs')
	if (storageTechs) 
		setTechs(JSON.parse(storageTechs))	

} [])
```


-Passando dependência no segundo parametro, funciona como um 'listener'

```js
useEffect(() => {
	localStorage.setItem('techs', JSON.stringify(techs))
}, 	
[techs])
```

## useMemo

- retorna 1 valor
- Quando precisar fazer calculo dentro do render, isso otimiza. E muito.	

```js
const techSIze = useMemo(() => tech.length, [techs])
```


## useCallback

- retorna uma funcão
- Faz um cache dessa função, ela só será recriada caso as dependências mudem

```js
const handleNewTech = useCallback(() => {
	setTech([...techs, newTech])
	setNewTech('')

}, [techs, newTech])
```

## REDUX + REDUX = useSelector()

-Não precisa do connect com mapStateToProps ou mapDispatchToProps

```js
import { useSelector } from 'react-redux'

// Header
const cartSIze = useSelector(state => state.cart.length})

// Home
const amount = useSeletor(state => (state.cart.reduce((amount, product) => {
	amount[product.id] = product.amount

	return amount
	},
	{}
     )
  )
)
```

## REDUX useDispatch

```js
import {useDispatch, useSelector} from 'react-redux'

const dispatch = useDispath()

dispatch(CartActions.addToCartRequest(id))

```
