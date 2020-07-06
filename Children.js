import React, { memo } from "react";

const Children = memo(({ reset }) => {
  console.log("re-render child component.")
  return (
    <div>
      <p>child component which resets count</p>
      <button onClick={reset}>Reset Count</button>
    </div>
  );
});

export default Children;