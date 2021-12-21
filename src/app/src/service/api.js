import axios from 'axios';

const url = 'http://127.0.0.1:8000';

export const postTodo = async (post) => {
    // console.log(post);
    try {
        return await axios.post(`${url}/todos/`, post);
    } catch (error) {
        console.log('Error while calling postTodo API ', error);
    }
}

export const getTodos= async () => {
    try {
        return await axios.get(`${url}/todos/`);
    } catch (error) {
        console.log('Error while calling getTodos API ', error);
    }
}