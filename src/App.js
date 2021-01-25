import React from 'react';

import Header  from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import TodosCount from "./components/TodosCount";

import Theme from "./Theme"
import GlobalStyle from "./GlobalStyle"
import { StyledPage, StyledMain, ToDoPanel } from './components/styled';

class App extends React.Component {
    constructor() {
        super()

        this.appName = 'Simple Todo App ';

        this.state = {
            todos: []
        }

        this.addTodo = this.addTodo.bind(this);
    }

    componentDidMount() {

        // fetch("http://localhost:3000/todos")
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => {
            this.setState({
                todos: [...data]
            })
        })
    }

    addTodo = (todoTitle) => {
        const todos = this.state.todos;
        const id = todos[todos.length-1].id+1;
        
    
        const newTodo = {
          "userId": 1,
          "id": id,
          "title": todoTitle,
          "completed": false
        }
    
        this.setState({"todos":[...this.state.todos,newTodo]});
      }
    
      removeTodo = (todoId)=>{
        const todos = this.state.todos.filter(todo=>todo.id !== todoId);
        // this.setState({"todos":todos});
        this.setState({todos}); // from ES6
      }
    
      toggleComplete = (todoId)=>{
        const todos = this.state.todos.map(
          todo=>todo.id===todoId ? {...todo,completed:!todo.completed} : {...todo}
        );
        this.setState({todos:todos});
      }


    render() {
        return (
            <Theme>
                <GlobalStyle />
                <StyledPage>
                    <StyledMain>
                        <Header appName={this.appName} />
                        <ToDoPanel>
                            <AddTodo addTodo={this.addTodo} />
                            <TodoList todos={this.state.todos} />
                            <TodosCount count={this.state.todos.length} />
                        </ToDoPanel>
                    </StyledMain>
                </StyledPage>
            </Theme>
        )
    }
}

export default App;
    