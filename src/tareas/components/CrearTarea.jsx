import { Tarea } from '../models/tarea.model'
import { FormTarea } from './FormTarea'

export const CrearTarea = () => {
    return (
        <>
            <div className="container">
                <h1>Agregar otra tarea</h1>
                <FormTarea userProp={Tarea}
                    titleButton={"Anota tarea"}
                    option={1} />
            </div>
        </>
    )
}
