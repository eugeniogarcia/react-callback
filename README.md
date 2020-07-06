# Descripcion

Tenemos dos componentes, `Children` y `Parent`. `Children` puede cambiar el estado de `Parent` usando el método reset:

```js
//Usa Memo. Solo hace el rerender si "reset" o "mensaje" han cambiado
const Children = memo(({ reset , mensaje}) => {
  console.log("re-render child " + mensaje + " component.")
  return (
    <div>
      <p>El hijo resetea el Contador ({mensaje})</p>
      <button onClick={reset}>Resetea el Contador</button>
    </div>
  );
});

export default Children;
```

Notese que hemos usado `React.memo`, de modo que solo se volvera ha hacer el re-render del `Children` cuando alguna de sus props cambia. Mensaje es una constante, pero render es una funcion. Al cambiar el estado el `Parent` se re-renderiza. Si alguna de estas dos propiedades cambia, el `Children` cambiara.

Vemaos el `Parent`:

```js
import React, { useState, useCallback } from 'react';
import Children from './Children';

const Parent = () => {
    const [count, setCount] = useState(0);
    console.log("re-render parent component");

    const resetCount_conCB = useCallback(() => {
        setCount(0);
    }, [setCount]);

    const resetCount = () => {
        setCount(0);
    };

    return (
        <main>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count => (count + 1))}>Incrementa</button>
            <Children reset={resetCount_conCB} mensaje="Con CB"/>
            <Children reset={resetCount} mensaje="Sin CB"/>
        </main>
    )
}

export default Parent;
```

Cuando se re-renderiza el padre, la funcion `resetCount` se recrea. La funcion `resetCount_conCB` no se recrea, porque con callback hacemos que solo cuando el método `setCount` cambie, y este no cambia entre re-renders de `Parent`:

```js
    const resetCount_conCB = useCallback(() => {
        setCount(0);
    }, [setCount]);

    const resetCount = () => {
        setCount(0);
    };
```