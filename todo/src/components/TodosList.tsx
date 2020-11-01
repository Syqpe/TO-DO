import React, {useRef, useEffect} from 'react';

import {ITodos} from "./../types/ITodos";

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    custom?: string | null;
  }
}

export interface IProps {
  todos : ITodos[];
  deleteTodo: (num: string | null) => void;
  changeCheck: (num: string | null) => void;
  active: boolean;
  comp: boolean;
  searchText: string;
  sortTime: boolean;
  cloneTodos: ITodos[];
}

function chPr(prevProps: IProps, nextProps: IProps) : boolean{
  return prevProps.todos === nextProps.todos && prevProps.active === nextProps.active && prevProps.comp === nextProps.comp && prevProps.searchText === nextProps.searchText && prevProps.sortTime === nextProps.sortTime;
}

export default React.memo(function TodosList({todos, deleteTodo, changeCheck, active, comp, searchText, sortTime, cloneTodos} : IProps) {

  const onCl = (e: React.MouseEvent) => {
    func.current(e.currentTarget.getAttribute('custom'));
  }

  const onChangeCheck = (e: React.ChangeEvent) => {
    console.log(e.currentTarget.getAttribute('checked'));
   changeCheck(e.currentTarget.getAttribute('custom'));
  }

  let func = useRef<any>(null);
  func.current = deleteTodo;
  let ref = useRef<number>(0);
  ref.current++;

  if (sortTime == true) {
    todos.sort((a, b) => a.time - b.time);
  } 
  else {
    todos = cloneTodos.sort((a, b) => b.time - a.time);
  }

  return (
    <>
      <ul className="todo__ul">
        {todos.map(todo => {
          if (active == true && todo.completed == true) {
            return null;
          }
          if (comp == true && todo.completed == false) {
            return null;
          }
          if (searchText.length > 0 && todo.title.indexOf(searchText) === -1) {
            return null;
          }
          return (<li className={todo.completed == true ? "completed": ""} key={todo.id}>
            <input custom={todo.id} onChange={onChangeCheck} type="checkbox" checked={todo.completed}/>
            <span>{todo.title}</span>
            <button custom={todo.id} onClick={onCl}><span></span><span></span></button>
          </li>)
        })}
      </ul>
    </>
  );
}, chPr)