import React, { useState, forwardRef, useImperativeHandle } from "react";

const Button = forwardRef((props,ref) => {
  const [toogle, settoogle] = useState(false);
  useImperativeHandle(ref, ()=>({
    alterToggle(){
        settoogle(!toogle);
    }
  }));
  return (
    <>
      <button
        onClick={() => {
          settoogle(!toogle);
        }}
      >
        {props.children}
      </button>
      {toogle && <span>Toggle</span>}
    </>
  );
});

export default Button;
