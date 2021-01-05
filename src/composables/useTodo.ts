import { ref } from "vue";
import { nanoid } from "nanoid";

interface Todo {
  id: string;
  text: string;
  complete: boolean;
}

const initialState = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos") || "[]")
  : [];

const todos = ref(initialState);
const filteredTodos = ref([]);
const newTodo = ref("");

function updateStorage() {
  localStorage.setItem("todos", JSON.stringify(todos.value));
}

function addTodo() {
  const todoText = newTodo.value.trim();

  const data = {
    id: nanoid(),
    complete: false,
    text: todoText
  };

  todos.value.push(data);

  newTodo.value = "";

  updateStorage();
}

function toggleTodo(id: string) {
  const toToggle = todos.value.find((t: Todo) => t.id === id);
  toToggle.complete = !toToggle.complete;

  updateStorage();
}

function removeTodo(id: string) {
  const newTodos = todos.value.filter((t: Todo) => t.id !== id);
  todos.value = newTodos;

  updateStorage();
}

function filter(type: string) {
  switch (type) {
    case "active":
      return (filteredTodos.value = todos.value.filter(
        (todo: Todo) => !todo.complete
      ));
    case "completed":
      return (filteredTodos.value = todos.value.filter(
        (todo: Todo) => todo.complete
      ));
    default:
      return (filteredTodos.value = todos.value);
  }
}

function clearTodos() {
  todos.value = todos.value.filter((t: Todo) => !t.complete && t);

  filter("all");

  updateStorage();
}

const useTodo = () => {
  return {
    newTodo,
    todos,
    filteredTodos,
    addTodo,
    toggleTodo,
    removeTodo,
    filter,
    clearTodos,
    updateStorage
  };
};

export default useTodo;
