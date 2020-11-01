import React from 'react';
import {NavLink} from "react-router-dom";

export interface IProps {
  iAI : (title: string) => void;
}

function InputAdd({iAI} : IProps) {

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      iAI(e.currentTarget.value);
      e.currentTarget.value = "";
    }
  }

  return (
    <>
      <input className="todo__input" onKeyDown={onKeyDown} placeholder="Добавьте задачу" type="text"/>
    </>
  );
}

export default InputAdd;
