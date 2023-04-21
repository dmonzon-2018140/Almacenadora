import axios from 'axios';
import Swal from 'sweetalert2';

const URL = 'http://localhost:3000/api/';

export const apiTarea = async () => {
    try {
        const { data: { tasks } } = await axios.get(`${URL}read-tasks`);
        console.log(tasks);
        return tasks;

    } catch ({ response: { data } }) {
        return data.message;
    }
}

export const apiCrearTarea = async (title, description, Date1, Date2, state, responsible) => {

    try {

        const tareaGuardada = await axios.post(`${URL}create-task`, {
            title: title,
            description: description,
            Date1: Date1,
            Date2: Date2,
            state: state,
            responsible: responsible
        });

        console.log(tareaGuardada);
        return true;

    } catch ({ response: { data: { message } } }) {

        if (message === 'falla en datos') {
            Swal.fire({
                icon: "error",
                title: "Error al agregar",
                text: message,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                console.log(result);
            });
        } 
    }
}