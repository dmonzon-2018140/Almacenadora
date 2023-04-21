
export const FormTarea = ({userProp, titleButton, option}) => {
    return (
        <>
            <form>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="exampleInputName1" aria-describedby="userNameHelp" />
                </div>
                <div classname="mb-3">
                    <label classname="form-label">Descripcion</label>
                    <input type="description" classname="form-control" id="exampleInputDescription1" aria-describedby="descrriptionHelp" />
                </div>
                <div classname="mb-3">
                    <label classname="form-check-label" for="exampleCheck1">Fecha inicio</label>
                    <input type="date" classname="form-check-input" id="exampleDate1" />
                </div>
                <div classname="mb-3">
                    <label classname="form-check-label" for="exampleCheck1">Fecha entrega</label>
                    <input type="date" classname="form-check-input" id="exampleDate2" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Estado</label>
                    <input type="state" className="form-control" id="exampleInputState1" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre y apellido de la persona</label>
                    <input type="text" className="form-control" id="exampleInputUserName1" aria-describedby="userNameHelp" />
                </div>
                <button type="submit" classname="btn btn-primary">Guardar Cambios</button>
            </form>
        </>
    )
}
