import React from 'react';

import Header  from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import TodosCount from "./components/TodosCount";

import Theme from "./Theme"
import GlobalStyle from "./GlobalStyle"
import { StyledPage, StyledMain, ToDoPanel } from './components/styled';

class App extends React.Component {
    constructor(){
        super()
        
        this.appName = 'Simple Todo App ';
        
        this.state = {
            "todos" :[
                {
                    "userId": 1,
                    "id": 1,
                    "title": "Delectus aut autem",
                    "completed": true
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "Quis ut nam facilis et officia qui",
                    "completed": false
                }
            ]
        }
        
        this.addTodo = this.addTodo.bind(this);
    }
    
    
    addTodo(todoTitle) {
        console.log(todoTitle);
        
        const todos = this.state.todos;

        // fix id generation
        const id = todos.length+1; 

        const newTodos = [...todos, {
            "userId": 1,
            "id": id,
            "title": todoTitle,
            "completed": false
        }]

        this.setState( { todos:newTodos } )

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
    