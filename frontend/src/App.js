import './App.css';
import './components/Header.js'
import {Header} from "./components/Header";
import {StatusField} from "./components/StatusField";
import {getTodoService, postTodoService} from "./service/TodoService";
import {useEffect, useState} from "react";



function App() {

    const [description, setDescription] = useState('')

    const createTodo = event => {
        const description = event.target.value
        setDescription(description)
    }


    useEffect(getTodoService, [])
    useEffect(postTodoService(description), [createTodo])


    return (
        <div className="TodoApp">
            <Header className="Header"/>

            <input type="text" onChange={createTodo}/>

            <StatusField className= "StatusField"/>
        </div>
    );
}

export default App;

