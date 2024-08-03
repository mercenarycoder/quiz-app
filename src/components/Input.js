import React from "react";

const Input = ({label, type, register,required, error}) => (
    <div>
        <label>{label}</label>
        <input type={type} {...register(label,{required})} />
        {error && <span>{error}</span>}
    </div>
);

export default Input;