import { forwardRef } from "react";

const Input = forwardRef(function Input({ labelText, inputType }, ref) {
  return(
    <div id="InputField">
      <label>{labelText}</label>
      {inputType === "description" && <textarea ref={ref} />}
      {inputType === "name" && <input ref={ref}/>}
      {inputType === "date" &&  <input ref={ref} type="date"/>}
    </div>
  )
})

export default Input;