//create api request for todo page here
import { getJwtToken } from '../Api/OrganizerAuth';

import axios from 'axios';

export function getTodo() {
    return axios.get('https://localhost:7117/todo/all-tasks', {
        headers: {
        Authorization: 'Bearer ' + getJwtToken(),
        }
    });
};

export async function saveTodoToBackend(todo) {
    return await axios.post('https://localhost:7117/todo/update-tasks', todo, {
        headers: {
        Authorization: 'Bearer ' + getJwtToken(),
        }
    });
}