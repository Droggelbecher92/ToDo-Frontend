import axios from "axios";

export function getTodoService() {

    return axios.get('/api/todo')
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export function postTodoService(description) {
    console.log(description)
    return axios.post("/api/todo", {description})
        .then(function (response) {
            console.log(response)
        })
        .then(getTodoService)
        .catch(function (error) {
            console.log(error)
        })
}

export function putTodoService(whichId){
    console.log(whichId)
    return axios.put("/api/todo/"+whichId)
        .then(function (response) {
            console.log(response)
        })
        .then(putTodoService)
        .catch(function (error) {
            console.log(error)
        })
}