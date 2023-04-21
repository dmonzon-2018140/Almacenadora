import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiTarea } from "../api/apiTarea";

export const ListaTareas = () => {

    const [listaTareas, setListaTareas] = useState([]);

    const vistaListaTareas = async() => {
        const getListaTareasDeApi = await apiTarea();
        setListaTareas(getListaTareasDeApi);
    }

    useEffect(() => {
      vistaListaTareas
    }, [])
    

    return (
        <>
            <h2>Listado con tareas</h2>
            <hr />
            <button className="btn btn-primary">
                <Link to="/agregar">Nueva tarea</Link>
            </button>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"># id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Date1</th>
                            <th scope="col">Date2</th>
                            <th scope="col">State</th>
                            <th scope="col">Responsible</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaTareas.map((t) => {
                            return (
                                <tr key={t._id}>
                                    <th scope="row">{t._id}</th>
                                    <td>{t.title}</td>
                                    <td>{t.description}</td>
                                    <td>{t.date1}</td>
                                    <td>{t.date2}</td>
                                    <td>{t.state}</td>
                                    <td>{t.responsible}</td>
                                    <th>
                                        <button className="btn btn-danger ml-2">Eliminar</button>
                                    </th>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
