import axios from "axios";

export function getTodoService() {

 return   axios.get('/api/todo')
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export function postTodoService(description) {

    return axios.post("/api/todo", {description:description})
        .then(function(response){
            console.log(response)
        })
        .catch(function (error){
            console.log(error)
        })

        }