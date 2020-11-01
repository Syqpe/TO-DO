import React, {useState, useEffect, useLayoutEffect} from 'react';
import {NavLink} from "react-router-dom";

import {ITodos} from "./../types/ITodos";

import './Todo.scss';


import SearchBar from "../components/SearchBar";
import Input from "../components/InputAdd";
import TodosList from "./../components/TodosList";


function Todo() {

  const [todos, setTodos] = useState<ITodos[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || '[]') as ITodos[];
    setTodos(saved);
  }, [] );

  useEffect(() => {
    localStorage.setItem("todos", 
      JSON.stringify(todos)
    )
  }, [todos])

  const inputAddItem = (title: string) => {
    setTodos(prev => [
      {
        title: title,
        id: "" + Date.now(),
        completed: false,
        time: Date.now(),
        },
        ...prev
    ])
  }

  const deleteTodo = (id: string | null) => {
    setTodos(prev => prev.filter(pr => pr.id !== id));
  }

  const changeCheck = (id: string | null) => {
    setTodos(prev => prev.map(pr => {
      if ((pr.id)?.indexOf(id || "") != -1) {
        return {
          title : pr.title,
          id : pr.id,
          completed : !pr.completed,
          time: pr.time,
        }
      } 
      return pr;
    }));
  }

  const onChangeChB1 = (e: React.ChangeEvent) => {
    setInp1(!inp1);
  }

  const onChangeChB2 = (e: React.ChangeEvent) => {
    setInp2(!inp2);
  }

  const [inp1, setInp1] = useState<boolean>(false);
  const [inp2, setInp2] = useState<boolean>(false);

  const onSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      setStodo(e.currentTarget.value);
    }
  }
  const [sTodo, setStodo] = useState("");


  const onSortTime = (e: React.ChangeEvent) => {
    setSortt(!sortT);
  }

  const [sortT, setSortt] = useState(false);

  return (
    <div className="todo">
      <div className="todo__container _container">
        <div className="todo__head">
          <SearchBar sortTop={sortT} onSortTime={onSortTime} onSearch={onSearch} onChangeChB1={onChangeChB1} active={inp1} onChangeChB2={onChangeChB2} comp={inp2}/>
        </div>
        <div className="todo__body">
          <Input iAI={inputAddItem}/>
          <TodosList sortTime={sortT} searchText={sTodo} active={inp1} comp={inp2} changeCheck={changeCheck} deleteTodo={deleteTodo} cloneTodos={todos} todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default Todo;
