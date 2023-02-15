//import logo from './logo.svg';
import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodos;
  if (localStorage.getItem("todos") === null) initTodos = [];
  else initTodos = JSON.parse(localStorage.getItem("todos"));

  const onDelete = (todo) => {
    console.log("onDelete Function called ,", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    //localStorage.setItem("todos", JSON.stringify(todos))
  };

  const onAdd = (title, desc) => {
    console.log("onAdd Function called ,", title, desc);
    let sNo = todos.length === 0 ? 1 : todos[todos.length - 1].sNo + 1;
    const myTodo = {
      sNo: sNo,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="Anant's Todos list" searchBar={false} />
        <Routes>
          <Route
            path="/"
            element={<>
              <AddTodo addTodo={onAdd}></AddTodo>
              <Todos todos={todos} onDelete={onDelete} />
            </>}
          ></Route>
          <Route
            path="/about"
            element={<About/>}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
