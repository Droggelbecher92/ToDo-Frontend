import axios from "axios";

axios.get('/api/todo')
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    })

