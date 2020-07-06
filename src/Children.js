import React, { memo } from "react";


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