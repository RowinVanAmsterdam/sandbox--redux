import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { toggleComplete } from "../redux/todoSlice";

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

  return (
    <li className="todo__list-item" key={props.title}>
      <input type="checkbox" checked={props.completed} onChange={handleChange} />
      <p className={props.completed ? "todo__list-item--completed" : ""}>{props.title}</p>
    </li>
  );
};

const Todolist = () => {
  const todos = useSelector((state: RootStateOrAny) => state.todos);

  return (
    <div className="todo">
      <h1 className="todo__title">To Do</h1>
      <ul className="todo__list">{todos.map((todo: ToDoItemProps) => ToDoItem(todo))}</ul>
    </div>
  );
};

export default Todolist;
