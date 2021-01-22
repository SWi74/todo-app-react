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

    // addTodo(todoTitle){
    //     console.log(todoTitle);
    //     const todos = this.state.todos;
    
    //     // this.state.todos[1].id = 999;
    
    //     const id = todos.length+1; // todo: make it propper
   
    //     const newTodos = [...todos,{
    //             "userId": 1,
    //             "id": id,
    //             "title": todoTitle,
    //             "completed": false
    //         }
    //     ]
    
    //     this.setState( {todos:newTodos} );
    // }
    
    componentDidMount() {

        // HW:  use fetch API to set initial state, instead of the hardcoded values above
        // You can use the "https://jsonplaceholder.typicode.com/todos" for server endpoint
        // Reference: https://reactjs.org/docs/faq-ajax.html

        fetch("http://localhost:3000/todos")
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
                <h1>{this.state.todos.t}</h1>
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
    