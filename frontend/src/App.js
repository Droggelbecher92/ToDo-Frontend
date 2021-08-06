import './App.css';
import './components/Header.js'
import {Header} from "./components/Header";
import {StatusField} from "./components/StatusField";
import {getTodoService, postTodoService} from "./service/TodoService";
import {useEffect, useState} from "react";



function App() {

    const [description, setDescription] = useState('')

    const handleDescriptionChange = event => {
        const description = event.target.value
        setDescription(description)
    }


    useEffect(getTodoService, [])


    function createToDo() {
       postTodoService(description)
    }

    return (
        <div className="TodoApp">
            <Header className="Header"/>


            <input type="text" onChange={handleDescriptionChange}/>
            <button onClick={createToDo}></button>

            <StatusField className= "StatusField"/>
        </div>
    );
}

export default App;

