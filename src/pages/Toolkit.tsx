import AddTodoForm from "../components/AddTodoForm";
import Todolist from "../components/TodoList";

const Toolkit = () => {
  return (
    <div className="app">
      <section>
        <Todolist />
        <AddTodoForm />
      </section>
    </div>
  );
};

export default Toolkit;
