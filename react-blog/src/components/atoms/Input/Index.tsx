import React, { forwardRef } from "react";

import "./index.scss";

export interface InputProps {
  inputClassName: "input-primary";
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, InputProps>((props, ref) => {
  const {inputClassName, onKeyDown} = props

  return (
    <div className="input-wrapper">
      <input type="text" className={inputClassName} ref={ref} onKeyDown={onKeyDown}/>
    </div>
  )
})