import './App.css';
import './components/Header.js'
import {Header} from "./components/Header";
import {StatusField} from "./components/StatusField";

function InputField(props) {
    return null;
}

function App() {
    return (
        <div className="TodoApp">
            <Header className="Header"/>
            <InputField className="InputField"/>
            <StatusField className= "StatusField"/>
        </div>
    );
}

export default App;
