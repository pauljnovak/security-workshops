import React, { useCallback, useRef } from "react";
import useOnClickOutside from "use-onclickoutside";
import useOnEnter from "../hooks/useOnEnter";
import {Todo} from "../types";

interface TodoItemProps {
  todo: Todo,
  deleteTodo: (id: string) => void,
  setLabel: (id: string, value: string) => void,
  toggleDone: (id: string) => void,
}

export default function TodoItem({ todo, deleteTodo, setLabel, toggleDone } : TodoItemProps) {
  const onDelete = useCallback(() => deleteTodo(todo.id), [todo.id]);
  const onDone = useCallback(() => toggleDone(todo.id), [todo.id]);

  const finishedCallback = useCallback(
    () => {
      setLabel(todo.id, todo.label.trim());
    },
    [todo]
  );
  const ref = useRef<HTMLInputElement>();
  // @ts-ignore
  useOnClickOutside(ref, finishedCallback);


  return (
    <li
      className={`${todo.done ? "completed" : ""}`}
    >
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={todo.done}
          onChange={onDone}
          autoFocus={true}
        />
        <label
            dangerouslySetInnerHTML={{__html: todo.label}}
        />
        <button className="destroy" onClick={onDelete} />
      </div>
    </li>
  );
}
