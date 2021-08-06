import './App.css';
import './components/Header.js'
import {Header} from "./components/Header";
import {StatusField} from "./components/StatusField";
import {GetTodoService} from "./service/TodoService";
import {useEffect} from "react";



function App() {

    useEffect(GetTodoService, [])
    return (
        <div className="TodoApp">
            <Header className="Header"/>

            <StatusField className= "StatusField"/>
        </div>
    );
}

export default App;
