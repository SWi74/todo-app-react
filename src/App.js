import React from 'react';
import './App.css';
import Header  from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import TodosCount from "./components/TodosCount";

class App extends React.Component {
  constructor(){
    super()

    this.appName = 'Simple Todo App ';

    this.state = {
      "todos" :[
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": true
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        }
      ]
    }

    this.addTodo = this.addTodo.bind(this);
  }


  addTodo(todo){
    console.log(todo)
    //HW : add todo object to this.state.todos
  }

  render(){
    return (
      <div className="page">
        <Header appName={this.appName}/>
        <main className="todoApp">
          <AddTodo addTodo={this.addTodo}/>
          <TodoList todos={this.state.todos} />
          <TodosCount count={this.state.todos.length}/>
        </main>
      </div>
    )
  }
}

export default App;
