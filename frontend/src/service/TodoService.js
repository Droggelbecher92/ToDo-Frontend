import axios from "axios";

export function GetTodoService() {

 return   axios.get('/api/todo')
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        })
}

