import './App.css';
import './components/Header.js'
import {Header} from "./components/Header";
import {StatusField} from "./components/StatusField";
import {getTodoService, postTodoService, putTodoService} from "./service/TodoService";
import {useEffect, useState} from "react";



function App() {

    const [description, setDescription] = useState('')
    const [todoID , setTodoID] = useState('')

    const handleDescriptionChange = event => {
        const description = event.target.value
        setDescription(description)
    }


    useEffect(getTodoService, [])


    function createToDo() {
       postTodoService(description)
    }

    function changeTodoStatus() {
        const id = getTodoService.data.id
        setTodoID(id)
        changeTodoStatus(todoID)
    }





    return (
        <div className="TodoApp">
            <Header className="Header"/>


            <input type="text" onChange={handleDescriptionChange}/>
            <button onClick={createToDo}>make</button>

            <button onClick={changeTodoStatus}>change</button>
            <StatusField className= "StatusField"/>
        </div>
    );
}

export default App;

