import './App.css';
import AddTodoForm from './components/AddTodoForm';
import Todolist from './components/TodoList';

function App() {
  return (
    <div className="app">
      <section>
      <Todolist />
      <AddTodoForm />
      </section>
    </div>
  );
}

export default App;
