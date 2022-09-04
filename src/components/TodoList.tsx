import React, {useCallback, useEffect, useMemo, useState} from "react";

import useInput from "../hooks/useInput";
import useOnEnter from "../hooks/useOnEnter";
import {Todo} from "../types";
import TodoItemContainer from "../containers/TodoItemContainer";

interface TodoListProps {
  todos: Todo[],
  addTodo: (id: string) => void,
  deleteTodo: (id: string) => void,
  setDone: (id: string, b: boolean) => void,
}

export default function TodoList({todos, addTodo, deleteTodo, setDone} : TodoListProps) {

  const [filter, setFilter] = useState('all')

   useEffect(() => {
       const urlSearchParams = new URLSearchParams(window.location.search);
       const params = Object.fromEntries(urlSearchParams.entries());
       if(params.prioritize) setPrioritize(!!params.prioritize)
       if(params.add) addTodo(params.add);
   }, []);

  // @ts-ignore
  const left = useMemo(() => todos.reduce((p: string | number, c: Todo) => p + (c.done ? 0 : 1), 0), [
    todos
  ]);

  const visibleTodos = useMemo(
    () => {
      console.log(filter)
      return todos;
    },
    [todos, filter]
  );

  const anyDone = useMemo(() => todos.some(i => i.done), [todos]);
  const allSelected = useMemo(() => visibleTodos.every(i => i.done), [
    visibleTodos
  ]);

  const onToggleAll = useCallback(
    () => {
      visibleTodos.forEach(i => setDone(i.id, !allSelected));
    },
    [visibleTodos, allSelected]
  );

    const [prioritize, setPrioritize] = useState(false)

  const onClearCompleted = useCallback(
    () => {
      todos.forEach(i => {
        if (i.done) {
          deleteTodo(i.id);
        }
      });
    },
    [todos]
  );
    const { newValue, onNewValueChange, setNewValue } = useInput();

  const onAddTodo = useOnEnter(
    () => {
      if (newValue) {
        addTodo(prioritize ? `<b style="color: red">${newValue}</b>` : newValue);
        setNewValue("");
      }
    },
    [newValue]
  );
    function onPrioritize() {
        setPrioritize(!prioritize);
    }

    return (
    <React.Fragment>
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onKeyPress={onAddTodo}
          value={newValue}
          onChange={onNewValueChange}
        />
      </header>

      <section className="main">
        <input
          id="toggle-all"
          type="checkbox"
          className="toggle-all"
          checked={prioritize}
          onChange={onPrioritize}
        />
        <label htmlFor="toggle-all" />
        <ul className="todo-list">
          {visibleTodos.map(todo => (
            <TodoItemContainer key={todo.id} todo={todo} />
          ))}
        </ul>
      </section>

      <footer className="footer">
        <span className="todo-count">
          <strong>{left}</strong> items left
        </span>

        {anyDone && (
          <button className="clear-completed" onClick={onClearCompleted}>
            Clear completed
          </button>
        )}
      </footer>
    </React.Fragment>
  );
}
