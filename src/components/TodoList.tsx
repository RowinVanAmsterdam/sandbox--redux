import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getTodosFromApi, removeTodo, toggleComplete } from "../redux/todoSlice";

type ToDoItemProps = {
  id: number;
  title: string;
  completed: boolean;
};


const ToDoItem = (props: ToDoItemProps) => {
  const dispatch = useDispatch();
  
  const handleChange = () => {
    dispatch(toggleComplete({ id: props.id, completed: !props.completed}))
  }

  const handleOnclick = () => {
    dispatch(removeTodo({ id: props.id }))
  }

  return (
    <li className="todo__list-item" key={props.title}>
      <input type="checkbox" checked={props.completed} onChange={handleChange} />
      <p className={props.completed ? "todo__list-item--completed" : ""}>{props.title}</p>
      <button onClick={handleOnclick}>Remove</button>
    </li>
  );
};

const Todolist = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootStateOrAny) => state.todos);
  const getCompletedTasks = todos.filter((item: ToDoItemProps) => item.completed);
  const totalCompletedTasks = getCompletedTasks.length;

  useEffect(() => {
		dispatch(getTodosFromApi());
	}, [dispatch]);

  return (
    <div className="todo">
      <h1 className="todo__title">To Do</h1>
      <p>Completed items: {totalCompletedTasks}</p>
      <ul className="todo__list">{todos.map((todo: ToDoItemProps) => ToDoItem(todo))}</ul>
    </div>
  );
};

export default Todolist;
